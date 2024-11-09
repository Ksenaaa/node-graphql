import express from "express";
import cors from "cors";
import http from "http";
import lodash from "lodash";
import { AddressInfo } from "net";
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

const app = express();
const PORT = process.env.PORT || 4000;

const httpServer = http.createServer(app);

const apolloServer = new ApolloServer({
    typeDefs: [userTypeDefs, commentTypeDefs, movieTypeDefs, dateScalarTypeDefs],
    resolvers: lodash.merge(userResolvers, commentsResolvers, movieResolvers, dateScalarResolvers),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

app.use(cors())
app.use(express.json())

await connectDB();
await apolloServer.start();

app.use(
    "/graphql",
    expressMiddleware(apolloServer)
);

httpServer.listen(PORT, () => {
    const address = httpServer.address() as AddressInfo
    console.log(`🚀 Server ready at port: ${PORT}, adress: ${address.address}`);
});
