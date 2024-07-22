import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./src/db/connection.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World! !!!");
});
app.get("/users", async (req, res) => {
    let collection = db?.collection("users");
    let results = await collection?.find({}).limit(30).toArray();
    console.log(results);
    res.send(results).status(200);
});

app.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
});
