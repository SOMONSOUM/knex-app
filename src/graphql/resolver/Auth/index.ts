import { CreateUserResolver } from '@Resolvers/Auth/CreateUserResolver';
import { ContextType } from '@lib/ContextType';

const userList = async (_: any, {}: any, ctx: ContextType) => {};

export const UserResolver = {
  Query: {
    userList,
  },
  Mutation: {
    createUser: CreateUserResolver,
  },
};
