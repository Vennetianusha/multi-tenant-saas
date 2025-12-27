# STEP 1.2 – Product Requirements Document (PRD)
## Multi-Tenant SaaS Project & Task Management System

---

## 1. User Personas

### 1.1 Super Admin

**Role Description:**  
Super Admin is the system-level administrator who manages the entire SaaS platform across all tenants.

**Key Responsibilities:**
- Manage all tenants in the system  
- View and update tenant subscription plans  
- Monitor overall system usage and health  

**Main Goals:**
- Ensure smooth operation of the SaaS platform  
- Maintain security and data isolation  
- Manage subscriptions and limits  

**Pain Points:**
- Handling multiple tenants efficiently  
- Preventing data leakage between tenants  

---

### 1.2 Tenant Admin

**Role Description:**  
Tenant Admin is the administrator of a single organization (tenant).

**Key Responsibilities:**
- Manage users within their tenant  
- Create and manage projects  
- Assign tasks to users  

**Main Goals:**
- Organize team work efficiently  
- Track project and task progress  

**Pain Points:**
- Managing user limits based on subscription  
- Ensuring team productivity  

---

### 1.3 End User

**Role Description:**  
End User is a regular team member within a tenant.

**Key Responsibilities:**
- View assigned projects and tasks  
- Update task status  

**Main Goals:**
- Complete assigned tasks on time  
- Clearly understand responsibilities  

**Pain Points:**
- Lack of task visibility  
- Unclear project priorities  

---

## 2. Functional Requirements

### Authentication & Authorization

FR-001: The system shall allow tenants to register with a unique subdomain.  
FR-002: The system shall allow users to log in using email, password, and tenant subdomain.  
FR-003: The system shall authenticate users using JWT tokens.  

### Tenant Management

FR-004: The system shall isolate data for each tenant using tenant_id.  
FR-005: The system shall allow super admins to view all tenants.  
FR-006: The system shall allow tenant admins to update tenant details (name only).  

### User Management

FR-007: The system shall allow tenant admins to create users within their tenant.  
FR-008: The system shall enforce user limits based on subscription plans.  
FR-009: The system shall allow tenant admins to activate or deactivate users.  

### Project Management

FR-010: The system shall allow users to create projects within their tenant.  
FR-011: The system shall enforce project limits based on subscription plans.  
FR-012: The system shall allow users to update project details.  

### Task Management

FR-013: The system shall allow users to create tasks under projects.  
FR-014: The system shall allow users to assign tasks to team members.  
FR-015: The system shall allow users to update task status.  

---

## 3. Non-Functional Requirements

NFR-001: The system shall respond to API requests within 200ms for 90% of requests.  
NFR-002: The system shall use JWT tokens with a 24-hour expiration time.  
NFR-003: The system shall securely hash all passwords using bcrypt.  
NFR-004: The system shall support a minimum of 100 concurrent users.  
NFR-005: The system shall provide a responsive UI for desktop and mobile devices.  

---

## Conclusion

This PRD defines the users, functional requirements, and non-functional requirements of the multi-tenant SaaS project. It serves as a blueprint for designing, developing, and evaluating the system.
