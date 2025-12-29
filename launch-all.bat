@echo off
REM Batch file to launch ImmoTopia (API + Web)
REM This script stops existing services and launches both the API and Web applications

echo ========================================
echo   ImmoTopia Full Stack Launcher
echo ========================================
echo.

REM Get the directory where the batch file is located
set SCRIPT_DIR=%~dp0
echo [DEBUG] Script directory: %SCRIPT_DIR%
cd /d "%SCRIPT_DIR%"
echo [DEBUG] Current directory: %CD%
echo.

REM Stop services on ports 3002 (API) and 3003 (Web)
echo [INFO] Stopping existing services on ports 3002 and 3003...
echo.

REM Stop processes on port 3002 (API)
for /f "tokens=5" %%a in ('netstat -ano 2^>nul ^| findstr ":3002" ^| findstr "LISTENING"') do (
    echo [INFO] Found process %%a on port 3002 (API), stopping...
    taskkill /PID %%a /F >nul 2>&1
)

REM Stop processes on port 3003 (Web)
for /f "tokens=5" %%a in ('netstat -ano 2^>nul ^| findstr ":3003" ^| findstr "LISTENING"') do (
    echo [INFO] Found process %%a on port 3003 (Web), stopping...
    taskkill /PID %%a /F >nul 2>&1
)

echo [INFO] Waiting 2 seconds for ports to be released...
timeout /t 2 /nobreak >nul
echo.

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
echo [INFO] Starting ImmoTopia (API + Web)...
echo [INFO] API will be available at: http://localhost:3002
echo [INFO] Web will be available at: http://localhost:3003
echo [INFO] Press Ctrl+C to stop the servers
echo.
echo ========================================
echo.

REM Launch both API and Web
call pnpm dev

REM Script should not reach here unless pnpm dev exits
echo.
echo [INFO] The applications have stopped.
pause
