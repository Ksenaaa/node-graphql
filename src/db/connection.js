import { MongoClient, ServerApiVersion } from "mongodb";

const MONGO_URL = process.env.MONGO_URL || "";

const client = new MongoClient(MONGO_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let connection;

try {
    connection = await client.connect();
    console.log("Database connected");
} catch (e) {
    console.error(e);
}

let db = connection.db("sample_mflix");

export default db;
