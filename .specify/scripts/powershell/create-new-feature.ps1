# Create a new feature specification
# Usage: .\create-new-feature.ps1 "Feature description" [-Json]

param(
    [Parameter(Mandatory=$true)]
    [string]$FeatureDescription,
    
    [switch]$Json
)

# Import common functions
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
. (Join-Path $scriptPath "common.ps1")

try {
    $repoRoot = Find-RepositoryRoot
    $nextNumber = Get-NextFeatureNumber
    $featureName = Get-SanitizedFeatureName -FeatureName $FeatureDescription
    $branchName = "$nextNumber-$featureName"
    
    # Create Git branch
    $currentBranch = git rev-parse --abbrev-ref HEAD 2>$null
    if (-not $currentBranch) {
        throw "Not in a git repository"
    }
    
    # Check if branch already exists
    $branchExists = git show-ref --verify --quiet "refs/heads/$branchName" 2>$null
    if ($branchExists) {
        throw "Branch $branchName already exists"
    }
    
    # Create and checkout branch
    git checkout -b $branchName 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to create branch $branchName"
    }
    
    # Create feature directory
    $specsDir = Join-Path $repoRoot "specs"
    if (-not (Test-Path $specsDir)) {
        New-Item -ItemType Directory -Path $specsDir -Force | Out-Null
    }
    
    $featureDir = Join-Path $specsDir $branchName
    New-Item -ItemType Directory -Path $featureDir -Force | Out-Null
    
    # Copy template
    $templatePath = Join-Path $repoRoot ".specify" | Join-Path -ChildPath "templates" | Join-Path -ChildPath "spec-template.md"
    if (-not (Test-Path $templatePath)) {
        throw "Template not found at $templatePath"
    }
    
    $specFile = Join-Path $featureDir "spec.md"
    $templateContent = Get-Content $templatePath -Raw
    $currentDate = Get-Date -Format "yyyy-MM-dd"
    $templateContent = $templateContent -replace '\{\{FEATURE_NUMBER\}\}', $nextNumber
    $templateContent = $templateContent -replace '\{\{FEATURE_NAME\}\}', $featureDescription
    $templateContent = $templateContent -replace '\{\{BRANCH_NAME\}\}', $branchName
    $templateContent = $templateContent -replace '\{\{DATE\}\}', $currentDate
    
    Set-Content -Path $specFile -Value $templateContent -NoNewline
    
    $result = @{
        success = $true
        branchName = $branchName
        featureDir = $featureDir
        specFile = $specFile
        featureNumber = $nextNumber
    }
    
    if ($Json) {
        Write-Output ($result | ConvertTo-Json -Compress)
    } else {
        Write-Output "✅ Feature created successfully!"
        Write-Output "Branch: $branchName"
        Write-Output "Directory: $featureDir"
        Write-Output "Spec file: $specFile"
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

