import { createSchema } from "graphql-yoga";
import _ from "lodash";
import { bookingTypeDef } from "./schemas/booking.schema.js";
import { authTypeDef } from "./schemas/auth.schema.js";
import { userTypeDef } from "./schemas/user.schema.js";
import { authResolvers } from "./resolvers/auth.resolver.js";

// const queries = /* GraphQL */ `
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hello from Yoga!",
//   },
// };

export const schema = createSchema({
  typeDefs: [authTypeDef, bookingTypeDef, userTypeDef],
  resolvers: _.merge(authResolvers),
});
