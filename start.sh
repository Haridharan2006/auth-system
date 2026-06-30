#!/bin/bash

clear

echo "========================================================"
echo "      Authentication System"
echo "========================================================"
echo

# ---------- Check Docker ----------

if ! command -v docker >/dev/null 2>&1; then
    echo "❌ Docker is not installed."
    exit 1
fi

if docker compose version >/dev/null 2>&1; then
    COMPOSE="docker compose"
elif command -v docker-compose >/dev/null 2>&1; then
    COMPOSE="docker-compose"
else
    echo "❌ Docker Compose is not installed."
    exit 1
fi

if ! docker info >/dev/null 2>&1; then
    echo "❌ Docker daemon is not running."
    echo "Please start Docker Desktop or Docker Engine."
    exit 1
fi

echo "✔ Docker detected."
echo "✔ Using: $COMPOSE"

echo
echo "Starting containers..."
echo

$COMPOSE up -d

if [ $? -ne 0 ]; then
    echo
    echo "❌ Failed to start containers."
    exit 1
fi

echo
echo "Waiting for services..."
sleep 10

echo
echo "Checking running containers..."
docker ps

echo
echo "========================================================"
echo " Authentication System Started Successfully"
echo "========================================================"

echo
echo "Frontend : http://localhost:5500"
echo "Backend  : http://localhost:5000"
echo "Swagger  : http://localhost:5000/api-docs"
echo "Keycloak : http://localhost:8081"
echo "KrakenD  : http://localhost:8090"

echo
echo "Done."