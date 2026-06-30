@echo off
cls

echo ========================================================
echo Stopping Authentication System
echo ========================================================
echo.

docker compose version >nul 2>&1

if errorlevel 1 (
    docker-compose down
) else (
    docker compose down
)

echo.
echo Containers stopped.

docker ps

pause