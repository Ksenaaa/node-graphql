import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "";

const clientOptions: ConnectOptions = { dbName: "sample_mflix" };

export default async function connectDB() {
    if (mongoose.connection.readyState !== 0) return

    try {
        await mongoose.connect(MONGO_URL, clientOptions)
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log('Connected to MongoDB');

        return mongoose
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1)
    };
}
