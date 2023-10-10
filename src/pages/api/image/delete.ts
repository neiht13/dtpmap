import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "../../../../prisma/generated/client";
import cloudinary from "@/lib/cloudinary";
const axios = require('axios');

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const public_id = 'bk6cjxvrz6vtqrxkuvfq'
        const timestamp = Math.round((new Date).getTime()/1000);


        const signature = require('crypto').createHash('sha1').update(`public_id=${public_id}&timestamp=${timestamp}${'DHAluj5pyxTQnUxiaGqmSq2gNWc'}`).digest('hex');

        const deleteUrl = `https://api.cloudinary.com/v1_1/${'djmx3jbc1'}/image/destroy`;

        // @ts-ignore
        axios.delete(deleteUrl, {
            params: {
                public_id: public_id,
                timestamp: timestamp,
                api_key: 'DHAluj5pyxTQnUxiaGqmSq2gNWc',
                signature: signature
            }
        })
            // @ts-ignore
            .then(response => {
                res.status(200).json(response.data)
            })
            // @ts-ignore

            .catch(error => {
                res.status(500).json(error)
            });

    } catch (err) {
        res.status(500).json(err)
    }
}