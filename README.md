# 🔐 Authentication System using JWT, OpenID Connect & Keycloak

A secure authentication and authorization system developed using **Node.js**, **Express.js**, **PostgreSQL**, **JWT**, **Keycloak**, **Docker**, **KrakenD API Gateway**, and **Nginx Reverse Proxy**.

This project demonstrates both **Local Authentication** and **OpenID Connect Authentication** using Keycloak while implementing **Role-Based Access Control (RBAC)** through group mapping.

---

# 📌 Features

## Local Authentication

- User Registration
- Secure Password Hashing using bcrypt
- JWT Token Generation
- JWT Authentication
- Session Expiry Handling
- Logout

---

## OpenID Connect Authentication

- Login using Keycloak
- Authorization Code Flow
- Dynamic OpenID Provider Loading
- Token Exchange
- ID Token Verification
- Application JWT Generation
- OpenID Group Mapping

---

## Authorization

- Role Based Access Control
- Group Mapping
- Administrator
- Developer
- User

---

## Security

- Password Hashing (bcrypt)
- JWT Authentication
- Protected Dashboard
- Token Expiration Validation
- Session Management

---

## Infrastructure

- Docker
- Docker Compose
- PostgreSQL
- Nginx Reverse Proxy
- KrakenD API Gateway
- Swagger API Documentation

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| Node.js | Backend Runtime |
| Express.js | REST API |
| PostgreSQL | Database |
| Knex.js | Database Migration |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Keycloak | Identity Provider |
| OpenID Connect | Authentication Protocol |
| Docker | Containerization |
| Docker Compose | Multi-container Deployment |
| KrakenD | API Gateway |
| Nginx | Reverse Proxy |
| Swagger | API Documentation |
| HTML | Frontend |
| CSS | Frontend Styling |
| JavaScript | Frontend Logic |

---

# 📂 Project Structure

```
auth-system
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── migrations
│   ├── models
│   ├── routes
│   ├── seeds
│   ├── services
│   ├── Dockerfile
│   └── server.js
│
├── frontend
│   ├── index.html
│   ├── dashboard.html
│   ├── dashboard.js
│   ├── style.css
│   └── Dockerfile
│
├── krakend
│
├── nginx
│
├── docker-compose.yml
│
└── README.md
```

---

# 🏗 System Architecture

```
                   Browser
                       │
                       ▼
            Frontend (HTML/CSS/JS)
                       │
                       ▼
              Nginx Reverse Proxy
                       │
                       ▼
             KrakenD API Gateway
                       │
                       ▼
              Node.js Backend
              ↙             ↘
      PostgreSQL        Keycloak
```

---

# 🔄 Authentication Flow

## Local Login

```
User

↓

Enter Email & Password

↓

Node.js Backend

↓

Validate Credentials

↓

Generate JWT

↓

Store JWT in Browser

↓

Dashboard
```

---

## Keycloak Login

```
User

↓

Click Login with Keycloak

↓

Redirect to Keycloak

↓

Authenticate

↓

Authorization Code

↓

Node.js Backend

↓

Exchange Authorization Code

↓

Receive ID Token

↓

Map Keycloak Group

↓

Generate Application JWT

↓

Dashboard
```

---

# 🗄 Database

The project uses PostgreSQL.

Main Tables:

- users
- groups
- openid_providers
- openid_group_mappings

---

# 🔑 JWT Payload

Example Application JWT Payload

```json
{
  "username": "hari",
  "email": "hari@gmail.com",
  "group_id": 1,
  "login_type": "openid",
  "provider": "Keycloak",
  "iat": 1750000000,
  "exp": 1750003600
}
```

---

# 🚀 Running the Project

## Clone Repository

```bash
git clone https://github.com/<your-username>/auth-system.git

cd auth-system
```

---

## Start using Docker

```bash
docker compose up --build
```

---

## Open Application

Frontend

```
http://localhost:5500
```

Backend

```
http://localhost:5000
```

Swagger

```
http://localhost:5000/api-docs
```

Keycloak

```
http://localhost:8081
```

KrakenD

```
http://localhost:8090
```

---

# 📡 API Endpoints

## User

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /users/create | Create User |

---

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /auth/login | Local Login |

---

## OpenID

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /openid/providers | Get Providers |
| GET | /openid/login/:provider | Login using Provider |
| GET | /openid/callback | OpenID Callback |

---

## Group Mapping

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /openid-group-mappings/create | Create Group Mapping |

---

# 🖥 Screenshots

## Login Page

_Add screenshot here_

---

## Dashboard

_Add screenshot here_

---

## JWT Token

_Add screenshot here_

---

## Keycloak Login

_Add screenshot here_

---

## Swagger

_Add screenshot here_

---

## Docker Containers

_Add screenshot here_

---

## Architecture

_Add screenshot here_

---

# 🧪 Testing

Successfully Tested

- Local Login
- Keycloak Login
- JWT Authentication
- Group Mapping
- Dashboard
- Logout
- Session Expiration
- Docker Deployment
- PostgreSQL Connectivity

---


# 👨‍💻 Author

**Haridharan B S**

