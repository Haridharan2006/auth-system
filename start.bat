@echo off
echo 🚀 Starting Auth System...

REM Start Docker containers
docker-compose up --build -d

echo ⏳ Waiting for services...
timeout /t 5 > nul

echo 🌐 Opening frontend...
start http://localhost:5500

echo ✅ Application Started!
pause