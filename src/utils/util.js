import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

export const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET);
};

export const verifyToken = (ctx) => {
  const token = ctx.req.headers.authorization;
  if (!token)
    throw new GraphQLError("User not authorized", {
      extensions: { http: { status: 401 } },
    });
  const user = jwt.verify(token, process.env.JWT_SECRET);
  return user.userId;
};
