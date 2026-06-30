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
            return res.status(401).json({ message: "Invalid username and/or password" });
        }

        const user = result.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid username and/or password" });
        }

        const token = jwt.sign(
                {
                    id: user.id,
username: user.email.split("@")[0],
email: user.email,
group_id: user.group_id,
login_type: "local"
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

        res.json({ token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Login failed" });
    }
};