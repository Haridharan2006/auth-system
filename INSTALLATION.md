# Installation Guide

## Enterprise Authentication System

This guide explains how to install and run the Enterprise Authentication System using Docker. The application supports Local Authentication, OpenID Connect (Keycloak), and LDAP Authentication (OpenLDAP).

---

# Table of Contents

- Prerequisites
- Clone the Repository
- Project Structure
- Environment Configuration
- Running the Application
- Startup Scripts
- Manual Docker Commands
- Accessing the Services
- Default Credentials
- Stopping the Application
- Resetting the Environment
- Troubleshooting

---

# Prerequisites

Before running the project, ensure the following software is installed:

- Docker
- Docker Compose
- Git

Verify the installations:

```bash
docker --version
docker-compose --version
git --version
```

---

# Clone the Repository

Clone the repository from GitHub.

```bash
git clone <repository-url>
cd auth-system
```

Replace `<repository-url>` with your GitHub repository URL.

---

# Project Structure

```text
auth-system/
│
├── backend/
├── frontend/
├── nginx/
├── krakend/
│
├── docker-compose.yml
│
├── start.sh
├── stop.sh
├── reset.sh
│
├── start.bat
├── stop.bat
├── reset.bat
│
└── README.md
```

---

# Environment Configuration

Navigate to the backend directory.

```bash
cd backend
```

Create a `.env` file if one does not already exist.

Example:

```env
PORT=5000

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=1h

DB_HOST=postgres

DB_PORT=5432

DB_USER=postgres

DB_PASSWORD=postgres

DB_NAME=authdb

LDAP_URL=ldap://openldap:389

LDAP_BASE_DN=dc=authsystem,dc=local

LDAP_USERS_DN=ou=users,dc=authsystem,dc=local

LDAP_GROUPS_DN=ou=groups,dc=authsystem,dc=local

LDAP_ADMIN_DN=cn=admin,dc=authsystem,dc=local

LDAP_ADMIN_PASSWORD=admin
```

---

# Running the Application

## Linux / macOS

Start all services.

```bash
./start.sh
```

The script will:

- Build Docker images
- Start all containers
- Run database migrations
- Seed the database
- Launch all services

---

## Windows

Run:

```cmd
start.bat
```

This performs the same operations as the Linux startup script.

---

# Manual Docker Commands

If you prefer not to use the startup scripts:

Build and start the application.

```bash
docker-compose up --build
```

Run in detached mode.

```bash
docker-compose up -d
```

View logs.

```bash
docker-compose logs -f
```

List running containers.

```bash
docker ps
```

---

# Docker Services

The following containers are started.

| Container | Description |
|------------|-------------|
| frontend_server | Frontend Web Application |
| node_backend | Express Backend API |
| postgres_db | PostgreSQL Database |
| keycloak | OpenID Connect Provider |
| openldap_server | OpenLDAP Directory |
| phpldapadmin | LDAP Administration |
| nginx_server | Reverse Proxy |
| krakend_gateway | API Gateway |

---

# Accessing the Services

| Service | URL |
|----------|-----|
| Frontend | http://localhost:5500 |
| Backend API | http://localhost:5000 |
| Swagger | http://localhost:5000/api-docs |
| PostgreSQL | localhost:5432 |
| Keycloak | http://localhost:8081 |
| phpLDAPadmin | http://localhost:8082 |
| Nginx | http://localhost:8080 |
| KrakenD | http://localhost:8090 |

---

# Authentication Methods

The application supports three authentication mechanisms.

## Local Authentication

Uses user credentials stored in PostgreSQL.

---

## OpenID Connect

Uses Keycloak as the identity provider.

---

## LDAP Authentication

Uses OpenLDAP for centralized user authentication.

Users authenticate using their LDAP username and password.

User groups are retrieved from LDAP and mapped to application roles before generating a JWT.

---

# Default LDAP Configuration

Base DN

```text
dc=authsystem,dc=local
```

Organizational Units

```text
ou=users

ou=groups
```

Example LDAP Groups

```text
admin

developer

user
```

---

# Default Credentials

## PostgreSQL

| Field | Value |
|--------|-------|
| Username | postgres |
| Password | postgres |

---

## Keycloak

| Field | Value |
|--------|-------|
| Username | admin |
| Password | admin |

---

## OpenLDAP

| Field | Value |
|--------|-------|
| Admin DN | cn=admin,dc=authsystem,dc=local |
| Password | admin |

---

# Stopping the Application

Linux/macOS

```bash
./stop.sh
```

Windows

```cmd
stop.bat
```

Manual

```bash
docker-compose down
```

---

# Resetting the Environment

Linux/macOS

```bash
./reset.sh
```

Windows

```cmd
reset.bat
```

The reset script removes containers, networks, and volumes before rebuilding the application.

---

# Troubleshooting

## Docker containers are not starting

Run:

```bash
docker-compose logs
```

---

## View running containers

```bash
docker ps
```

---

## Restart the application

```bash
docker-compose down
docker-compose up --build
```

---

## Verify LDAP

```bash
docker exec -it openldap_server ldapsearch \
-x \
-b "dc=authsystem,dc=local"
```

---

## Verify PostgreSQL

```bash
docker exec -it postgres_db psql -U postgres
```

---

## Verify Keycloak

Open:

```
http://localhost:8081
```

---

# Installation Complete

If all services start successfully, open:

```
http://localhost:5500
```

You can now authenticate using:

- Local Authentication
- LDAP Authentication
- OpenID Connect (Keycloak)
