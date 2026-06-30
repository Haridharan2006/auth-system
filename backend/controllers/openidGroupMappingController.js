const db = require("../models/db");

exports.createMapping = async (req, res) => {

    const {
        provider,
        external_group,
        local_group_id
    } = req.body;

    try {

        const result = await db.query(
            `
            INSERT INTO openid_group_mappings
            (
                provider,
                external_group,
                local_group_id
            )
            VALUES ($1,$2,$3)
            RETURNING *
            `,
            [
                provider,
                external_group,
                local_group_id
            ]
        );

        res.json(result.rows[0]);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Unable to create mapping"
        });

    }

};