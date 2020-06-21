import { ContextType } from '@lib/ContextType';
import hash from 'password-hash';
import { TokenGenerator } from '@lib/TokenGenerator';

export const CreateUserResolver = async (
  _: any,
  { data }: any,
  ctx: ContextType
) => {
  const knex = await ctx.knex;
  let uniqueKey =
    (await (await knex('users').where('email', '=', data.email)).length) <= 0;

  if (uniqueKey) {
    const user: any = await knex('users')
      .insert({
        username: data.username,
        email: data.email,
        password: hash.generate(data.password),
        phone_number: data.phoneNumber,
        avatar: data.avatar,
        access_token: TokenGenerator() + '@' + data.username,
      })
      .returning('id');
    await knex('user_profile').insert({
      user_id: user[0],
      profile_id: data.profileID,
    });
    return true;
  } else {
    throw `email already exist!`;
  }
};
