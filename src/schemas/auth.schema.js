export const authTypeDef = /* GraphQL */ `
  type Mutation {
    login(input: LoginInput!): UserWithToken
    signup(input: SignupInput!): UserWithToken
  }

  type UserWithToken {
    id: String
    name: String
    email: String
    token: String!
  }

  input SignupInput {
    email: String!
    name: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;
