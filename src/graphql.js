import { createSchema } from "graphql-yoga";
import _ from "lodash";
import { bookingTypeDef } from "./schemas/booking.schema.js";
import { authTypeDef } from "./schemas/auth.schema.js";
import { userTypeDef } from "./schemas/user.schema.js";
import { authResolver } from "./resolvers/auth.resolver.js";
import { userResolver } from "./resolvers/user.resolver.js";
import { bookingResolver } from "./resolvers/booking.resolver.js";

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

const signingKey = process.env.JWT_SECRET;
export const schema = createSchema({
  typeDefs: [authTypeDef, bookingTypeDef, userTypeDef],
  resolvers: _.merge(authResolver, bookingResolver, userResolver),
  // plugins: [
  //   useJWT({
  //     issuer: "http://graphql-yoga.com",
  //     signingKey,
  //   }),
  // ],
});
