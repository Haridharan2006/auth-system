const db = require("../models/db");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
    const { email, password, group_id } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await db.query(
            "INSERT INTO users (email, password, group_id) VALUES ($1, $2, $3) RETURNING id, email, group_id",
            [email, hashedPassword, group_id]
        );

        res.json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error creating user" });
    }
};