import { createSchema } from 'graphql-yoga';
import _ from 'lodash';

const queries = /* GraphQL */ `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from Yoga!',
  },
};

export const schema = createSchema({
  typeDefs: [queries, ],
  resolvers: _.merge(resolvers),
});