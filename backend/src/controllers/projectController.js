const pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

exports.createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const tenantId = req.user.tenantId;

    const projectId = uuidv4();

    await pool.query(
      `INSERT INTO projects (id, tenant_id, name, description)
       VALUES ($1, $2, $3, $4)`,
      [projectId, tenantId, name, description]
    );

    res.status(201).json({
      success: true,
      message: "Project created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const tenantId = req.user.tenantId;

    const result = await pool.query(
      `SELECT id, name, description, created_at
       FROM projects
       WHERE tenant_id = $1`,
      [tenantId]
    );

    res.json({ success: true, projects: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
