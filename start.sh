#!/bin/bash

echo "🚀 Starting Auth System..."

# Start all containers
docker-compose up --build -d

echo "⏳ Waiting for services to start..."
sleep 5

echo "🌐 Opening application in browser..."

# Detect OS and open browser
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open http://localhost:5500
elif [[ "$OSTYPE" == "darwin"* ]]; then
    open http://localhost:5500
else
    echo "Please open manually: http://localhost:5500"
fi

echo "✅ Application Started!"

echo "🌐 Frontend: http://localhost:5500"
echo "⚙ Backend: http://localhost:5000"
echo "🚪 Gateway: http://localhost:8090"