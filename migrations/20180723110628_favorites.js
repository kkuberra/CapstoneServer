exports.up = function (knex, Promise) {
    return knex.schema.createTable('favorites', (table) => {
        table.increments()
        table.text('name')
        table.text('player_id')
        table.text('image_url')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('favorites')
};