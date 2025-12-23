# Update agent context file with current feature technologies
# Usage: .\update-agent-context.ps1 [-Technologies @("tech1", "tech2")] [-Json]

param(
    [string[]]$Technologies = @(),
    [switch]$Json
)

# Import common functions
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
. (Join-Path $scriptPath "common.ps1")

try {
    $repoRoot = Find-RepositoryRoot
    $rulesFile = Join-Path $repoRoot ".cursor" "rules" "specify-rules.mdc"
    
    if (-not (Test-Path $rulesFile)) {
        throw "Rules file not found: $rulesFile"
    }
    
    $content = Get-Content $rulesFile -Raw
    
    # Extract technologies from plan.md if not provided
    if ($Technologies.Count -eq 0) {
        $branch = git rev-parse --abbrev-ref HEAD 2>$null
        if ($branch -and (Test-FeatureBranch $branch)) {
            $planFile = Join-Path $repoRoot "specs" $branch "plan.md"
            if (Test-Path $planFile) {
                $planContent = Get-Content $planFile -Raw
                # Simple extraction - look for technology mentions
                # This is a basic implementation, can be enhanced
                $techMatches = [regex]::Matches($planContent, '(?i)(typescript|react|next\.js|fastify|prisma|postgresql|antd|zod)')
                $Technologies = $techMatches | ForEach-Object { $_.Value } | Select-Object -Unique
            }
        }
    }
    
    # Find and update technologies section
    $techMarker = '<!-- TECHNOLOGIES_START -->'
    $techEndMarker = '<!-- TECHNOLOGIES_END -->'
    
    if ($content -match "$techMarker([\s\S]*?)$techEndMarker") {
        $newTechSection = $Technologies | ForEach-Object { "- $_" } | Out-String
        $newTechSection = $techMarker + "`n" + $newTechSection.Trim() + "`n" + $techEndMarker
        $content = $content -replace "$techMarker[\s\S]*?$techEndMarker", $newTechSection
    } else {
        # Add technologies section if not found
        $techSection = "`n$techMarker`n" + ($Technologies | ForEach-Object { "- $_" } | Out-String).Trim() + "`n$techEndMarker`n"
        $content = $content + $techSection
    }
    
    Set-Content -Path $rulesFile -Value $content -NoNewline
    
    $result = @{
        success = $true
        rulesFile = $rulesFile
        technologies = $Technologies
    }
    
    if ($Json) {
        Write-Output ($result | ConvertTo-Json -Compress)
    } else {
        Write-Output "✅ Agent context updated"
        Write-Output "Technologies: $($Technologies -join ', ')"
    }
    
} catch {
    $errorResult = @{
        success = $false
        error = $_.Exception.Message
    }
    
    if ($Json) {
        Write-Output ($errorResult | ConvertTo-Json -Compress)
    } else {
        Write-Error $_.Exception.Message
    }
    exit 1
}

