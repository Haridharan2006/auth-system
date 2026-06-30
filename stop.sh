#!/bin/bash

clear

echo "========================================================"
echo "Stopping Authentication System"
echo "========================================================"
echo

if docker compose version >/dev/null 2>&1; then
    COMPOSE="docker compose"
else
    COMPOSE="docker-compose"
fi

$COMPOSE down

echo
echo "✔ Containers stopped."

docker ps

echo
echo "Done."