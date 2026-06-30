exports.seed = async function (knex) {

    await knex("groups")
        .insert([
            { id: 1, name: "admin" },
            { id: 2, name: "developer" },
            { id: 3, name: "user" }
        ])
        .onConflict("id")
        .ignore();

};