import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  return knex('posts')
    .delete()
    .then(() => {
      return knex('posts').insert([
        {
          title: 'GraphQL',
          content: 'This my post',
          user_id: 1,
          category_id: 1,
        },
        {
          title: 'GraphQL Tutorial 01',
          content:
            'Hello guys today I am gonna show you guys about how to use GraphQL with TypeScript',
          user_id: 1,
          category_id: 1,
        },
      ]);
    });
}
