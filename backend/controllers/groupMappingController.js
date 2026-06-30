const db = require("../models/db");

// Create Mapping
exports.createMapping = async (req, res) => {
    const { provider, external_group, local_group_id } = req.body;

    try {
        const result = await db.query(
            `
            INSERT INTO openid_group_mappings
            (provider, external_group, local_group_id)
            VALUES ($1, $2, $3)
            RETURNING *;
            `,
            [provider, external_group, local_group_id]
        );

        res.json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Error creating mapping"
        });
    }
};

// Get All Mappings
exports.getMappings = async (req, res) => {

    try {

        const result = await db.query(
            `
            SELECT
                m.id,
                m.provider,
                m.external_group,
                g.name AS local_group
            FROM openid_group_mappings m
            JOIN groups g
            ON m.local_group_id = g.id
            ORDER BY m.id;
            `
        );

        res.json(result.rows);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Error fetching mappings"
        });

    }

};

// Delete Mapping
exports.deleteMapping = async (req, res) => {

    try {

        await db.query(
            `
            DELETE FROM openid_group_mappings
            WHERE id = $1;
            `,
            [req.params.id]
        );

        res.json({
            message: "Mapping deleted"
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Error deleting mapping"
        });

    }

};