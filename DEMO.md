# 🎤 Authentication System Demo Guide

This document provides a structured walkthrough for demonstrating the Authentication System.

---

# Project Overview

Good morning/afternoon everyone.

Today I am presenting my **Authentication System** developed using:

- Node.js
- Express.js
- PostgreSQL
- JWT
- Keycloak
- OpenID Connect
- Docker
- KrakenD API Gateway
- Nginx Reverse Proxy

The application supports both **Local Authentication** and **OpenID Connect Authentication** with Role-Based Access Control (RBAC).

---

# Demonstration Flow

Follow the steps below during the presentation.

---

# Step 1 - Project Architecture

Open the **System Architecture** page.

Explain the architecture:

```
Browser

↓

Frontend

↓

Nginx

↓

KrakenD

↓

Node Backend

↙            ↘

PostgreSQL   Keycloak
```

Mention:

- Frontend handles user interaction.
- Nginx acts as a reverse proxy.
- KrakenD acts as the API Gateway.
- Node.js implements business logic.
- PostgreSQL stores user data.
- Keycloak provides OpenID Connect authentication.

---

# Step 2 - Local User Creation

Navigate to the Login Page.

Create a new user.

Example:

```
Email

hari@gmail.com

Password

1234

Group ID

1
```

Click **Create User**.

Explain:

- Password is hashed using bcrypt.
- User is stored in PostgreSQL.
- Group ID determines authorization level.

---

# Step 3 - Local Login

Login using:

```
hari@gmail.com

1234
```

Explain:

- Backend validates credentials.
- JWT is generated.
- JWT is stored in Local Storage.
- Dashboard is opened.

---

# Step 4 - JWT Token

Navigate to the Dashboard.

Show:

- Username
- Email
- Role
- Login Type
- JWT Token

Explain:

The application generates its own JWT after successful authentication.

The JWT is used for session management and authorization.

---

# Step 5 - Logout

Click **Logout**.

Explain:

- JWT removed from browser.
- User redirected to Login Page.

---

# Step 6 - Keycloak Login

Click

```
Login with Keycloak
```

Login using:

```
Username

hari

Password

1234
```

Explain:

- User redirected to Keycloak.
- OpenID Connect Authorization Code Flow begins.
- Keycloak authenticates user.
- Backend exchanges Authorization Code for ID Token.
- Backend generates Application JWT.
- Dashboard opens.

---

# Step 7 - Group Mapping

Explain:

External Groups

```
Admin

Developer

User
```

↓

Mapped to

```
groups
```

↓

Application Role

This allows external identity providers to integrate with the application.

---

# Step 8 - Swagger

Open:

```
http://localhost:5000/api-docs
```

Explain:

Swagger documents all REST APIs.

Show:

- Local Login API
- User Creation API
- OpenID APIs
- Group Mapping APIs

---

# Step 9 - Docker

Run:

```bash
docker ps
```

Explain:

Containers:

- PostgreSQL
- Backend
- Frontend
- Keycloak
- KrakenD
- Nginx

---

# Step 10 - PostgreSQL

Show PostgreSQL tables.

Explain:

Main tables:

- users
- groups
- openid_providers
- openid_group_mappings

---

# Features Demonstrated

✔ Local Authentication

✔ JWT Authentication

✔ OpenID Connect

✔ Keycloak Integration

✔ Role-Based Access Control

✔ Docker Deployment

✔ PostgreSQL Integration

✔ KrakenD API Gateway

✔ Nginx Reverse Proxy

✔ Swagger Documentation

---

# Questions You May Be Asked

## Why JWT?

JWT enables stateless authentication.

The server does not need to store user sessions.

---

## Why bcrypt?

Passwords are never stored in plain text.

bcrypt securely hashes passwords.

---

## Why PostgreSQL?

Provides reliable relational storage and supports foreign keys for data integrity.

---

## Why Keycloak?

Keycloak implements OpenID Connect and centralizes identity management.

---

## Why OpenID Connect?

Allows users to authenticate through a trusted Identity Provider.

---

## Why Docker?

Docker ensures the application runs consistently across different environments.

---

## Why KrakenD?

KrakenD serves as an API Gateway and provides a single entry point for backend APIs.

---

## Why Nginx?

Nginx acts as a reverse proxy and can improve scalability and request routing.

---

# Project Outcome

Successfully implemented:

- Secure Authentication
- Role-Based Authorization
- JWT Session Management
- OpenID Connect Authentication
- Dockerized Deployment
- API Documentation
- Modern Responsive UI

---

# Future Enhancements

- Google OAuth 2.0
- Microsoft Azure AD
- Refresh Tokens
- Multi-Factor Authentication
- Email Verification
- Password Reset
- Admin Dashboard
- Audit Logs

---

# Thank You

Thank you for your time.

I would be happy to answer any questions regarding the implementation or architecture.
