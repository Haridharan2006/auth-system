# 🏗 Authentication System Architecture

## Overview

The Authentication System is a secure web application that supports both **Local Authentication** and **OpenID Connect Authentication** using **Keycloak**. The application is containerized using Docker and uses PostgreSQL for persistent storage.

---

# High-Level Architecture

```
                     +----------------------+
                     |      Web Browser     |
                     +----------+-----------+
                                |
                                |
                                ▼
                  +---------------------------+
                  | Frontend (HTML/CSS/JS)    |
                  +------------+--------------+
                               |
                               ▼
                  +---------------------------+
                  | Nginx Reverse Proxy       |
                  +------------+--------------+
                               |
                               ▼
                  +---------------------------+
                  | KrakenD API Gateway       |
                  +------------+--------------+
                               |
                               ▼
                  +---------------------------+
                  | Node.js / Express Backend |
                  +------------+--------------+
                     |                     |
                     |                     |
                     ▼                     ▼
          +----------------+     +------------------+
          | PostgreSQL DB  |     |    Keycloak      |
          +----------------+     +------------------+
```

---

# Components

## Frontend

The frontend is developed using:

- HTML5
- CSS3
- JavaScript

Responsibilities:

- User Registration
- Local Login
- OpenID Login
- Dashboard
- JWT Storage
- Session Management

---

## Nginx Reverse Proxy

Nginx serves as the reverse proxy.

Responsibilities:

- Forward requests
- Load balancing (future)
- Secure routing

---

## KrakenD API Gateway

KrakenD acts as the API Gateway.

Responsibilities:

- Route APIs
- Gateway Layer
- Future API aggregation

---

## Node.js Backend

Built using:

- Express.js
- JWT
- bcrypt
- Knex.js

Responsibilities:

- User Authentication
- JWT Generation
- OpenID Integration
- Group Mapping
- Database Operations

---

## PostgreSQL

Stores application data.

Main Tables

- users
- groups
- openid_providers
- openid_group_mappings

---

## Keycloak

Identity Provider implementing OpenID Connect.

Responsibilities

- User Authentication
- Authorization Code Flow
- ID Token Generation
- User Groups

---

# Local Authentication Flow

```
User

↓

Enter Credentials

↓

Frontend

↓

Backend

↓

Verify Password

↓

Generate JWT

↓

Dashboard
```

---

# OpenID Connect Flow

```
User

↓

Login with Keycloak

↓

Keycloak Login

↓

Authorization Code

↓

Backend

↓

Token Exchange

↓

Receive ID Token

↓

Map User Group

↓

Generate Application JWT

↓

Dashboard
```

---

# JWT Authentication

After successful authentication:

- Backend generates JWT
- JWT stored in Browser Local Storage
- Dashboard validates JWT
- Session expiration checked

---

# Security Features

- Password Hashing (bcrypt)
- JWT Authentication
- OpenID Connect
- Role Based Access Control
- Session Expiration
- Protected Dashboard

---

# Role Mapping

External Keycloak Groups

```
Admin
Developer
User
```

↓

Mapped to

```
groups table
```

↓

Application Permissions

---

# Docker Deployment

Containers

```
Frontend

Backend

PostgreSQL

Keycloak

Nginx

KrakenD
```

---

# Folder Structure

```
backend/

frontend/

krakend/

nginx/

docker-compose.yml
```

---

# Technologies

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- PostgreSQL
- Knex.js
- JWT
- bcrypt
- Keycloak
- Docker
- KrakenD
- Nginx
- Swagger

---

# Advantages

- Secure Authentication
- OpenID Connect Integration
- Containerized Deployment
- Role-Based Access Control
- Modular Architecture
- Scalable Design
