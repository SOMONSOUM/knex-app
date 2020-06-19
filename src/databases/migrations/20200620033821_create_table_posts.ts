import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  if (!(await await knex.schema.hasTable('posts'))) {
    return knex.schema.createTable('posts', (table) => {
      table.increments('id').primary();
      table.string('title', 108).notNullable();
      table
        .string('image')
        .defaultTo(
          'https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png'
        );
      table.string('content').notNullable();
      table.integer('user_id');
      table.integer('category_id');
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<any> {}
