const jwt = require("jsonwebtoken");
const ldapService = require("../services/ldapService");

exports.login = async (req, res) => {

    const { username, password } = req.body;

    try {

        const authenticated =
            await ldapService.authenticate(
                username,
                password
            );

        if (!authenticated) {

            return res.status(401).json({
                message: "Invalid username and/or password"
            });

        }

        const user =
            await ldapService.getUser(username);

        const groups =
            await ldapService.getUserGroups(username);

        let groupId = 3;

        if (groups.includes("admin"))
            groupId = 1;

        else if (groups.includes("developer"))
            groupId = 2;

        const token = jwt.sign(
            {
                id: username,
                username,
                email: user.mail,
                group_id: groupId,
                login_type: "ldap"
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        res.json({ token });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "LDAP login failed"
        });

    }

};