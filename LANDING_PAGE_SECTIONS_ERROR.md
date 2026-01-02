# Landing Page Sections Not Displaying - Error Description

## Problem Summary
The landing page (`/`) only displays the Hero section and links/navigation, but all other sections are missing:
- HeroStatsSection
- ProblemSolution
- FeaturesPreview
- HowItWorks
- PersonasPreview
- Testimonials
- StatsSection
- PricingPreview
- FAQ
- FinalCTA

## Current Code Structure

### Page Structure
```
apps/web/src/app/page.tsx
  └─> HomePageClient
      └─> HomePageContent
          ├─> TopBarCTA
          ├─> Hero ✅ (visible)
          ├─> HeroStatsSection ❌ (not visible)
          ├─> ProblemSolution ❌ (not visible)
          ├─> FeaturesPreview ❌ (not visible)
          ├─> HowItWorks ❌ (not visible)
          ├─> PersonasPreview ❌ (not visible)
          ├─> Testimonials ❌ (not visible)
          ├─> StatsSection ❌ (not visible)
          ├─> PricingPreview ❌ (not visible)
          ├─> FAQ ❌ (not visible)
          └─> FinalCTA ❌ (not visible)
```

### Files Involved
- `apps/web/src/app/page.tsx` - Main page component
- `apps/web/src/components/pages/HomePageContent.tsx` - Contains all sections
- `apps/web/src/components/pages/HomePageClient.tsx` - Client wrapper
- `apps/web/src/components/layout/ConditionalLayout.tsx` - Layout wrapper
- `packages/ui/src/components/ScrollReveal/ScrollReveal.tsx` - Animation component used by all sections
- `packages/ui/src/hooks/useScrollAnimation.ts` - IntersectionObserver hook

## Potential Root Causes

### 1. ScrollReveal Visibility Issue
All sections use `ScrollReveal` component which starts with `opacity: 0` and only becomes visible when scrolled into view via `IntersectionObserver`.

**Issue**: Elements start hidden and may never become visible if:
- IntersectionObserver doesn't fire correctly
- Elements are not in the DOM when observer attaches
- Timing issues with DOM rendering

**Files**:
- `packages/ui/src/components/ScrollReveal/ScrollReveal.module.css` - Sets initial `opacity: 0`
- `packages/ui/src/hooks/useScrollAnimation.ts` - Manages visibility state

### 2. Hero Section Layout Issue
The Hero section uses `min-h-screen` which makes it take up the full viewport height. This means all other sections are below the fold and require scrolling to see.

**Files**:
- `apps/web/src/components/sections/Hero.tsx` - Line 23: `'relative overflow-hidden min-h-screen flex items-center justify-center'`

### 3. CSS Module Loading
ScrollReveal uses CSS modules. If the CSS isn't loading properly, elements might remain invisible.

**Files**:
- `packages/ui/src/components/ScrollReveal/ScrollReveal.module.css`

### 4. Client-Side Rendering Issues
All sections are client components (`'use client'`). If there's a hydration mismatch or JavaScript error, they might not render.

### 5. Import/Export Issues
Sections are imported from `../sections` which uses an index file. If exports are broken, components won't render.

**Files**:
- `apps/web/src/components/sections/index.ts`

## Recent Changes Made

### Fix 1: Nested `<main>` Tags
- **Changed**: `HomePageContent.tsx` from `<main>` to `<div>` 
- **Reason**: `ConditionalLayout` already wraps content in `<main>`, causing invalid HTML

### Fix 2: ScrollReveal Visibility Improvements
- **Changed**: `useScrollAnimation.ts` hook
  - Added initial visibility check on mount
  - Changed `rootMargin` to `'-100px 0px -100px 0px'` for earlier triggering
  - Added 100ms delay before setting up IntersectionObserver
- **Reason**: Elements below viewport should become visible on scroll

## Debugging Steps Needed

### 1. Check Browser Console
Look for:
- JavaScript errors preventing rendering
- React hydration errors
- Missing module errors
- IntersectionObserver errors

### 2. Inspect DOM
Check if sections are in the HTML:
- Open DevTools → Elements/Inspector
- Search for section IDs or classes like `HeroStatsSection`, `ProblemSolution`, etc.
- Verify if elements exist but are hidden (`opacity: 0`, `display: none`, `visibility: hidden`)
- Check computed styles

### 3. Check Network Tab
Verify CSS modules are loading:
- Look for `ScrollReveal.module.css` requests
- Check if CSS files return 200 OK

### 4. Test Without ScrollReveal
Temporarily remove ScrollReveal wrappers to see if sections render without animation.

### 5. Check React DevTools
- Verify components are mounted
- Check if props are being passed correctly
- Look for error boundaries catching errors

## Quick Test Commands

```bash
# Check for TypeScript errors
cd apps/web
npm run type-check

# Check for build errors
npm run build

# Check for lint errors
npm run lint

# Start dev server and check console
npm run dev
```

## Expected Behavior
1. Hero section should be visible immediately (full screen)
2. When scrolling down, other sections should fade/reveal into view
3. All sections should be in the DOM (even if initially invisible)
4. ScrollReveal should trigger when sections enter viewport

## Actual Behavior
- Only Hero section and navigation links are visible
- Scrolling down doesn't reveal other sections
- Unknown if sections are in DOM (need to verify)

## Next Steps
1. **Verify DOM**: Check if sections exist in HTML but are hidden
2. **Check Console**: Look for JavaScript/React errors
3. **Test IntersectionObserver**: Verify if observer is firing
4. **Temporary Fix**: Remove ScrollReveal from one section to test rendering
5. **CSS Check**: Verify ScrollReveal.module.css is loading and styles are applied

## Files to Check
- Browser DevTools Console
- Browser DevTools Network tab (CSS requests)
- Browser DevTools Elements (HTML structure)
- `apps/web/.next` build output
- Server logs (if running dev server)

