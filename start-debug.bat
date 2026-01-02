@echo off
echo ========================================
echo   ImmoTopia Debug Launcher
echo ========================================
echo.
echo If you can see this message, the batch file is working.
echo.
echo Current directory: %CD%
echo.
echo Press any key to continue with the checks...
pause
echo.

cd /d "%~dp0"
echo After cd, directory is: %CD%
echo.

echo Checking Node.js...
where node
echo.

echo Checking pnpm...
where pnpm
echo.

echo.
echo Press any key to try starting the application...
pause

pnpm dev

echo.
echo ========================================
echo Application stopped or failed to start.
echo ========================================
pause

