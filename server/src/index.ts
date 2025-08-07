import express from "express";
import cors from "cors";
import http from "http";
import lodash from "lodash";
import { AddressInfo } from "net";
import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import connectDB from "./db/connection";
import { userResolvers, userTypeDefs } from "./resolvers/userResolvers";
import { commentsResolvers, commentTypeDefs } from "./resolvers/commentResolvers";
import { movieResolvers, movieTypeDefs } from "./resolvers/movieResolvers";
import { dateScalarResolvers, dateScalarTypeDefs } from "./resolvers/dateScalarResolvers";
import { corsOptions } from "./constants/corsOptions";
import { apolloFormattedError } from "./constants/apolloFormattedError";
import { baseTypeDefs } from "./resolvers/baseSchema";

const app = express();
const PORT = process.env.PORT || 4000;

const httpServer = http.createServer(app);

const apolloServer = new ApolloServer({
    typeDefs: [userTypeDefs, commentTypeDefs, movieTypeDefs, dateScalarTypeDefs, baseTypeDefs],
    resolvers: lodash.merge(userResolvers, commentsResolvers, movieResolvers, dateScalarResolvers),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    formatError: (err) => apolloFormattedError(err)
});

await connectDB();
await apolloServer.start();

app.use(
    "/graphql",
    cors<cors.CorsRequest>(corsOptions),
    express.json(),
    expressMiddleware(apolloServer, {
        context: async ({ req }) => req,
    })
);

httpServer.listen(PORT, () => {
    const address = httpServer.address() as AddressInfo
    console.log(`🚀 Server ready at port: ${PORT}, adress: ${address.address}`);
});
