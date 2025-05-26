import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/index.js";
import { mainRouter } from "./route/indexRoute.js";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import "dotenv/config";
const app = new Hono();
export const db = new PrismaClient();

app.use(logger());
app.use(

    '*',

    cors({

        origin: process.env.CLIENT_URL,          // http://localhost:5173

        allowHeaders: ['Content-Type', 'Authorization'],

        allowMethods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],

        credentials: true,                       //  ←  ADD THIS

    }),

)

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

db.$connect()
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error ) => {
      console.error("Error connecting to the database:", error);
    });



serve(
    {
      fetch: app.fetch,
      port: 8000,
    },
    (info) => {
      console.log(`Server is running on http://localhost:${info.port}`);
    }
);

app.route("", mainRouter);