const { Client } = require("ldapts");

const LDAP_URL = process.env.LDAP_URL;
const USERS_DN = process.env.LDAP_USERS_DN;
const GROUPS_DN = process.env.LDAP_GROUPS_DN;

const ADMIN_DN = process.env.LDAP_ADMIN_DN;
const ADMIN_PASSWORD = process.env.LDAP_ADMIN_PASSWORD;

/*
====================================
Authenticate LDAP User
====================================
*/

async function authenticate(username, password) {

    const client = new Client({
        url: LDAP_URL
    });

    const userDN =
        `uid=${username},${USERS_DN}`;

    try {

        await client.bind(
            userDN,
            password
        );

        return true;

    } catch (err) {

        return false;

    } finally {

        await client.unbind()
            .catch(() => {});

    }

}


/*
====================================
Get LDAP User
====================================
*/

async function getUser(username) {

    const client = new Client({
        url: LDAP_URL
    });

    try {

        await client.bind(
            ADMIN_DN,
            ADMIN_PASSWORD
        );

        const { searchEntries } =
            await client.search(
                USERS_DN,
                {
                    scope: "sub",

                    filter:
                        `(uid=${username})`,

                    attributes: [
                        "uid",
                        "cn",
                        "mail"
                    ]
                }
            );

        return searchEntries[0] || null;

    } finally {

        await client.unbind()
            .catch(() => {});

    }

}


/*
====================================
Get LDAP User Groups
====================================
*/

async function getUserGroups(username) {

    const client = new Client({
        url: LDAP_URL
    });

    const userDN =
        `uid=${username},${USERS_DN}`;

    try {

        await client.bind(
            ADMIN_DN,
            ADMIN_PASSWORD
        );

        const { searchEntries } =
            await client.search(
                GROUPS_DN,
                {
                    scope: "sub",

                    filter:
                        `(member=${userDN})`,

                    attributes: [
                        "cn"
                    ]
                }
            );

        return searchEntries.map(
            group => group.cn
        );

    } finally {

        await client.unbind()
            .catch(() => {});

    }

}


module.exports = {

    authenticate,

    getUser,

    getUserGroups

};