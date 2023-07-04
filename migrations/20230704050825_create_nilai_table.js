/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('nilai', function(table) {
        table.string('nim').primary()
        table.string('nama').notNullable()
        table.integer('uts').notNullable()
        table.integer('uas').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('nilai')
};
