const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const tenantController = require("../controllers/tenantController");

// tenant admin → view own tenant
router.get(
  "/me",
  authMiddleware,
  roleMiddleware(["tenant_admin"]),
  tenantController.getMyTenant
);

// super admin → view all tenants
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["super_admin"]),
  tenantController.getAllTenants
);

// tenant admin → update tenant
router.put(
  "/me",
  authMiddleware,
  roleMiddleware(["tenant_admin"]),
  tenantController.updateTenant
);

module.exports = router;
