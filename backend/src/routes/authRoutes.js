const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

/*
 TEMP LOGIN ROUTE
 This is fine for now (DB login can come later)
*/
router.post("/login", (req, res) => {
  const user = {
    userId: "22222222-2222-2222-2222-222222222222",
    tenantId: "11111111-1111-1111-1111-111111111111",
    role: "tenant_admin"
  };

  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  res.json({
    success: true,
    data: {
      token,
      user: {
        id: user.userId,
        email: "admin@demo.com",
        role: user.role
      }
    }
  });
});

module.exports = router;
