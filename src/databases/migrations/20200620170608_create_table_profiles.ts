import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  if (!(await knex.schema.hasTable('profiles'))) {
    return await knex.schema.createTable('profiles', (table) => {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.string('role').defaultTo('User');
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('profiles');
}
