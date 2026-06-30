const db = require("../models/db");

exports.generateAuthorizationUrl = async (providerName) => {

    const result = await db.query(
        `
        SELECT *
        FROM openid_providers
        WHERE LOWER(name)=LOWER($1)
        AND enabled=true
        `,
        [providerName]
    );

    if (result.rows.length === 0) {
        throw new Error("OpenID Provider not found");
    }

    const provider = result.rows[0];

    const callbackUrl =
        provider.redirect_uri +
        "?provider=" +
        encodeURIComponent(provider.name);

    const url =
        provider.issuer +
        "/protocol/openid-connect/auth" +
        "?client_id=" +
        encodeURIComponent(provider.client_id) +
        "&response_type=code" +
        "&scope=openid" +
        "&redirect_uri=" +
        encodeURIComponent(callbackUrl);

    return url;
};

// Existing generateAuthorizationUrl() remains above...

exports.exchangeAuthorizationCode = async (providerName, code) => {

    const result = await db.query(
        `
        SELECT *
        FROM openid_providers
        WHERE LOWER(name)=LOWER($1)
        AND enabled=true
        `,
        [providerName]
    );

    if (result.rows.length === 0) {
        throw new Error("OpenID Provider not found");
    }

    const provider = result.rows[0];

    const internalIssuer =
        provider.issuer.replace(
            "http://localhost:8081",
            "http://keycloak:8080"
        );

    const tokenEndpoint =
        internalIssuer +
        "/protocol/openid-connect/token";

    const params = new URLSearchParams();

    params.append("grant_type", "authorization_code");
    params.append("client_id", provider.client_id);
    params.append("client_secret", provider.client_secret || "");
    params.append("code", code);
    const callbackUrl =
        provider.redirect_uri +
        "?provider=" +
        encodeURIComponent(provider.name);

    params.append("redirect_uri", callbackUrl);

    const response = await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded"
        },
        body: params
    });

    if (!response.ok) {

        const error = await response.text();

        throw new Error(error);

    }

    return await response.json();

};
exports.findLocalGroup = async (
    provider,
    externalGroup
) => {

    const result = await db.query(
        `
        SELECT local_group_id
        FROM openid_group_mappings
        WHERE provider=$1
        AND external_group=$2
        `,
        [
            provider,
            externalGroup
        ]
    );

    if(result.rows.length===0){

        throw new Error(
            "No group mapping found"
        );

    }

    return result.rows[0].local_group_id;

};