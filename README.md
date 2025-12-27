# 🚀 Multi-Tenant SaaS Project & Task Management System

A **full-stack, production-ready Multi-Tenant SaaS application** that enables multiple organizations (**tenants**) to manage users, projects, and tasks with **strict data isolation**.

This project demonstrates **real-world SaaS architecture**, **secure authentication**, and **Docker-based deployment** — making it a strong **portfolio project for interviews**.


::contentReference[oaicite:0]{index=0}


---

## 🌟 Project Highlights

- ✅ **Multi-Tenant Architecture** using `tenant_id`
- 🔐 **JWT Authentication & Role-Based Access Control**
- 👥 **Tenant Admin & User Roles**
- 📁 **Project Management**
- ✅ **Task Management** (Add / Update / Delete / Status)
- 🐳 **Fully Dockerized** (One-command setup)
- 🎨 **Clean React UI**
- 🧪 **APIs tested using Postman**
- 📦 **Industry-standard folder structure**

---

## 🧠 Architecture Overview

User
↓
React Frontend
↓ (JWT Auth)
Node.js Backend
↓ (tenant_id isolation)
PostgreSQL Database

markdown
Copy code

### 🔐 Request Flow
1. User logs in → receives **JWT**
2. JWT validates user identity
3. `tenant_id` is extracted from token
4. Backend filters data **per tenant**
5. Same backend securely serves **multiple tenants**

---

## 🛠️ Technology Stack

### Frontend
- React
- Axios
- Custom CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt (Password Hashing)

### Database
- PostgreSQL

### DevOps
- Docker
- Docker Compose

---

## 👤 User Roles

### 🔹 Super Admin
- Create & manage tenants

### 🔹 Tenant Admin
- Create users
- Manage projects & tasks

### 🔹 User
- View assigned projects
- Update task status

---

## ✨ Features

### 🔐 Authentication
- Secure login using JWT
- Token stored in browser `localStorage`
- Role-based route protection

### 🏢 Multi-Tenancy
- Shared database architecture
- `tenant_id` present in all tables
- Complete tenant data isolation
- Client **never sends** `tenant_id`

### 📁 Projects
- Create projects
- View tenant-specific projects

### ✅ Tasks
- Add tasks
- Update task status (Todo → Done)
- Delete tasks
- Auto-refresh UI

---

## 📂 Project Structure

multi-tenant-saas/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── db.js
│ ├── server.js
│ └── Dockerfile
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ └── styles/
│ ├── App.js
│ └── Dockerfile
│
├── docker-compose.yml
└── README.md

yaml
Copy code

---

## 🐳 Docker Setup

### ✅ Prerequisites
- Docker Desktop
- Node.js 18+

### ▶️ Run the Application
```bash
docker compose up --build
🌐 Application URLs
Service	URL
Frontend	http://localhost:3000
Backend API	http://localhost:5001
Health Check	http://localhost:5001/api/health
PostgreSQL	localhost:5432

🧪 API Testing (Postman)
🔑 Authentication
Login API returns JWT Token

Pass token in headers:

makefile
Copy code
Authorization: Bearer YOUR_TOKEN
✅ Tested APIs
Authentication

Projects (CRUD)

Tasks (CRUD)

Task Status Update

🔒 Security Practices
Passwords hashed using bcrypt

JWT tokens with expiry

Role-based authorization middleware

Backend-enforced tenant isolation

No cross-tenant data access

🎯 Why This Project Matters
✅ Real-world SaaS architecture

✅ Multi-tenant data isolation (highly demanded skill)

✅ Docker & DevOps experience

✅ Clean frontend-backend integration

✅ Strong interview-ready portfolio project

🚀 Future Improvements
Task assignment to users

Audit logs

Email notifications

UI with Tailwind / Material UI

Cloud deployment (AWS / Render / Railway)

👩‍💻 Author
Anusha Pavani Venneti
