const db = require("../models/db");

// Create Provider
exports.createProvider = async (req, res) => {

    const {
        name,
        issuer,
        client_id,
        client_secret,
        redirect_uri,
        enabled
    } = req.body;

    try {

        const result = await db.query(
            `
            INSERT INTO openid_providers
            (
                name,
                issuer,
                client_id,
                client_secret,
                redirect_uri,
                enabled
            )

            VALUES
            ($1,$2,$3,$4,$5,$6)

            RETURNING *;
            `,
            [
                name,
                issuer,
                client_id,
                client_secret,
                redirect_uri,
                enabled
            ]
        );

        res.json(result.rows[0]);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Unable to create provider"
        });

    }

};

// Get Providers
exports.getProviders = async (req, res) => {

    try {

        const result = await db.query(
            `
            SELECT *
            FROM openid_providers
            ORDER BY id
            `
        );

        res.json(result.rows);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Unable to fetch providers"
        });

    }

};

// Delete Provider
exports.deleteProvider = async (req, res) => {

    try {

        await db.query(
            `
            DELETE
            FROM openid_providers
            WHERE id=$1
            `,
            [req.params.id]
        );

        res.json({
            message: "Provider deleted"
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Unable to delete provider"
        });

    }

};