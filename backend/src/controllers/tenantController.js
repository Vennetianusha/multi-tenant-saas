const pool = require("../config/db");

// GET current tenant (tenant_admin)
exports.getMyTenant = async (req, res) => {
  try {
    const tenantId = req.user.tenantId;

    const result = await pool.query(
      "SELECT id, name, subdomain, subscription_plan, status FROM tenants WHERE id = $1",
      [tenantId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Tenant not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET all tenants (super_admin)
exports.getAllTenants = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, subdomain, subscription_plan, status FROM tenants"
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE tenant name (tenant_admin)
exports.updateTenant = async (req, res) => {
  try {
    const tenantId = req.user.tenantId;
    const { name } = req.body;

    const result = await pool.query(
      "UPDATE tenants SET name = $1 WHERE id = $2 RETURNING id, name",
      [name, tenantId]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
