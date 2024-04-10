import "dotenv/config";
import { createServer } from "http";
import mongoose from "mongoose";
import { app } from "./src/app.js";

const server = createServer(app);
const port = process.env.PORT || 5000;

const startServer = async () => {
  mongoose.connection.once("open", () => console.log("Database connected"));
  mongoose.connection.on("error", async (e) => {
    console.log(e);
    await mongoose.disconnect();
  });
  await mongoose.connect(process.env.DB_HOST);
  server.listen(port, () =>
    console.log(`backend server is running on ${port}`)
  );
};

startServer();
