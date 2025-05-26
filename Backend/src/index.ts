import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/index.js";
import { mainRouter } from "./route/indexRoute.js";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import "dotenv/config";

// Create Hono app
const app = new Hono();

// Export database client
export const db = new PrismaClient();

// Add logging middleware
app.use(logger());

// Add CORS middleware with support for credentials
app.use(
    '*',
    cors({
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        allowHeaders: ['Content-Type', 'Authorization', 'Cookie'],
        allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        credentials: true, // Required for cookies
        exposeHeaders: ['Set-Cookie'], // Allow the browser to expose Set-Cookie header
    }),
);

// Simple health check route
app.get("/", (c) => {
    return c.json({
        status: "ok",
        message: "API server is running",
        version: "1.0.0"
    });
});

// Apply routes before starting the server
app.route("", mainRouter);

// Connect to the database
db.$connect()
    .then(() => {
        console.log("Connected to the database");

        // Start the server after database connection is established
        serve(
            {
                fetch: app.fetch,
                port: parseInt(process.env.PORT || "8000"),
            },
            (info) => {
                console.log(`Server is running on http://localhost:${info.port}`);
            }
        );
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit with error code
    });