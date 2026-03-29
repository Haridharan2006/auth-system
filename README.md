# 🔐 OAuth 2.0 Authentication System

A web-based authentication system that supports user management, group-based authorization, and JWT token-based authentication. The system is containerized using Docker and uses an API Gateway (KrakenD) with Nginx as a reverse proxy.

---

## 🚀 Features

- 👤 User Management (Create users)
- 👥 Group-based Authorization
- 🔑 JWT Token Authentication
- 🌐 API Gateway using KrakenD
- 🔁 Reverse Proxy using Nginx
- 🗄 PostgreSQL Database
- 🐳 Docker-based Deployment
- 💻 Simple Frontend UI

---

## 🚀 Deployment Guide

This project is containerized using Docker and can be deployed locally using Docker Compose.

---

### 🔹 Prerequisites

- Docker
- Docker Compose

---

### 🔹 Step 1: Clone the Repository

```bash
git clone https://github.com/Haridharan2006/auth-system.git
cd auth-system
```

---

### 🔹 Step 2: Start the Application

```bash
docker-compose up --build
```

This will start:

- PostgreSQL Database (Port: 5432)
- Backend Server (Port: 5000)
- Nginx Reverse Proxy (Port: 8080)
- KrakenD API Gateway (Port: 8090)

---

### 🔹 Step 3: Run Frontend

```bash
cd frontend
python3 -m http.server 5500
```

Open in browser:

```
http://localhost:5500
```

---

### 🔹 Step 4: Access Services

- Backend → http://localhost:5000  
- API Gateway → http://localhost:8090  

---

### 🔹 Step 5: Test the Application

- Create a group → `POST /groups/create`  
- Create a user → `POST /users/create`  
- Login → `POST /auth/login`  
- Receive JWT token  

---

### 🔹 Step 6: Stop the Application

```bash
docker-compose down
```

---

## 🔐 Authentication Flow

1. User logs in  
2. Backend verifies credentials  
3. JWT token is generated  
4. Token is returned to frontend  

---

## 🗄 Database

Tables used:

- `users`
- `groups`

---

## 🧑‍💻 Tech Stack

- Node.js (Express)
- PostgreSQL
- Docker & Docker Compose
- KrakenD API Gateway
- Nginx
- HTML, CSS, JavaScript

---

## 📌 Notes

- Passwords are hashed using bcrypt  
- JWT is used for authentication  
- Do not expose database publicly  

---

## 🎯 Summary

This project demonstrates a complete authentication system with user management, authorization, and token-based security, inspired by OAuth 2.0 principles.

---

## 👨‍💻 Author

**Haridharan B S**
