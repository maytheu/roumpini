export const userTypeDef = /* GraphQL */ `
  type Query {
    user: User
  }

  type Mutation {
    updateUser(input: UpdateUserInput!): User
  }

  type User {
    id: String
    name: String
    email: String
    gender: Gender
    age: Int
  }

  enum Gender {
    MALE
    FEMALE
  }

  input UpdateUserInput {
    name: String
    email: String
    gender: Gender
    age: Int
  }
`;
