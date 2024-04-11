import { GraphQLError } from "graphql";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createToken } from "../utils/util.js";

export const authResolvers = {
  Mutation: {
    signup: async (_, { input }) => {
      try {
        const { email, name, password } = input;
        const checkEmail = await User.findOne({ email }, "email");
        if (checkEmail) {
          throw new GraphQLError("User exist");
        }
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        const userData = new User({ email, name, password: hashpassword });
        const token = createToken(userData._id);
        await userData.save();
        return { ...userData._doc, token };
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },

    login: async (_, { input }) => {
      try {
        const { email, password } = input;
        const user = await User.findOne({ email }, "email password name");
        if (!user) {
          throw new GraphQLError("Patient details not found", {
            extensions: { http: { status: 401 } },
          });
        }

        const checkPass = await bcrypt.compare(password, user.password);
        if (!checkPass) {
          throw new GraphQLError("Patient details not found", {
            extensions: { http: { status: 401 } },
          });
        }

        const token = createToken(user._id);
        return { ...user._doc, token };
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
  },
};
