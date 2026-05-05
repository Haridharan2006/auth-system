const db = require("../models/db");

exports.createGroup = async (req, res) => {
    const { name } = req.body;

    try {
        const result = await db.query(
            "INSERT INTO groups (name) VALUES ($1) RETURNING *",
            [name]
        );

        res.json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error creating group" });
    }
};