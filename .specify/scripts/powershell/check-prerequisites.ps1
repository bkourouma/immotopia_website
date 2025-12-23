# Check prerequisites for feature development
# Usage: .\check-prerequisites.ps1 [-RequireTasks] [-IncludeTasks] [-Json]

param(
    [switch]$RequireTasks,
    [switch]$IncludeTasks,
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
    $paths = Get-FeaturePathsEnv -FeatureDir $featureDir
    
    $files = @{
        spec = @{
            path = $paths.SPEC_FILE
            exists = (Test-Path $paths.SPEC_FILE)
        }
        plan = @{
            path = $paths.PLAN_FILE
            exists = (Test-Path $paths.PLAN_FILE)
        }
    }
    
    if ($IncludeTasks -or $RequireTasks) {
        $files.tasks = @{
            path = $paths.TASKS_FILE
            exists = (Test-Path $paths.TASKS_FILE)
        }
    }
    
    $allRequired = $files.spec.exists -and $files.plan.exists
    if ($RequireTasks) {
        $allRequired = $allRequired -and $files.tasks.exists
    }
    
    $result = @{
        success = $allRequired
        branchName = $branch
        featureDir = $featureDir
        files = $files
        allRequired = $allRequired
    }
    
    if ($Json) {
        Write-Output ($result | ConvertTo-Json -Compress)
    } else {
        if ($allRequired) {
            Write-Output "✅ All required files exist"
        } else {
            Write-Output "❌ Missing required files:"
            foreach ($file in $files.PSObject.Properties) {
                $fileInfo = $file.Value
                $status = if ($fileInfo.exists) { "✅" } else { "❌" }
                Write-Output "  $status $($file.Name): $($fileInfo.path)"
            }
        }
    }
    
    if (-not $allRequired) {
        exit 1
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

