import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';
import { typeDefs } from '@GraphQL/SchemaLoader';
import { resolvers } from '@GraphQL/ResolverLoader';
import { context } from '@lib/ContextType';
config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(process.env.PORT).then(({ url }: any) => {
  console.log(`🚀 Server started on ${url}`);
});
