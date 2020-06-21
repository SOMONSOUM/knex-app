import * as Knex from 'knex';
import { knex } from '@Knex/setting';

interface User {
  id?: number | 0;
  username?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  createdAt?: string | null;
  profile?: any | null;
}

export type ContextType = {
  knex: Knex;
};

export const context = async ({ req }: any) => {
  let auth = {};
  if (req.query.token !== undefined) {
    auth = new HandlerAuth(req.query.token);
  }

  return {
    knex,
    auth,
  };
};

class HandlerAuth {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async getUser(): Promise<User> {
    const item = await knex('users')
      .innerJoin('user_profile', 'users.id', 'user_profile.user_id')
      .innerJoin('profiles', 'user_profile.profile_id', 'profile.id')
      .where('access_token', '=', this.token)
      .first();
    return {
      ...item,
      id: item.user_id,
      username: item.username,
      email: item.email,
      phoneNumer: item.phone_number,
      profile: { id: item.profile_id, role: item.role },
    };
  }
}
