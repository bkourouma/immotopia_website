@echo off
echo ========================================
echo   ImmoTopia Quick Start
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
echo   API:  http://localhost:3002
echo   Web:  http://localhost:3003
echo.
echo Press Ctrl+C to stop the servers
echo ========================================
echo.

start cmd /k "pnpm dev"

echo.
echo [INFO] Application launched in new window
echo.
pause

