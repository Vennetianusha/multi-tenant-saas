-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================
-- SUPER ADMIN
-- =========================
INSERT INTO users (
  id, tenant_id, email, password_hash, full_name, role
)
VALUES (
  uuid_generate_v4(),
  NULL,
  'superadmin@system.com',
  '$2b$10$abcdefghijklmnopqrstuv', -- bcrypt hash placeholder
  'Super Admin',
  'super_admin'
);

-- =========================
-- TENANT
-- =========================
INSERT INTO tenants (
  id, name, subdomain, subscription_plan, max_users, max_projects
)
VALUES (
  uuid_generate_v4(),
  'Demo Company',
  'demo',
  'pro',
  25,
  15
);

-- =========================
-- TENANT ADMIN
-- =========================
INSERT INTO users (
  id, tenant_id, email, password_hash, full_name, role
)
SELECT
  uuid_generate_v4(),
  t.id,
  'admin@demo.com',
  '$2b$10$abcdefghijklmnopqrstuv',
  'Demo Admin',
  'tenant_admin'
FROM tenants t
WHERE t.subdomain = 'demo';

-- =========================
-- NORMAL USERS
-- =========================
INSERT INTO users (
  id, tenant_id, email, password_hash, full_name, role
)
SELECT
  uuid_generate_v4(),
  t.id,
  'user1@demo.com',
  '$2b$10$abcdefghijklmnopqrstuv',
  'Demo User One',
  'user'
FROM tenants t
WHERE t.subdomain = 'demo';

INSERT INTO users (
  id, tenant_id, email, password_hash, full_name, role
)
SELECT
  uuid_generate_v4(),
  t.id,
  'user2@demo.com',
  '$2b$10$abcdefghijklmnopqrstuv',
  'Demo User Two',
  'user'
FROM tenants t
WHERE t.subdomain = 'demo';

-- =========================
-- PROJECT
-- =========================
INSERT INTO projects (
  id, tenant_id, name, description
)
SELECT
  uuid_generate_v4(),
  t.id,
  'Project Alpha',
  'First demo project'
FROM tenants t
WHERE t.subdomain = 'demo';

-- =========================
-- TASK
-- =========================
INSERT INTO tasks (
  id, project_id, tenant_id, title, priority
)
SELECT
  uuid_generate_v4(),
  p.id,
  p.tenant_id,
  'Initial Task',
  'high'
FROM projects p
LIMIT 1;
