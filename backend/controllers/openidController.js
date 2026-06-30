const jwt = require("jsonwebtoken");
const openidService = require("../services/openidService");

exports.login = async (req, res) => {

    try {

        const provider = req.params.provider;

        const authorizationUrl =
            await openidService.generateAuthorizationUrl(provider);

        res.redirect(authorizationUrl);

    } catch (err) {

        console.error(err);

        res.status(404).json({
            error: err.message
        });

    }

};

exports.callback = async (req, res) => {

    console.log("===== OPENID CALLBACK =====");
    console.log(req.query);

    try {

        const code = req.query.code;
        const provider = req.query.provider;

        const tokens =
            await openidService.exchangeAuthorizationCode(
                provider,
                code
            );

        const decoded =
            jwt.decode(tokens.id_token);

        console.log(decoded);

        const externalGroup =
            decoded.groups[0];

        const localGroupId =
            await openidService.findLocalGroup(
                provider,
                externalGroup
            );

        const applicationToken =
            jwt.sign(
                {
                    username:
                        decoded.preferred_username,
                    email:
                        decoded.email,
                    group_id:
                        localGroupId,
                    login_type:
                        "openid",
                    provider:
                        provider
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:
                        process.env.JWT_EXPIRES_IN
                }
            );

        console.log("Redirecting to dashboard...");

        res.redirect(
            `http://localhost:5500/dashboard.html?token=${applicationToken}`
        );

    }
    catch(err){

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }

};

exports.getProviders = async (req,res)=>{

    try{

        const db =
            require("../models/db");

        const result =
            await db.query(`
                SELECT
                    id,
                    name
                FROM openid_providers
                WHERE enabled=true
                ORDER BY name
            `);

        res.json(result.rows);

    }
    catch(err){

        console.error(err);

        res.status(500).json({
            error:
                "Unable to fetch providers"
        });

    }

};