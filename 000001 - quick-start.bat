@echo off
echo ========================================
echo   ImmoTopia Quick Start
echo   Architecture: Astro + Vite + Fastify
echo ========================================
echo.

cd /d "%~dp0"

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    echo This may take a few minutes...
    echo.
    pnpm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERROR] Failed to install dependencies
        echo.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependencies installed successfully!
    echo.
)

REM Check if concurrently exists
if not exist "node_modules\concurrently" (
    echo [WARNING] concurrently not found, reinstalling dependencies...
    echo.
    pnpm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERROR] Failed to install dependencies
        echo.
        pause
        exit /b 1
    )
)

echo [INFO] Starting ImmoTopia...
echo.
echo   API (Fastify):     http://localhost:3002
echo   Public Site (Astro): http://localhost:4321
echo   Admin Panel (Vite):  http://localhost:5173
echo.
echo   Legacy Next.js:    http://localhost:3003 (si encore actif)
echo.
echo Press Ctrl+C to stop the servers
echo ========================================
echo.

REM Start all services
start cmd /k "pnpm dev:all"

echo.
echo [INFO] Application launched in new window
echo.
echo [NOTE] Pour lancer individuellement:
echo   - API:        pnpm dev:api
echo   - Public Site: pnpm dev:public-site
echo   - Admin Panel: pnpm dev:admin-panel
echo.
pause
