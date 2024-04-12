import { GraphQLScalarType, Kind } from "graphql";

export const DateTimeType = new GraphQLScalarType({
    name: 'DateTime',
    description: 'A date and time scalar type',
    serialize(value) {
      return value.toISOString();
    },
    parseValue(value) {
      return new Date(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value);
      }
      return null; 
    }
  });