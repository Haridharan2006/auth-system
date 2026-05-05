const db = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ message: "User not found" });
        }

        const user = result.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { id: user.id, group_id: user.group_id },
            "secretkey",
            { expiresIn: "1h" }
        );

        res.json({ token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Login failed" });
    }
};