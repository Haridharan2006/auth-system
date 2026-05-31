const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
/**
 * @swagger
 * /groups/create:
 *   post:
 *     summary: Create a new group
 *     tags: [Groups]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: admin
 *     responses:
 *       200:
 *         description: Group created successfully
 */
router.post('/create', groupController.createGroup);

module.exports = router;