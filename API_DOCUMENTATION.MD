# API Documentation

# Enterprise Authentication System

This document describes all REST API endpoints provided by the Enterprise Authentication System.

---

# Base URL

```
http://localhost:5000
```

---

# API Overview

The backend provides APIs for:

- User Management
- Local Authentication
- OpenID Connect Authentication
- LDAP Authentication
- JWT Authorization

---

# Authentication Flow

The application supports three authentication methods.

```
                User
                  │
      ┌───────────┼───────────┐
      │           │           │
      ▼           ▼           ▼
  Local Login   LDAP Login   OpenID Login
      │           │           │
      └───────────┼───────────┘
                  │
                  ▼
          JWT Authentication
                  │
                  ▼
         Protected Resources
```

---

# User Management APIs

## Create User

Creates a new local user in PostgreSQL.

### Endpoint

```
POST /users/create
```

### Request Body

```json
{
    "email":"admin@gmail.com",
    "password":"password123",
    "group_id":1
}
```

### Successful Response

```json
{
    "message":"User created successfully"
}
```

### Error Response

```json
{
    "error":"User already exists"
}
```

---

# Local Authentication

Authenticates users stored in PostgreSQL.

---

## Login

### Endpoint

```
POST /auth/login
```

### Request Body

```json
{
    "email":"admin@gmail.com",
    "password":"password123"
}
```

### Successful Response

```json
{
    "token":"JWT_TOKEN"
}
```

### JWT Payload

```json
{
    "id":1,
    "username":"admin",
    "email":"admin@gmail.com",
    "group_id":1,
    "login_type":"local"
}
```

### Error Response

```json
{
    "message":"Invalid username and/or password"
}
```

---

# LDAP Authentication

Authenticates users stored in OpenLDAP.

---

## Login

### Endpoint

```
POST /ldap/login
```

### Request Body

```json
{
    "username":"hari",
    "password":"1234"
}
```

### Successful Response

```json
{
    "token":"JWT_TOKEN"
}
```

### JWT Payload

```json
{
    "id":"hari",
    "username":"hari",
    "email":"hari@gmail.com",
    "group_id":1,
    "login_type":"ldap"
}
```

### Error Response

```json
{
    "message":"Invalid username and/or password"
}
```

---

# OpenID Connect

Authentication is handled through Keycloak.

---

## Get Available Providers

### Endpoint

```
GET /openid/providers
```

### Successful Response

```json
[
    {
        "name":"keycloak"
    }
]
```

---

## Login Using Provider

### Endpoint

```
GET /openid/login/:provider
```

Example

```
GET /openid/login/keycloak
```

The backend redirects the user to the selected identity provider.

---

## Callback

### Endpoint

```
GET /openid/callback/:provider
```

After successful authentication:

- User information is retrieved.
- JWT is generated.
- User is redirected to the dashboard.

---

# JWT Authentication

After successful authentication, every user receives a JWT.

Example Authorization header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# User Roles

| Group ID | Role |
|-----------|------|
| 1 | Administrator |
| 2 | Developer |
| 3 | User |

---

# LDAP Group Mapping

| LDAP Group | Application Role |
|------------|------------------|
| admin | Administrator |
| developer | Developer |
| user | User |

---

# HTTP Status Codes

| Status | Description |
|----------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# Swagger Documentation

Interactive API documentation is available at:

```
http://localhost:5000/api-docs
```

---

# API Testing

The APIs can be tested using:

- Swagger UI
- Postman
- cURL

Example:

```bash
curl -X POST http://localhost:5000/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email":"admin@gmail.com",
    "password":"password123"
}'
```

---

# Security Features

- Password hashing using bcrypt
- JWT-based authentication
- OpenID Connect support
- LDAP authentication
- Role-Based Access Control
- Dockerized deployment

---

# Summary

The Enterprise Authentication System exposes REST APIs that support multiple authentication mechanisms while maintaining a unified JWT-based authorization model. Local Authentication, OpenID Connect, and LDAP Authentication all generate JWTs with a consistent payload structure, enabling secure access to protected resources.
