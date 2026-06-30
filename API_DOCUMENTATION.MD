# 📡 API Documentation

This document describes all the REST APIs available in the Authentication System.

---

# Base URL

```
http://localhost:5000
```

---

# Authentication APIs

## 1. Local Login

### Endpoint

```
POST /auth/login
```

### Description

Authenticates a user using email and password and returns a JWT.

### Request Body

```json
{
    "email":"hari@gmail.com",
    "password":"1234"
}
```

### Success Response

```json
{
    "token":"eyJhbGc..."
}
```

### Error Response

```json
{
    "error":"Invalid username and/or password."
}
```

---

# User APIs

## 2. Create User

### Endpoint

```
POST /users/create
```

### Description

Creates a new user in the PostgreSQL database.

### Request Body

```json
{
    "email":"hari@gmail.com",
    "password":"1234",
    "group_id":1
}
```

### Success Response

```json
{
    "message":"User created successfully."
}
```

### Possible Errors

```json
{
    "error":"User already exists."
}
```

---

# OpenID APIs

## 3. Get OpenID Providers

### Endpoint

```
GET /openid/providers
```

### Description

Returns all enabled OpenID Providers.

### Success Response

```json
[
    {
        "id":1,
        "name":"Keycloak"
    }
]
```

---

## 4. Login with OpenID Provider

### Endpoint

```
GET /openid/login/:provider
```

### Example

```
GET /openid/login/Keycloak
```

### Description

Redirects the user to the selected OpenID Provider.

### Response

Redirect

```
302 Redirect
```

---

## 5. OpenID Callback

### Endpoint

```
GET /openid/callback
```

### Description

Handles the Authorization Code returned by Keycloak.

Operations performed:

- Exchanges Authorization Code
- Receives ID Token
- Reads User Information
- Maps Keycloak Group
- Generates Application JWT
- Redirects to Dashboard

---

# OpenID Group Mapping APIs

## 6. Create Mapping

### Endpoint

```
POST /openid-group-mappings/create
```

### Description

Creates a mapping between an external Keycloak group and an internal application group.

### Request

```json
{
    "provider_name":"Keycloak",
    "external_group":"Admin",
    "local_group_id":1
}
```

### Success Response

```json
{
    "message":"Mapping created successfully."
}
```

---

# Authentication Flow

## Local Login

```
Email + Password

↓

POST /auth/login

↓

JWT

↓

Dashboard
```

---

## OpenID Login

```
GET /openid/login/Keycloak

↓

Keycloak Login

↓

Authorization Code

↓

GET /openid/callback

↓

Application JWT

↓

Dashboard
```

---

# JWT

Example Payload

```json
{
    "username":"hari",
    "email":"hari@gmail.com",
    "group_id":1,
    "login_type":"openid",
    "provider":"Keycloak",
    "iat":1750000000,
    "exp":1750003600
}
```

---

# HTTP Status Codes

| Status Code | Meaning |
|-------------|----------|
| 200 | Success |
| 201 | Resource Created |
| 302 | Redirect |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# Swagger Documentation

Swagger UI is available at

```
http://localhost:5000/api-docs
```

Swagger provides an interactive interface to test all available APIs.

---

# API Summary

| Method | Endpoint | Purpose |
|---------|----------|---------|
| POST | /users/create | Create User |
| POST | /auth/login | Local Login |
| GET | /openid/providers | Get OpenID Providers |
| GET | /openid/login/:provider | Login with Keycloak |
| GET | /openid/callback | OpenID Callback |
| POST | /openid-group-mappings/create | Create Group Mapping |

---

# Future Improvements

- Refresh Tokens
- Google OAuth 2.0
- Microsoft Azure AD
- User Profile APIs
- Admin APIs
- MFA Support
- Rate Limiting
- API Versioning