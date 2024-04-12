import { GraphQLError } from "graphql";
import { verifyToken } from "../utils/util.js";
import User from "../models/user.model.js";

export const userResolver = {
  Query: {
    patient: async (_, args, ctx) => {
      try {
        const user = verifyToken(ctx);
        return await User.findById(user);
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
  },

  Mutation: {
    updatePatient: async (_, { input }, ctx) => {
      try {
        const user = verifyToken(ctx);
        return await User.findByIdAndUpdate(user, { ...input }, { new: true });
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
  },
};
