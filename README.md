# 🔐 OAuth 2.0 & OpenID Connect Authentication System

A **fully containerized authentication and authorization system** with user management, group-based authorization, JWT-based authentication, and OpenID Connect (OIDC) integration using Keycloak.

The system includes a frontend UI, backend API, PostgreSQL database, API Gateway, reverse proxy, and Identity Provider — all managed using Docker with **automatic database schema initialization using Knex migrations**.

---

## 🚀 Features

### Authentication & Authorization

* 👤 User Management (Create users)
* 👥 Group-based Authorization
* 🔑 JWT Token Authentication
* 🌐 OpenID Connect (OIDC) Integration using Keycloak
* 🔒 Password Hashing using bcrypt
* 🛡 Generic Authentication Error Messages

### API & Documentation

* 📄 Swagger API Documentation
* 🧪 Unit Testing using Jest

### Infrastructure

* 🗄 PostgreSQL Database
* 🐳 Fully Dockerized
* ⚡ One-command startup (Shell & Batch scripts)
* 🔄 Automatic DB schema setup using Knex migrations
* 🌍 Nginx Reverse Proxy
* 🚪 KrakenD API Gateway

### Frontend

* 💻 Simple Frontend UI
* 🔐 Login using JWT Authentication
* 🌐 Login using OpenID Connect (Keycloak)

---

## 🏗️ Architecture

Frontend (HTML / CSS / JavaScript)
⬇

Nginx Reverse Proxy
⬇

KrakenD API Gateway
⬇

Backend (Node.js + Express + Knex)
⬇

PostgreSQL Database

Identity Provider:
Keycloak (OpenID Connect)

---

## 📦 Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* Knex.js
* JWT
* bcrypt

### Frontend

* HTML
* CSS
* JavaScript

### Identity & Security

* OAuth 2.0 Concepts
* OpenID Connect (OIDC)
* Keycloak

### Infrastructure

* Docker
* Docker Compose
* Nginx
* KrakenD

### Testing & Documentation

* Jest
* Swagger

---

## ⚙️ Setup & Run

### Prerequisites

* Docker
* Docker Compose

---

## 🚀 Start the Application

### Linux / Mac

```bash
./start.sh
```

### Windows

```bat
start.bat
```

This will:

* Start PostgreSQL
* Start Backend API
* Start Frontend
* Start Nginx
* Start KrakenD
* Start Keycloak
* Run Knex migrations automatically

---

## 🛑 Stop the Application

### Linux / Mac

```bash
./stop.sh
```

### Windows

```bat
stop.bat
```

---

## 🌐 Access the Services

### Frontend

http://localhost:5500

### Backend API

http://localhost:5000

### Swagger Documentation

http://localhost:5000/api-docs

### Keycloak

http://localhost:8081

### Nginx

http://localhost:8080

### KrakenD

http://localhost:8090

---

## 🔐 Authentication Methods

### 1. JWT Authentication

1. User enters email and password
2. Backend validates credentials
3. Password verified using bcrypt
4. JWT token generated
5. Token returned to client

### 2. OpenID Connect Authentication

1. User clicks **Login with Keycloak**
2. User is redirected to Keycloak
3. Keycloak authenticates the user
4. Authorization Code is returned
5. User identity is verified through OpenID Connect

---

## 🧪 API Flow

### Create Group

```http
POST /groups/create
```

### Create User

```http
POST /users/create
```

### Login

```http
POST /auth/login
```

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

## 🗄 Database Schema

### users

* id
* email
* password
* group_id

### groups

* id
* name

Database schema is automatically created using Knex migrations.

---

## 📁 Project Structure

```text
auth-system/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── migrations/
│   ├── tests/
│   ├── swagger.js
│   ├── knexfile.js
│   └── app.js
│
├── frontend/
│   ├── index.html
│   └── Dockerfile
│
├── nginx/
├── krakend/
│
├── docker-compose.yml
├── start.sh
├── stop.sh
├── start.bat
├── stop.bat
└── README.md
```

---

## 📌 Key Highlights

* OAuth 2.0 style JWT Authentication
* OpenID Connect Integration using Keycloak
* Secure Password Storage using bcrypt
* Generic Authentication Error Handling
* Swagger API Documentation
* Automated Unit Testing using Jest
* Dockerized Microservice Architecture
* Automatic Database Migrations
* API Gateway using KrakenD
* Reverse Proxy using Nginx

---

## 🎯 Summary

This project demonstrates:

* User Management
* Group-based Authorization
* JWT Authentication
* OpenID Connect Authentication
* API Documentation
* Automated Testing
* Docker-based Deployment
* Database Migrations
* API Gateway Integration
* Reverse Proxy Configuration

---

## 👨‍💻 Author

**Haridharan B S**
