@echo off
cls

echo ========================================================
echo Reset Authentication System
echo ========================================================
echo.

docker compose version >nul 2>&1

if errorlevel 1 (
    set compose=docker-compose
) else (
    set compose=docker compose
)

%compose% down

echo.
echo Removing stopped containers...
docker container prune -f

echo.
echo Removing dangling images...
docker image prune -f

echo.
echo Rebuilding...

%compose% up --build -d

echo.
echo Waiting...
timeout /t 10 >nul

docker ps

echo.
echo ========================================================
echo Reset Complete
echo ========================================================
echo.
echo Frontend : http://localhost:5500
echo Backend  : http://localhost:5000
echo Swagger  : http://localhost:5000/api-docs
echo Keycloak : http://localhost:8081
echo KrakenD  : http://localhost:8090
echo.

pause