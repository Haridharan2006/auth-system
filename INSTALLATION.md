# 🚀 Installation Guide

This guide explains how to set up and run the Authentication System on a new machine.

---

# Prerequisites

Make sure the following software is installed:

- Docker Desktop (Windows/macOS) or Docker Engine (Linux)
- Docker Compose
- Git

Verify the installation:

```bash
docker --version
docker compose version
git --version
```

---

# Clone the Repository

```bash
git clone https://github.com/<your-github-username>/auth-system.git

cd auth-system
```

Replace `<your-github-username>` with your GitHub username.

---

# Project Structure

```
auth-system/
│
├── backend/
├── frontend/
├── krakend/
├── nginx/
├── docker-compose.yml
├── README.md
└── ...
```

---

# Configure Environment Variables

Create a `.env` file inside the `backend` directory if it is not already present.

Example:

```env
PORT=5000

DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=authdb

JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=1h
```

> **Note:** The `.env` file should **not** be committed to GitHub.

---

# Build and Start the Project

From the project root directory, run:

```bash
docker compose up --build
```

Or, if using the helper script:

```bash
./start.sh
```

The first build may take several minutes as Docker downloads the required images.

---

# Services

After startup, the following services will be available:

| Service | URL |
|----------|-----|
| Frontend | http://localhost:5500 |
| Backend API | http://localhost:5000 |
| Swagger | http://localhost:5000/api-docs |
| Keycloak | http://localhost:8081 |
| KrakenD Gateway | http://localhost:8090 |
| PostgreSQL | localhost:5432 |

---

# Default Keycloak Credentials

Administrator Login

```
Username: admin
Password: admin
```

Example test user

```
Username: hari
Password: 1234
```

---

# Running Database Migrations

If migrations do not run automatically, execute:

```bash
docker exec -it node_backend npx knex migrate:latest
```

---

# Running Database Seeds

If you need to insert the default data:

```bash
docker exec -it node_backend npx knex seed:run
```

---

# Verify Docker Containers

```bash
docker ps
```

Expected containers:

- postgres_db
- node_backend
- frontend_server
- keycloak
- nginx_server
- krakend_gateway

---

# Stopping the Project

Using Docker:

```bash
docker compose down
```

Or using the helper script:

```bash
./stop.sh
```

---

# Common Issues

## Docker is not running

**Error**

```
Cannot connect to the Docker daemon
```

**Solution**

Start Docker Desktop (Windows/macOS) or ensure the Docker service is running on Linux.

---

## Port Already in Use

**Error**

```
Bind for 0.0.0.0:5000 failed
```

**Solution**

Stop the process using the port or change the port mapping in `docker-compose.yml`.

---

## Database Connection Error

Check that:

- PostgreSQL container is running.
- The `.env` values match `docker-compose.yml`.
- `DB_HOST=postgres` when running inside Docker.

---

## Keycloak Login Issues

Verify:

- Keycloak container is running.
- The client configuration is correct.
- Redirect URIs match the application URLs.
- Group mappings exist in the database.

---

# Updating the Project

Pull the latest changes:

```bash
git pull
```

Rebuild the containers:

```bash
docker compose up --build
```

---

# Project Verification Checklist

Before using the application, verify:

- [ ] Docker containers are running.
- [ ] Frontend opens successfully.
- [ ] Local Login works.
- [ ] Keycloak Login works.
- [ ] Dashboard loads correctly.
- [ ] Logout redirects to the login page.
- [ ] Swagger UI is accessible.
- [ ] PostgreSQL is connected.

---

# Need Help?

If the project does not start:

1. Check Docker logs.
2. Verify `.env` values.
3. Ensure all required ports are available.
4. Rebuild the containers.

Useful commands:

```bash
docker compose logs

docker ps

docker compose restart
```

---

# Successfully Installed

If all services are running and the verification checklist passes, the Authentication System is ready to use.