const up = async function (knex) {
    return knex.schema.createTable('desenvolvedores', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.char('sexo').notNullable();
        table.integer('idade').notNullable();
        table.string('hobby');
        table.date('datadenascimento').notNullable();
    })
}

const down = async function (knex) {
    return knex.schema.dropTable('desenvolvedores');
}

module.exports = { up, down }