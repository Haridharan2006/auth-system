# 🔐 OAuth 2.0 Authentication System

A **fully containerized authentication system** with user management, group-based authorization, and JWT-based authentication.
The system includes a frontend UI, backend API, and PostgreSQL database — all managed using Docker with **automatic database schema initialization using Knex migrations**.

---

## 🚀 Features

* 👤 User Management (Create users)
* 👥 Group-based Authorization
* 🔑 JWT Token Authentication
* 🗄 PostgreSQL Database
* 🐳 Fully Dockerized (Frontend + Backend + DB)
* ⚡ One-command startup (Shell & Batch scripts)
* 🔄 Automatic DB schema setup using Knex migrations
* 💻 Simple Frontend UI

---

## 🏗️ Architecture

Frontend (HTML/JS via Python server in Docker)
⬇
Backend (Node.js + Express + Knex)
⬇
PostgreSQL Database
⬇
Docker (Containerized environment)

---

## 📦 Tech Stack

* Node.js (Express)
* PostgreSQL
* Knex.js (Query Builder & Migrations)
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

```bash
./start.sh
```

---

### 🪟 Windows

```bat
start.bat
```

---

👉 This will:

* Start all containers (backend, database, frontend)
* Automatically run database migrations
* Open the frontend in browser

---

## 🛑 Stop the Application

### 🐧 Linux / Mac

```bash
./stop.sh
```

---

### 🪟 Windows

```bat
stop.bat
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

```json
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

## 🗄 Database Schema

### users

* id
* email
* password
* group_id (foreign key)

### groups

* id
* name

👉 Tables are automatically created using **Knex migrations**.

---

## 📁 Project Structure

```
auth-system/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── migrations/
│   ├── knexfile.js
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
* Automatic database schema setup using migrations
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
* Automatic database initialization
* Docker-based deployment
* Cross-platform automation

---

## 👨‍💻 Author

**Haridharan B S**
