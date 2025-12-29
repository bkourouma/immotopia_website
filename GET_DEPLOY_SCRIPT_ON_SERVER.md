# Getting deploy.sh on the Server

## Option 1: Via Git (Recommended if repo is tracked)

### On your local machine:
```bash
# Commit the new files
git add deploy.sh ecosystem.config.js nginx-site-config.conf
git add DEPLOYMENT_GUIDE.md DEPLOYMENT_SUMMARY.md
git commit -m "Add deployment scripts and documentation"
git push
```

### On the server:
```bash
ssh -i ~/.ssh/id_ed25519 deployer@147.93.44.169
cd /var/www/immo-annonces-website
git pull
chmod +x deploy.sh
./deploy.sh
```

---

## Option 2: Copy directly to server (Quick method)

### On your local machine:
```bash
# Copy deploy.sh to server
scp -i ~/.ssh/id_ed25519 deploy.sh deployer@147.93.44.169:/var/www/immo-annonces-website/

# Copy ecosystem.config.js
scp -i ~/.ssh/id_ed25519 ecosystem.config.js deployer@147.93.44.169:/var/www/immo-annonces-website/
```

### On the server:
```bash
ssh -i ~/.ssh/id_ed25519 deployer@147.93.44.169
cd /var/www/immo-annonces-website
chmod +x deploy.sh
./deploy.sh
```

---

## Option 3: Create it directly on the server

If you prefer to create it on the server directly:

```bash
ssh -i ~/.ssh/id_ed25519 deployer@147.93.44.169
cd /var/www/immo-annonces-website

# Create the script
cat > deploy.sh << 'DEPLOY_SCRIPT_EOF'
#!/bin/bash
# [paste the entire deploy.sh content here]
DEPLOY_SCRIPT_EOF

chmod +x deploy.sh
./deploy.sh
```

---

## Quick Check: Is the file already there?

```bash
ssh -i ~/.ssh/id_ed25519 deployer@147.93.44.169
cd /var/www/immo-annonces-website
ls -la deploy.sh
```

If it exists, just run:
```bash
chmod +x deploy.sh
./deploy.sh
```

