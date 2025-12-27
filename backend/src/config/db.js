const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "saas_db",
  user: "postgres",
  password: "postgres",
});

pool.query("SELECT 1")
  .then(() => console.log("PostgreSQL connected successfully"))
  .catch(err => console.error("PostgreSQL connection failed:", err));

module.exports = pool;
