import { gql } from 'apollo-server';
import fs from 'fs';

export const typeDefs = SchemaLoader();

function SchemaLoader() {
  const files = fs.readdirSync(__dirname + '/schema');
  const schema = [];
  for (const file of files) {
    schema.push(
      gql`
        ${fs.readFileSync(__dirname + '/schema/' + file)}
      `
    );
  }
  return schema;
}
