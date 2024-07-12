import express from "express";
import cors from "cors";
import "dotenv/config";

import db from "./src/db/connection.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hell o  World!");
});
app.get("/users", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).limit(3).toArray();
    res.send(results).status(200);
});

app.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
});
