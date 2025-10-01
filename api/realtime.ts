import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';

// Get the MongoDB URI from environment variables
const URI = process.env.MONGO_URI;

// Cache the database connection to reuse it across function invocations
let cachedDb: Db | null = null;

async function connectToDatabase() {
    // If the database connection is already cached, use it
    if (cachedDb) {
        return cachedDb;
    }

    // If there is no cached connection, create a new one
    if (!URI) {
        throw new Error('MONGO_URI is not defined in environment variables.');
    }

    const client = new MongoClient(URI);
    await client.connect();

    const db = client.db('electricity');

    // Cache the connection
    cachedDb = db;
    return db;
}

// The main handler is now async
export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        // Get the database connection (uses the cached one if available)
        const database = await connectToDatabase();

        const items = database.collection('real-time');
        const data = await items.find({}).limit(10).toArray();

        // Send the data as a successful response wrapped in a result object
        return res.status(200).json({ result: data });

    } catch (err: any) {
        console.error(err);
        // Send a proper error response if something goes wrong
        return res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
    // We do NOT close the client here, so it can be reused
}