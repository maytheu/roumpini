import express from "express";
import { createYoga } from "graphql-yoga";
import { ruruHTML } from "ruru/server";
import { schema } from "./graphql.js";

const yoga = createYoga({ schema, });
export const app = express();

app.use("/graphql", yoga);

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});
