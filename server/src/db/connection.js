import { MongoClient, ServerApiVersion } from "mongodb";

const MONGO_URL = process.env.MONGO_URL || "";

const client = new MongoClient(MONGO_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

client
    .connect()
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.error(
            new Error(`Failed to connect to the database - ${error}`)
        );
    });

let db = client.db("sample_mflix");

export default db;
