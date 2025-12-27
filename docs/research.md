# Research Document  
## Multi-Tenant SaaS Project & Task Management System

---

## 1. Multi-Tenancy Analysis

Multi-tenancy is a software architecture pattern where a single application instance serves multiple organizations (called tenants), while ensuring that each tenant’s data is completely isolated and secure. In a multi-tenant system, users from one organization must never be able to access or view data belonging to another organization.

This project is designed as a multi-tenant SaaS application, where multiple companies can register, manage their teams, create projects, and track tasks independently using the same application and database.

---

## Multi-Tenancy Approaches

There are three commonly used approaches to implement multi-tenancy:

### 1. Shared Database + Shared Schema (Tenant ID Based)

In this approach, all tenants share the same database and the same set of tables. Each table contains a `tenant_id` column, which is used to identify which tenant owns a particular record.

**Example:**
- A `projects` table stores projects for all tenants  
- Each project row includes a `tenant_id`  
- All database queries are filtered using `tenant_id` to ensure isolation  

**Advantages:**
- Cost-effective and efficient  
- Easy to scale for a large number of tenants  
- Simple database maintenance  
- Widely used in real-world SaaS applications  

**Disadvantages:**
- Requires careful query filtering  
- A mistake in tenant filtering can cause data leaks if not handled properly  

---

### 2. Shared Database + Separate Schema per Tenant

In this approach, tenants share the same database, but each tenant has its own schema. Each schema contains separate tables for that tenant.

**Advantages:**
- Better data isolation compared to shared schema  
- Easier tenant-level maintenance  

**Disadvantages:**
- More complex schema management  
- Harder to scale when many tenants exist  
- Not beginner-friendly  

---

### 3. Separate Database per Tenant

In this approach, each tenant has its own completely separate database.

**Advantages:**
- Strongest data isolation  
- Easier compliance and security controls  

**Disadvantages:**
- Very expensive  
- Complex infrastructure  
- Difficult to manage at scale  

---

## Chosen Multi-Tenancy Approach

For this project, we choose **Shared Database + Shared Schema with `tenant_id`**.

This approach is selected because it provides a good balance between scalability, simplicity, and cost-efficiency. It is widely used in modern SaaS platforms and aligns perfectly with the project requirements. Data isolation is enforced at the application level by strictly filtering all queries using the authenticated user’s `tenant_id`.

---

## 2. Technology Stack Justification

Choosing the right technology stack is critical for building a scalable and maintainable SaaS application. The following technologies are used in this project:

---

### Backend – Node.js with Express.js

Node.js is chosen as the backend runtime because it is fast, lightweight, and well-suited for building RESTful APIs. Express.js provides a minimal and flexible framework for creating APIs, handling middleware, and managing routes efficiently.

**Reasons for selection:**
- High performance for API-based applications  
- Simple and clean architecture  
- Large ecosystem of libraries  
- Easy integration with authentication and database tools  

---

### Frontend – React.js

React is used to build the frontend user interface. It follows a component-based architecture, making the UI modular, reusable, and easier to maintain.

**Reasons for selection:**
- Component-based design  
- Efficient state management  
- Large community support  
- Industry standard for frontend development  

---

### Database – PostgreSQL

PostgreSQL is selected as the relational database for this project. It offers strong ACID compliance, advanced indexing, and excellent support for relational data models.

**Reasons for selection:**
- Strong support for relational data  
- Excellent performance and reliability  
- Ideal for multi-tenant applications  
- Supports transactions and foreign key constraints  

---

### Authentication – JSON Web Tokens (JWT)

JWT is used for stateless authentication. After login, the backend issues a token that contains the user’s identity, role, and tenant information. This token is sent with every request to authorize the user.

**Reasons for selection:**
- Stateless and scalable  
- No server-side session storage required  
- Secure when implemented correctly  
- Suitable for REST APIs  

---

### Containerization – Docker

Docker is used to containerize the database, backend, and frontend services. This ensures consistent behavior across different environments and allows the application to be started with a single command.

**Reasons for selection:**
- Consistent development and deployment environment  
- Easy service orchestration using Docker Compose  
- Required by the project specification  
- Simplifies setup and evaluation  

---

## 3. Security Considerations

Security is a critical aspect of any multi-tenant SaaS system. The following measures are implemented in this project to ensure security and data protection:

### 1. Password Hashing
All user passwords are securely hashed using bcrypt before storing them in the database. Plain-text passwords are never stored.

### 2. JWT-Based Authentication
Authentication is handled using JWT tokens with a 24-hour expiry. Each request is authenticated using the token, ensuring secure access.

### 3. Role-Based Access Control (RBAC)
The system defines three roles: `super_admin`, `tenant_admin`, and `user`. Each API endpoint enforces role-based permissions to prevent unauthorized access.

### 4. Tenant Data Isolation
Every database query is filtered using `tenant_id` obtained from the authenticated JWT token. Client-provided tenant identifiers are never trusted.

### 5. API-Level Validation and Authorization
All incoming requests are validated at the backend. Authorization middleware ensures that users can only access resources permitted by their role and tenant.

---

## Conclusion

This research establishes the foundation for building a secure, scalable, and production-ready multi-tenant SaaS application. By choosing a shared database with tenant-based isolation, a modern technology stack, and strong security practices, the system is designed to meet real-world SaaS standards and project requirements.
