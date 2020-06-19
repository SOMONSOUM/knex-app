import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';
import { typeDefs } from './graphql/SchemaLoader';
import { resolvers } from './graphql/ResolverLoader';
config();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(process.env.PORT).then(({ url }: any) => {
  console.log(`🚀 Server started on ${url}`);
});
