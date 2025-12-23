# Common functions for SpectKit PowerShell scripts

function Find-RepositoryRoot {
    <#
    .SYNOPSIS
    Finds the repository root by looking for .git directory or pnpm-workspace.yaml
    #>
    $currentPath = Get-Location
    $root = $null
    
    while ($currentPath) {
        if (Test-Path (Join-Path $currentPath ".git")) {
            $root = $currentPath
            break
        }
        if (Test-Path (Join-Path $currentPath "pnpm-workspace.yaml")) {
            $root = $currentPath
            break
        }
        $parent = Split-Path $currentPath -Parent
        if ($parent -eq $currentPath) { break }
        $currentPath = $parent
    }
    
    if (-not $root) {
        throw "Repository root not found. Make sure you're in a git repository or monorepo."
    }
    
    return $root
}

function Test-FeatureBranch {
    <#
    .SYNOPSIS
    Tests if the current branch follows the format ###-feature-name
    #>
    param(
        [string]$BranchName
    )
    
    if ([string]::IsNullOrWhiteSpace($BranchName)) {
        $BranchName = git rev-parse --abbrev-ref HEAD 2>$null
    }
    
    if (-not $BranchName) {
        return $false
    }
    
    return $BranchName -match '^\d{3}-[a-z0-9-]+$'
}

function Get-FeaturePathsEnv {
    <#
    .SYNOPSIS
    Returns feature paths as environment variables in JSON format for Cursor AI
    #>
    param(
        [string]$FeatureDir,
        [switch]$Json
    )
    
    $repoRoot = Find-RepositoryRoot
    $featureDir = if ($FeatureDir) { $FeatureDir } else {
        $branch = git rev-parse --abbrev-ref HEAD 2>$null
        if (-not $branch -or -not (Test-FeatureBranch $branch)) {
            throw "Not on a feature branch. Current branch: $branch"
        }
        $featureNumber = ($branch -split '-')[0]
        $featureName = ($branch -split '-', 2)[1]
        Join-Path $repoRoot "specs" "$branch"
    }
    
    $specFile = Join-Path $featureDir "spec.md"
    $planFile = Join-Path $featureDir "plan.md"
    $tasksFile = Join-Path $featureDir "tasks.md"
    $researchFile = Join-Path $featureDir "research.md"
    $dataModelFile = Join-Path $featureDir "data-model.md"
    $contractsDir = Join-Path $featureDir "contracts"
    
    $paths = @{
        REPO_ROOT = $repoRoot
        FEATURE_DIR = $featureDir
        SPEC_FILE = $specFile
        PLAN_FILE = $planFile
        TASKS_FILE = $tasksFile
        RESEARCH_FILE = $researchFile
        DATA_MODEL_FILE = $dataModelFile
        CONTRACTS_DIR = $contractsDir
        BRANCH_NAME = (Split-Path $featureDir -Leaf)
    }
    
    if ($Json) {
        return $paths | ConvertTo-Json -Compress
    }
    
    return $paths
}

function Get-NextFeatureNumber {
    <#
    .SYNOPSIS
    Gets the next available feature number (001, 002, etc.)
    #>
    $repoRoot = Find-RepositoryRoot
    $specsDir = Join-Path $repoRoot "specs"
    
    if (-not (Test-Path $specsDir)) {
        return "001"
    }
    
    $existingDirs = Get-ChildItem -Path $specsDir -Directory -ErrorAction SilentlyContinue
    $numbers = @()
    
    foreach ($dir in $existingDirs) {
        $name = $dir.Name
        if ($name -match '^(\d{3})-') {
            $numbers += [int]$matches[1]
        }
    }
    
    if ($numbers.Count -eq 0) {
        return "001"
    }
    
    $nextNumber = ($numbers | Measure-Object -Maximum).Maximum + 1
    return "{0:D3}" -f $nextNumber
}

function Get-SanitizedFeatureName {
    <#
    .SYNOPSIS
    Sanitizes a feature name to be used in branch and directory names
    #>
    param(
        [Parameter(Mandatory=$true)]
        [string]$FeatureName
    )
    
    # Convert to lowercase, replace spaces and special chars with hyphens
    $sanitized = $FeatureName.ToLower()
    $sanitized = $sanitized -replace '[^a-z0-9\s-]', ''
    $sanitized = $sanitized -replace '\s+', '-'
    $sanitized = $sanitized -replace '-+', '-'
    $sanitized = $sanitized.Trim('-')
    
    return $sanitized
}

# Note: export-modulemember removed - functions are dot-sourced, not imported as a module

