import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  if (!(await knex.schema.hasTable('user_profile'))) {
    return await knex.schema.createTable('user_profile', (table) => {
      table.integer('user_id').unsigned();
      table.integer('profile_id').unsigned();
      table.primary(['user_id', 'profile_id']);
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('user_profile');
}
