export const userTypeDef = /* GraphQL */ `
  type Query {
    patient: Patient
  }

  type Mutation {
    updatePatient(input: UpdatePatientInput!): Patient
  }

  type Patient {
    id: String
    name: String
    email: String
    gender: Gender
    age: Int
  }

  enum Gender {
    Male
    Female
  }

  input UpdatePatientInput {
    name: String
    email: String
    gender: Gender
    age: Int
  }
`;
