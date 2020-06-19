import { knex } from '../../databases/setting';

const postList = async (_: any, {}: any) => {
  const posts = await knex('posts').orderBy('id', 'asc');
  return posts;
};
export const PostResolver = {
  Query: {
    postList,
  },
};
