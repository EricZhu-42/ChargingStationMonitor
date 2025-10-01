import type { VercelRequest, VercelResponse } from '@vercel/node'
import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

export default function handler(req: VercelRequest, res: VercelResponse) {
    try {
        await client.connect();
        const database = client.db('electricity');
        const items = database.collection('real-time');
        const data = await items.find({}).limit(10).toArray();
        return res.json(data);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}