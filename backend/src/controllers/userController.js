const pool = require("../db");
const bcrypt = require("bcrypt");
const { randomUUID } = require("crypto"); // ✅ FIXED
const jwt = require("jsonwebtoken");

// CREATE USER (Tenant Admin / Super Admin)
exports.createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const tenantId = req.user.tenantId;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = randomUUID(); // ✅ FIXED

    const result = await pool.query(
      `INSERT INTO users (id, tenant_id, email, password, role)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, email, role`,
      [userId, tenantId, email, hashedPassword, role]
    );

    res.status(201).json({
      success: true,
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "User creation failed" });
  }
};

// GET CURRENT USER
exports.getMe = async (req, res) => {
  try {
    const userId = req.user.userId;

    const result = await pool.query(
      `SELECT id, email, role, tenant_id FROM users WHERE id = $1`,
      [userId]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
