import express from "express";
import cors from "cors";
import http from "http";
import lodash from "lodash";
import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import connectDB from "./db/connection";
import { userResolvers, userTypeDefs } from "./resolvers/userResolvers";
import { commentsResolvers, commentTypeDefs } from "./resolvers/commentResolvers";
import { movieResolvers, movieTypeDefs } from "./resolvers/movieResolvers";
import { dateScalarResolvers, dateScalarTypeDefs } from "./resolvers/dateScalarResolvers";
import { AddressInfo } from "net";

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
    maxAge: 600,
    origin: [
        'http://localhost:3000',
        'https://studio.apollographql.com'
    ],
    allowedHeaders: [
        'Accept',
        'Authorization',
        'Content-Type',
        'X-Requested-With',
        'apollo-require-preflight',
    ],
}

const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs: [userTypeDefs, commentTypeDefs, movieTypeDefs, dateScalarTypeDefs],
    resolvers: lodash.merge(userResolvers, commentsResolvers, movieResolvers, dateScalarResolvers),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

app.use(cors())
// app.use(cors<cors.CorsRequest>(corsOptions))
app.use(express.json())

await connectDB();
await server.start();

app.use(
    "/graphql",
    expressMiddleware(server)
);

httpServer.listen(PORT, () => {
    const address = httpServer.address() as AddressInfo
    console.log(`🚀 Server ready at port: ${PORT}, adress: ${address.address}`);
});
