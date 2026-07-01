exports.seed = async function (knex) {

    await knex.transaction(async (trx) => {

        await trx("openid_group_mappings")
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

    });

};