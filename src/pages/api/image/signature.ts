import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "../../../../prisma/generated/client";
const cloudinary = require('cloudinary').v2;

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const timestamp = Math.round((new Date).getTime()/1000);

        const signature = cloudinary.utils.api_sign_request({
            timestamp: timestamp,
            source: 'ml',
            folder: 'dtp'}, 922982469845971);

        res.status(200).json({ timestamp, signature })
    } catch (err) {
        res.status(500).json({error: 'failed to load data'})
    }
}