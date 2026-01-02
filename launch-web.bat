@echo off
REM Batch file to launch ImmoTopia Web App
REM This script launches the Next.js web application on port 3003

echo ========================================
echo   ImmoTopia Web App Launcher
echo ========================================
echo.

REM Get the directory where the batch file is located
set SCRIPT_DIR=%~dp0
cd /d "%SCRIPT_DIR%"

REM Check if pnpm is installed
where pnpm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] pnpm is not installed or not in PATH.
    echo Please install pnpm: npm install -g pnpm
    echo.
    pause
    exit /b 1
)

echo [INFO] Checking for dependencies...
if not exist "node_modules" (
    echo [WARNING] node_modules not found. Installing dependencies...
    call pnpm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b 1
    )
)

echo.
echo [INFO] Starting ImmoTopia Web App...
echo [INFO] The app will be available at: http://localhost:3003
echo [INFO] Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Launch the web app
call pnpm dev:web

REM If the script exits, pause to see any error messages
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] The web app failed to start.
    pause
)


