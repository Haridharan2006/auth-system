#!/bin/bash

clear

echo "========================================================"
echo "Reset Authentication System"
echo "========================================================"

if ! command -v docker >/dev/null 2>&1; then
    echo "Docker not installed."
    exit 1
fi

if docker compose version >/dev/null 2>&1; then
    COMPOSE="docker compose"
else
    COMPOSE="docker-compose"
fi

echo
echo "Stopping containers..."
$COMPOSE down

echo
echo "Removing stopped containers..."
docker container prune -f

echo
echo "Removing dangling images..."
docker image prune -f

echo
echo "Rebuilding..."

$COMPOSE up --build -d

echo
echo "Waiting..."
sleep 10

echo
echo "Running containers"

docker ps

echo
echo "========================================================"
echo " Reset Complete"
echo "========================================================"

echo
echo "Frontend : http://localhost:5500"
echo "Backend  : http://localhost:5000"
echo "Swagger  : http://localhost:5000/api-docs"
echo "Keycloak : http://localhost:8081"
echo "KrakenD  : http://localhost:8090"