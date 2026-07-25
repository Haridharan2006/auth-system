# System Architecture

# Enterprise Authentication System

This document describes the architecture of the Enterprise Authentication System and explains how the various components interact to provide secure authentication and authorization.

---

# Table of Contents

- Overview
- High-Level Architecture
- Component Architecture
- Authentication Architecture
- Docker Architecture
- Authentication Flows
- JWT Authorization
- Role-Based Access Control
- Data Flow
- Security Considerations
- Future Enhancements

---

# Overview

The Enterprise Authentication System is designed using a modular architecture that supports multiple authentication mechanisms while maintaining a common authorization model.

The application provides:

- Local Authentication
- OpenID Connect Authentication
- LDAP Authentication

Regardless of the authentication mechanism used, authenticated users receive a JWT which is used for authorization throughout the application.

---

# High-Level Architecture

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
+---------v---------+           +---------v---------+           +----------v----------+
|   PostgreSQL      |           |    Keycloak      |           |     OpenLDAP       |
|  Local Users      |           | OpenID Connect   |           | LDAP Directory     |
+-------------------+           +------------------+           +--------------------+
                                         |
                                  JWT Generation
                                         |
                                  Protected Resources
```

---

# Component Architecture

## Frontend

Responsibilities:

- User Interface
- Login Page
- Dashboard
- JWT Storage
- API Communication

Technologies:

- HTML
- CSS
- JavaScript

---

## Backend

Responsibilities:

- User Authentication
- JWT Generation
- User Management
- LDAP Integration
- OpenID Connect
- Role Management

Technologies:

- Node.js
- Express.js

---

## PostgreSQL

Stores:

- Local Users
- Password Hashes
- User Groups

---

## Keycloak

Provides:

- OpenID Connect Authentication
- Identity Management
- OAuth2 Authorization

---

## OpenLDAP

Provides:

- LDAP Authentication
- User Directory
- Group Directory
- Centralized Identity Management

---

# Docker Architecture

The application is deployed using Docker Compose.

```text
                    Docker Compose

        +-------------------------------+
        |        frontend_server        |
        +---------------+---------------+
                        |
                        |
                        v
        +-------------------------------+
        |        node_backend           |
        +---------------+---------------+
                        |
     +------------------+--------------------+
     |                  |                    |
     v                  v                    v

postgres_db       keycloak         openldap_server
                                         |
                                         v
                                  phpldapadmin

                        |
                        v

                  nginx_server

                        |
                        v

                krakend_gateway
```

---

# Authentication Architecture

The system supports three authentication mechanisms.

```text
                 Authentication System

                  User Login
                      |
      +---------------+----------------+
      |               |                |
      |               |                |
      v               v                v

 Local Login     LDAP Login     OpenID Connect
      |               |                |
      +---------------+----------------+
                      |
                      v
              JWT Authentication
                      |
                      v
              Protected Resources
```

---

# Local Authentication Flow

```text
User

↓

Frontend

↓

POST /auth/login

↓

PostgreSQL

↓

Password Verification

↓

JWT Generation

↓

Dashboard
```

---

# LDAP Authentication Flow

```text
User

↓

Frontend

↓

POST /ldap/login

↓

OpenLDAP Bind

↓

Retrieve User

↓

Retrieve Groups

↓

Map Groups

↓

JWT Generation

↓

Dashboard
```

---

# OpenID Connect Flow

```text
User

↓

Frontend

↓

Keycloak Login

↓

Authorization Code

↓

Backend Callback

↓

JWT Generation

↓

Dashboard
```

---

# JWT Authorization

Every successful authentication generates a JWT containing:

```json
{
    "id": "...",
    "username": "...",
    "email": "...",
    "group_id": 1,
    "login_type": "local | ldap | openid"
}
```

The JWT is stored by the frontend and sent with subsequent API requests to access protected resources.

---

# Role-Based Access Control

The application maps authenticated users to roles.

| Group ID | Role |
|----------|------|
| 1 | Administrator |
| 2 | Developer |
| 3 | User |

For LDAP-authenticated users, LDAP groups are mapped to these application roles before the JWT is generated.

---

# Data Flow

```text
User

↓

Frontend

↓

Authentication API

↓

Authentication Provider

↓

JWT

↓

Protected API

↓

Frontend Dashboard
```

---

# Security Considerations

The application incorporates several security practices:

- Password hashing using bcrypt
- JWT-based authorization
- OpenID Connect authentication
- LDAP authentication
- Secure role mapping
- Docker container isolation
- Reverse proxy using Nginx
- API Gateway using KrakenD

---

# Future Enhancements

The architecture is designed to be extensible.

Potential future improvements include:

- Microsoft Active Directory integration
- Multi-Factor Authentication (MFA)
- Refresh Tokens
- OAuth providers (Google, Microsoft, GitHub)
- Fine-grained Role-Based Access Control
- Audit Logging
- High Availability Deployment

---

# Conclusion

The Enterprise Authentication System follows a modular and extensible architecture that integrates multiple authentication mechanisms into a unified JWT-based authorization framework. By combining PostgreSQL, Keycloak, OpenLDAP, Docker, Nginx, and KrakenD, the system demonstrates enterprise authentication concepts while remaining flexible for future enhancements.
