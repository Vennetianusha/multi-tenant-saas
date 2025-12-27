const express = require("express");
const { v4: uuidv4 } = require("uuid");

const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const pool = require("../db");

const router = express.Router();

/**
 * CREATE TASK
 */
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["tenant_admin"]),
  async (req, res) => {
    try {
      const { project_id, title, description } = req.body;

      if (!project_id || !title) {
        return res.status(400).json({
          success: false,
          message: "project_id and title are required"
        });
      }

      const taskId = uuidv4();

      await pool.query(
        `INSERT INTO tasks (id, project_id, title, description, status)
         VALUES ($1, $2, $3, $4, $5)`,
        [taskId, project_id, title, description || null, "todo"]
      );

      res.json({ success: true, message: "Task created successfully" });
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

/**
 * GET TASKS BY PROJECT
 */
router.get("/:projectId", authMiddleware, async (req, res) => {
  try {
    const { projectId } = req.params;

    const result = await pool.query(
      `SELECT id, title, description, status, created_at
       FROM tasks
       WHERE project_id = $1`,
      [projectId]
    );

    res.json({ success: true, tasks: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/**
 * UPDATE TASK STATUS
 */
router.put(
  "/:taskId/status",
  authMiddleware,
  roleMiddleware(["tenant_admin"]),
  async (req, res) => {
    try {
      const { status } = req.body;
      const { taskId } = req.params;

      await pool.query(
        "UPDATE tasks SET status = $1 WHERE id = $2",
        [status, taskId]
      );

      res.json({ success: true, message: "Task status updated" });
    } catch {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

/**
 * UPDATE TASK
 */
router.put(
  "/:taskId",
  authMiddleware,
  roleMiddleware(["tenant_admin"]),
  async (req, res) => {
    try {
      const { title, description } = req.body;
      const { taskId } = req.params;

      await pool.query(
        "UPDATE tasks SET title=$1, description=$2 WHERE id=$3",
        [title, description || null, taskId]
      );

      res.json({ success: true, message: "Task updated" });
    } catch {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

/**
 * DELETE TASK
 */
router.delete(
  "/:taskId",
  authMiddleware,
  roleMiddleware(["tenant_admin"]),
  async (req, res) => {
    try {
      const { taskId } = req.params;
      await pool.query("DELETE FROM tasks WHERE id=$1", [taskId]);
      res.json({ success: true, message: "Task deleted" });
    } catch {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

module.exports = router;
