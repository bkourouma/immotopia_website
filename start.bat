@echo off
REM ========================================
REM   ImmoTopia Application Launcher
REM ========================================

echo ========================================
echo   ImmoTopia Application Launcher
echo ========================================
echo.
echo [DEBUG] Batch file is running...
echo.

REM Change to the directory where this batch file is located
cd /d "%~dp0"
echo [INFO] Working directory: %CD%
echo.
echo [DEBUG] Press any key to continue with checks...
pause
echo.

REM Check if Node.js is installed
echo [INFO] Checking Node.js...
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/
    goto :end
)
for /f "tokens=*" %%i in ('node --version') do echo [OK] Node.js version: %%i

REM Check if pnpm is installed
echo [INFO] Checking pnpm...
pnpm --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] pnpm is not installed or not in PATH.
    echo Installing pnpm globally...
    npm install -g pnpm
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install pnpm.
        goto :end
    )
)
for /f "tokens=*" %%i in ('pnpm --version') do echo [OK] pnpm version: %%i
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] node_modules not found. Installing dependencies...
    echo This may take a few minutes...
    pnpm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install dependencies.
        goto :end
    )
    echo [OK] Dependencies installed successfully.
    echo.
)

echo ========================================
echo [INFO] Starting ImmoTopia...
echo.
echo   API:  http://localhost:3002
echo   Web:  http://localhost:3003
echo.
echo Press Ctrl+C to stop the servers.
echo ========================================
echo.

REM Start the development servers
echo [INFO] About to run: pnpm dev
echo [INFO] If the window closes after this, check for errors above
echo.
pnpm dev

REM This will only execute if pnpm dev exits
echo.
echo [WARNING] pnpm dev has exited with code: %ERRORLEVEL%
echo.

:end
echo.
echo ========================================
echo [INFO] Application has stopped.
echo ========================================
echo.
echo Press any key to close this window...
pause

