# PowerShell script to deploy domain change to production server
# Run this from your local machine

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "Deploiement - Changement de domaine vers immotopia.cloud" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

$SSH_KEY = "C:\Users\BABA\.ssh\id_ed25519"
$SERVER_USER = "deployer"
$SERVER_IP = "147.93.44.169"
$PROJECT_DIR = "/var/www/immo-annonces-new"

# Step 1: Upload deployment script
Write-Host "[1/3] Upload du script de deploiement..." -ForegroundColor Yellow
scp -i $SSH_KEY deploy-domain-change.sh ${SERVER_USER}@${SERVER_IP}:/tmp/
if ($LASTEXITCODE -ne 0) {
    Write-Host "X Erreur lors de l'upload" -ForegroundColor Red
    exit 1
}
Write-Host "OK Script uploade" -ForegroundColor Green
Write-Host ""

# Step 2: Move script and make executable
Write-Host "[2/3] Preparation du script sur le serveur..." -ForegroundColor Yellow
ssh -i $SSH_KEY ${SERVER_USER}@${SERVER_IP} @"
sudo mv /tmp/deploy-domain-change.sh $PROJECT_DIR/
sudo chmod +x $PROJECT_DIR/deploy-domain-change.sh
sudo chown deployer:deployer $PROJECT_DIR/deploy-domain-change.sh
"@
if ($LASTEXITCODE -ne 0) {
    Write-Host "X Erreur lors de la preparation" -ForegroundColor Red
    exit 1
}
Write-Host "OK Script prepare" -ForegroundColor Green
Write-Host ""

# Step 3: Execute deployment
Write-Host "[3/3] Execution du deploiement..." -ForegroundColor Yellow
Write-Host ""
ssh -i $SSH_KEY ${SERVER_USER}@${SERVER_IP} "cd $PROJECT_DIR && ./deploy-domain-change.sh"

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host "OK Deploiement reussi!" -ForegroundColor Green
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Verifiez le sitemap a:" -ForegroundColor Cyan
    Write-Host "https://immotopia.cloud/sitemap.xml" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "==================================================" -ForegroundColor Red
    Write-Host "X Erreur lors du deploiement" -ForegroundColor Red
    Write-Host "==================================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Connectez-vous au serveur pour verifier:" -ForegroundColor Yellow
    Write-Host "ssh -i $SSH_KEY ${SERVER_USER}@${SERVER_IP}" -ForegroundColor White
    Write-Host ""
}
