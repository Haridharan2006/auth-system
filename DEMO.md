# Demonstration Guide

# Enterprise Authentication System

This document provides a step-by-step guide for demonstrating the Enterprise Authentication System. The application supports three authentication methods:

- Local Authentication
- LDAP Authentication
- OpenID Connect (Keycloak)

The guide also includes verification steps for Docker services, API documentation, and role-based access control.

---

# Demonstration Objectives

During the demonstration, the following features will be presented:

- Dockerized deployment
- Local Authentication
- LDAP Authentication
- OpenID Connect Authentication
- JWT-based Authorization
- Role-Based Access Control
- Swagger API Documentation

---

# Step 1 – Start the Application

## Linux/macOS

```bash
./start.sh
```

## Windows

```cmd
start.bat
```

Alternatively, start manually using Docker Compose.

```bash
docker-compose up --build
```

---

# Step 2 – Verify Docker Containers

Run:

```bash
docker ps
```

The following containers should be running.

| Container | Status |
|------------|--------|
| frontend_server | Running |
| node_backend | Running |
| postgres_db | Running |
| keycloak | Running |
| openldap_server | Running |
| phpldapadmin | Running |
| nginx_server | Running |
| krakend_gateway | Running |

---

# Step 3 – Open the Application

Navigate to:

```
http://localhost:5500
```

The login page should display:

- Create User section
- Authentication Method selection
- Local Authentication
- LDAP Authentication
- OpenID Connect providers

---

# Step 4 – Demonstrate Local Authentication

## Create a Local User

Create a new user using the **Create User** section.

Example:

Email

```
admin@gmail.com
```

Password

```
password123
```

Group ID

```
1
```

Click **Create User**.

Expected Result:

- User created successfully.

---

## Login

Select:

```
Local Authentication
```

Login using:

```
Email:
admin@gmail.com

Password:
password123
```

Expected Result:

- Login successful
- Dashboard opens
- JWT generated
- Login Type displays **Local**
- User role displayed correctly

---

# Step 5 – Demonstrate LDAP Authentication

Select:

```
LDAP Authentication
```

The login field changes from **Email** to **Username**.

Login using an LDAP account.

Example:

```
Username:
hari

Password:
1234
```

Expected Result:

- LDAP authentication successful
- User retrieved from OpenLDAP
- LDAP groups retrieved
- Groups mapped to application roles
- JWT generated
- Dashboard displayed
- Login Type displays **LDAP**

---

# Step 6 – Demonstrate OpenID Connect

Return to the login page.

Select:

```
Login with Keycloak
```

The application redirects to the Keycloak login page.

Login using a configured Keycloak user.

Expected Result:

- Authentication successful
- Redirect back to the application
- JWT generated
- Dashboard displayed
- Login Type displays **Keycloak**

---

# Step 7 – Dashboard Demonstration

After authentication, demonstrate the dashboard.

Verify that the dashboard displays:

- Username
- Email
- Role
- Login Type
- JWT Token

Demonstrate:

- Copy JWT Token
- Logout functionality

---

# Step 8 – Swagger Documentation

Open:

```
http://localhost:5000/api-docs
```

Demonstrate:

- Local Authentication API
- LDAP Authentication API
- User Creation API
- OpenID APIs

Execute one API request directly from Swagger.

---

# Step 9 – phpLDAPadmin

Open:

```
http://localhost:8082
```

Login using:

Administrator DN

```
cn=admin,dc=authsystem,dc=local
```

Password

```
admin
```

Demonstrate:

- LDAP directory
- Users
- Groups

Explain that LDAP users are managed separately from local database users.

---

# Step 10 – Docker Deployment

Explain the containerized architecture.

Containers used:

- frontend_server
- node_backend
- postgres_db
- keycloak
- openldap_server
- phpldapadmin
- nginx_server
- krakend_gateway

Explain the purpose of each service.

---

# Step 11 – Authentication Summary

The application supports three authentication mechanisms.

| Authentication Method | Backend | JWT Generated |
|-----------------------|---------|---------------|
| Local Authentication | PostgreSQL | Yes |
| LDAP Authentication | OpenLDAP | Yes |
| OpenID Connect | Keycloak | Yes |

All authentication methods generate a JWT with a common structure, enabling consistent authorization across the application.

---

# Expected Demonstration Outcome

At the end of the demonstration, the evaluator should observe:

- Successful Docker deployment
- Successful Local Authentication
- Successful LDAP Authentication
- Successful OpenID Connect Authentication
- JWT generation
- Role-Based Access Control
- Swagger API documentation
- Unified authentication workflow

---

# Demonstration Complete

The Enterprise Authentication System successfully demonstrates a secure, enterprise-style authentication platform integrating Local Authentication, OpenID Connect, and LDAP Authentication into a unified JWT-based authorization framework.
