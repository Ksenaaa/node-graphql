import express from "express";
import cors from "cors";
import http from "http";
import lodash from "lodash";
import "dotenv/config";

import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import connectDB from "./db/connection.ts";
import { userResolvers, userTypeDefs } from "./resolvers/userResolvers.ts";
import { commentsResolvers, commentTypeDefs } from "./resolvers/commentResolvers.ts";

const app = express();
const PORT = process.env.PORT || 3000;

const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs: [userTypeDefs, commentTypeDefs],
    resolvers: lodash.merge(userResolvers, commentsResolvers),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function startServer() {
    try {
        await connectDB();

        await server.start();

        app.use(
            "/graphql",
            cors(),
            express.json(),
            expressMiddleware(server, {})
        );

        httpServer.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}

startServer();
