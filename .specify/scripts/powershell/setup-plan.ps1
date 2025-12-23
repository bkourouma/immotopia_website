# Setup plan for current feature
# Usage: .\setup-plan.ps1 [-Json]

param(
    [switch]$Json
)

# Import common functions
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
. (Join-Path $scriptPath "common.ps1")

try {
    $repoRoot = Find-RepositoryRoot
    $branch = git rev-parse --abbrev-ref HEAD 2>$null
    
    if (-not $branch) {
        throw "Not in a git repository"
    }
    
    if (-not (Test-FeatureBranch $branch)) {
        throw "Not on a feature branch. Current branch: $branch"
    }
    
    $featureDir = Join-Path $repoRoot "specs" $branch
    $specFile = Join-Path $featureDir "spec.md"
    
    if (-not (Test-Path $specFile)) {
        throw "Spec file not found: $specFile. Run create-new-feature.ps1 first."
    }
    
    # Create plan.md from template
    $planFile = Join-Path $featureDir "plan.md"
    if (-not (Test-Path $planFile)) {
        $templatePath = Join-Path $repoRoot ".specify" "templates" "plan-template.md"
        if (-not (Test-Path $templatePath)) {
            throw "Plan template not found at $templatePath"
        }
        
        $templateContent = Get-Content $templatePath -Raw
        $templateContent = $templateContent -replace '{{BRANCH_NAME}}', $branch
        $templateContent = $templateContent -replace '{{FEATURE_DIR}}', $featureDir
        
        Set-Content -Path $planFile -Value $templateContent -NoNewline
    }
    
    $paths = Get-FeaturePathsEnv -FeatureDir $featureDir
    
    $result = @{
        success = $true
        branchName = $branch
        featureDir = $featureDir
        specFile = $specFile
        planFile = $planFile
        paths = $paths
    }
    
    if ($Json) {
        Write-Output ($result | ConvertTo-Json -Compress)
    } else {
        Write-Output "✅ Plan setup completed!"
        Write-Output "Branch: $branch"
        Write-Output "Plan file: $planFile"
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

