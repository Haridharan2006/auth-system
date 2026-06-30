exports.seed = async function (knex) {

    await knex("openid_providers")
        .insert([
            {
                id: 1,
                name: "Keycloak",
                issuer: "http://localhost:8081/realms/auth-system",
                client_id: "frontend-app",
                client_secret: "",
                redirect_uri: "http://localhost:5000/openid/callback",
                enabled: true
            }
        ])
        .onConflict("id")
        .ignore();

};