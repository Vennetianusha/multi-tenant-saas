🚀 Multi-Tenant SaaS Project & Task Management System

A full-stack, production-ready Multi-Tenant SaaS application that allows multiple organizations (tenants) to manage users, projects, and tasks with strict data isolation.

This project demonstrates real-world SaaS architecture, secure authentication, and Docker-based deployment.

🌟 Project Highlights

✅ Multi-Tenant Architecture using tenant_id

🔐 JWT Authentication & Role-Based Access Control

👥 Tenant Admin & User Roles

📁 Project Management

✅ Task Management (Add / Update / Delete / Status)

🐳 Fully Dockerized (One-command setup)

🎨 Clean React UI

🧪 APIs tested using Postman

📦 Industry-standard folder structure

🧠 Architecture Overview

User → React Frontend
Frontend → Node.js Backend (JWT Auth)
Backend → PostgreSQL Database

Each request:

JWT validates user

tenant_id isolates tenant data

Same backend serves multiple tenants securely

🛠️ Technology Stack
Frontend

React

Axios

CSS (Custom styling)

Backend

Node.js

Express.js

JWT (Authentication)

bcrypt (Password hashing)

Database

PostgreSQL

DevOps

Docker

Docker Compose

👤 User Roles

Super Admin

Manages tenants

Tenant Admin

Creates users

Manages projects & tasks

User

Views assigned projects & tasks

✨ Features
Authentication

Secure login using JWT

Token stored in browser localStorage

Role-based route protection

Multi-Tenancy

Shared database

tenant_id used in all tables

No tenant can access another tenant’s data

Projects

Create projects

View tenant-specific projects

Tasks

Add tasks

Update task status (Todo → Done)

Delete tasks

Auto-refresh UI

📂 Project Structure
multi-tenant-saas/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── db.js
│   ├── server.js
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── styles/
│   ├── App.js
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md

🐳 Docker Setup
Prerequisites

Docker Desktop

Node.js 18+

Run the Application
docker compose up --build

Application URLs

Frontend: http://localhost:3000

Backend API: http://localhost:5001

Health Check: http://localhost:5001/api/health

Database: localhost:5432

🧪 API Testing (Postman)

Login API returns JWT token

Pass token in headers:

Authorization: Bearer YOUR_TOKEN


Tested APIs:

Authentication

Projects CRUD

Tasks CRUD

Task Status Update

🔒 Security Practices

Passwords hashed using bcrypt

JWT tokens with expiry

Role-based authorization middleware

Tenant isolation enforced at backend

Client never sends tenant_id

🎯 Why This Project Matters

Real-world SaaS design

Multi-tenant data isolation (highly demanded skill)

Docker & DevOps exposure

Clean frontend-backend integration

Strong portfolio project for interviews

🚀 Future Improvements

Task assignment to users

Audit logs

Email notifications

UI with Tailwind / Material UI

Cloud deployment (AWS / Render / Railway)

👩‍💻 Author

Anusha Pavani Venneti


