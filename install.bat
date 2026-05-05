@echo off
echo ========================================
echo Installing Dependencies...
echo ========================================
echo.

echo Cleaning old files...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f /q package-lock.json

echo.
echo Installing with legacy-peer-deps...
call npm install --legacy-peer-deps

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo To start the dev server, run:
echo npm run dev
echo.
pause
