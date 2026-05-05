# 🔐 OAuth 2.0 Authentication System

A **Dockerized web-based authentication system** that supports user management, group-based authorization, and JWT-based authentication.
The system is designed with a simple frontend, Node.js backend, and PostgreSQL database.

---

## 🚀 Features

* 👤 User Management (Create users)
* 👥 Group-based Authorization
* 🔑 JWT Token Authentication
* 🗄 PostgreSQL Database
* 🐳 Fully Dockerized (Frontend + Backend + DB)
* ⚡ One-command startup using shell scripts
* 💻 Simple Frontend UI for testing

---

## 🏗️ Architecture

Frontend (HTML/JS - served via Python in Docker)
⬇
Backend (Node.js + Express)
⬇
PostgreSQL Database
⬇
Docker (Containerized environment)

---

## 📦 Tech Stack

* Node.js (Express)
* PostgreSQL
* Docker & Docker Compose
* HTML, CSS, JavaScript
* Python (for frontend server inside Docker)

---

## ⚙️ Setup & Run

### 🔹 Prerequisites

* Docker
* Docker Compose

---

### 🔹 Start the Application

```bash
./start.sh
```

This will:

* Start backend, database, and frontend containers
* Automatically open the frontend in browser

---

### 🔹 Stop the Application

```bash
./stop.sh
```

---

## 🌐 Access the App

Frontend:

```
http://localhost:5500
```

Backend API:

```
http://localhost:5000
```

---

## 🧪 API Flow

### 1️⃣ Create Group

```
POST /groups/create
```

### 2️⃣ Create User

```
POST /users/create
```

### 3️⃣ Login

```
POST /auth/login
```

### 4️⃣ Response

Returns a JWT token:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

## 🔐 Authentication Flow

1. User registers with group
2. Password is hashed using bcrypt
3. User logs in with credentials
4. Backend validates credentials
5. JWT token is generated and returned

---

## 📁 Project Structure

```
auth-system/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── app.js
│
├── frontend/
│   ├── index.html
│   └── Dockerfile
│
├── docker-compose.yml
├── start.sh
├── stop.sh
└── README.md
```

---

## 📌 Key Highlights

* Fully containerized system using Docker
* Clean Git repository with `.gitignore`
* Automated startup using shell scripts
* Demonstrates authentication & authorization concepts

---

## 🎯 Summary

This project demonstrates a **complete authentication system** with:

* User management
* Authorization using groups
* Secure login with JWT tokens
* Containerized deployment

---

## 👨‍💻 Author

**Haridharan B S**
