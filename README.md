# 🔐 OAuth 2.0 Authentication System

A **fully containerized authentication system** with user management, group-based authorization, and JWT-based authentication.
The application includes a frontend UI, backend API, and PostgreSQL database — all managed using Docker.

---

## 🚀 Features

* 👤 User Management (Create users)
* 👥 Group-based Authorization
* 🔑 JWT Token Authentication
* 🗄 PostgreSQL Database
* 🐳 Fully Dockerized (Frontend + Backend + DB)
* ⚡ One-command startup (Shell & Batch scripts)
* 💻 Simple Frontend UI

---

## 🏗️ Architecture

Frontend (HTML/JS via Python server in Docker)
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

## 🚀 Start the Application

### 🐧 Linux / Mac

```bash id="2t72rn"
./start.sh
```

---

### 🪟 Windows

```bat id="smv1o1"
start.bat
```

---

👉 This will:

* Start all containers (backend, database, frontend)
* Open the frontend automatically in browser

---

## 🛑 Stop the Application

### 🐧 Linux / Mac

```bash id="6w3g6j"
./stop.sh
```

---

### 🪟 Windows

```bat id="x9u0o2"
stop.bat
```

---

## 🌐 Access the App

Frontend:

```id="n4qs2z"
http://localhost:5500
```

Backend API:

```id="93vn2o"
http://localhost:5000
```

---

## 🧪 API Flow

### 1️⃣ Create Group

```id="a4f84p"
POST /groups/create
```

### 2️⃣ Create User

```id="3v8c8p"
POST /users/create
```

### 3️⃣ Login

```id="7j2qbj"
POST /auth/login
```

### 4️⃣ Response

```json id="9v1qqn"
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

## 🔐 Authentication Flow

1. User is assigned to a group
2. Password is hashed using bcrypt
3. User logs in with credentials
4. Backend validates credentials
5. JWT token is generated and returned

---

## 📁 Project Structure

```id="9g7m0s"
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
├── start.bat
├── stop.bat
└── README.md
```

---

## 📌 Key Highlights

* Fully containerized system using Docker
* Cross-platform support (Linux, Mac, Windows)
* Automated startup using scripts
* Clean Git repository using `.gitignore`
* Demonstrates authentication & authorization concepts

---

## 🎯 Summary

This project demonstrates a **complete authentication system** with:

* User management
* Group-based authorization
* Secure login using JWT
* Docker-based deployment
* Cross-platform automation

---

## 👨‍💻 Author

**Haridharan B S**
