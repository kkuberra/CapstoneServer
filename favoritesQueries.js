const knex = require('./connection.js')

module.exports = {
    list() {
        return knex("favorites")
    },
    read(id) {
        return knex('favorites')
            .where('id', id)
            .first()
    },
    create(location) {
        return knex('favorites')
            .insert(location)
            .returning('*')
            .then(record => record[0])
    },
    update(id, favorites) {
        return knex("favorites")
            .update(favorites)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id) {
        return knex("favorites").delete().where("id", id);
    }
}