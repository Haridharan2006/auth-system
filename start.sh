#!/bin/bash

echo "🚀 Starting Auth System..."

docker-compose up --build -d

echo "⏳ Waiting for services..."
sleep 5

echo "🌐 Opening frontend..."

xdg-open http://localhost:5500 2>/dev/null || open http://localhost:5500

echo "✅ Application Started!"