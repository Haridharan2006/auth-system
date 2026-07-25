# Authentication System

A secure enterprise-grade authentication system supporting multiple authentication mechanisms including **Local Authentication**, **OpenID Connect (Keycloak)**, and **LDAP Authentication (OpenLDAP)**. The system uses JWT for secure authorization and is fully containerized using Docker.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Authentication Methods](#authentication-methods)
- [Docker Services](#docker-services)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Default Service URLs](#default-service-urls)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

---

# Project Overview

The Enterprise Authentication System is designed to demonstrate modern authentication and authorization techniques used in enterprise applications.

The project supports three authentication methods:

- Local Authentication using PostgreSQL
- OpenID Connect using Keycloak
- LDAP Authentication using OpenLDAP

Regardless of the authentication method used, authenticated users receive a JWT token that is used to access protected resources within the application.

---

# Features

- Local Authentication
- OpenID Connect (Keycloak)
- LDAP Authentication (OpenLDAP)
- JWT Authentication
- Role-Based Access Control (RBAC)
- Secure Password Hashing using bcrypt
- PostgreSQL Database
- Dockerized Deployment
- Nginx Reverse Proxy
- KrakenD API Gateway
- Swagger API Documentation
- Cross-platform Startup Scripts (Windows & Linux)

---

# System Architecture

```text
                              +----------------------+
                              |      Frontend        |
                              | HTML • CSS • JS      |
                              +----------+-----------+
                                         |
                                   HTTP REST APIs
                                         |
                              +----------v-----------+
                              |   Node.js Backend    |
                              |     Express.js       |
                              +----------+-----------+
                                         |
         +-------------------------------+-------------------------------+
         |                               |                               |
         |                               |                               |
+--------v---------+           +---------v---------+           +----------v---------+
|   PostgreSQL     |           |    Keycloak      |           |     OpenLDAP      |
|  Local Users     |           | OpenID Connect   |           | LDAP Directory    |
+------------------+           +------------------+           +-------------------+
                                         |
                                   JWT Generation
                                         |
                                  Protected Resources
```

---

# Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Authentication | JWT |
| Identity Provider | Keycloak |
| Directory Service | OpenLDAP |
| API Gateway | KrakenD |
| Reverse Proxy | Nginx |
| API Documentation | Swagger |
| Containerization | Docker, Docker Compose |

---

# Project Structure

```text
auth-system/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── migrations/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── seeds/
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── style.css
│   └── Dockerfile
│
├── krakend/
│
├── nginx/
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

# Authentication Methods

## 1. Local Authentication

- User credentials are stored in PostgreSQL.
- Passwords are securely hashed using bcrypt.
- JWT tokens are generated after successful authentication.

---

## 2. OpenID Connect Authentication

- Authentication is performed through Keycloak.
- Supports OpenID Connect (OIDC).
- Users are redirected to Keycloak for authentication.
- After successful login, the application issues a JWT for authorization.

---

## 3. LDAP Authentication

- Authentication is performed using OpenLDAP.
- Users authenticate through LDAP Bind.
- User details and group memberships are retrieved from the LDAP directory.
- LDAP groups are mapped to application roles.
- A JWT token is generated after successful authentication.

---

# Docker Services

| Container | Purpose |
|-----------|---------|
| frontend_server | Frontend Application |
| node_backend | Express Backend |
| postgres_db | PostgreSQL Database |
| keycloak | OpenID Connect Provider |
| openldap_server | LDAP Directory |
| phpldapadmin | LDAP Administration |
| nginx_server | Reverse Proxy |
| krakend_gateway | API Gateway |

---

# Installation

## Clone the Repository

```bash
git clone <repository-url>
cd auth-system
```

---

# Running the Project

## Linux/macOS

Start all services:

```bash
./start.sh
```

Stop all services:

```bash
./stop.sh
```

Reset the environment:

```bash
./reset.sh
```

---

## Windows

Start all services:

```cmd
start.bat
```

Stop all services:

```cmd
stop.bat
```

Reset the environment:

```cmd
reset.bat
```

---

## Manual Docker Commands

Build and start:

```bash
docker-compose up --build
```

Stop:

```bash
docker-compose down
```

---

# API Documentation

Swagger UI is available at:

```
http://localhost:5000/api-docs
```

---

# Default Service URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5500 |
| Backend | http://localhost:5000 |
| Swagger | http://localhost:5000/api-docs |
| PostgreSQL | localhost:5432 |
| Keycloak | http://localhost:8081 |
| phpLDAPadmin | http://localhost:8082 |
| Nginx | http://localhost:8080 |
| KrakenD | http://localhost:8090 |

---


# Author

**Haridharan B S**
