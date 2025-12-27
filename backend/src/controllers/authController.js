const pool = require("../config/db");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password, tenantSubdomain } = req.body;

  try {
    // 1. Find tenant
    const tenantResult = await pool.query(
      "SELECT * FROM tenants WHERE subdomain = $1",
      [tenantSubdomain]
    );

    if (tenantResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Tenant not found",
      });
    }

    const tenant = tenantResult.rows[0];

    // 2. Find user
    const userResult = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND tenant_id = $2",
      [email, tenant.id]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const user = userResult.rows[0];

    // 3. TEMP password check (for seed data)
    if (password !== "password") {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // 4. Generate JWT
    const token = jwt.sign(
      {
        userId: user.id,
        tenantId: user.tenant_id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // 5. Send response
    res.json({
      success: true,
      data: {
        token,
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
