exports.seed = async function (knex) {

    await knex("openid_group_mappings")
        .insert([
            {
                id: 1,
                provider: "Keycloak",
                external_group: "admin",
                local_group_id: 1
            }
        ])
        .onConflict("id")
        .ignore();

};