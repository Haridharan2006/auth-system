const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/userController");
/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: hari@test.com
 *               password:
 *                 type: string
 *                 example: 1234
 *               group_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: User created successfully
 */
router.post("/create", createUser);

module.exports = router;