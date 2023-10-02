import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "../../../../prisma/generated/client";
import cloudinary from "@/lib/cloudinary";

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {file} = req.body
        console.log(req.body)
        const timestamp = Math.round((new Date).getTime()/1000);

        // const signature = cloudinary.utils.api_sign_request({
        //     timestamp: timestamp,
        //     source: 'uw',
        //     folder: 'signed_upload_demo_uw'}, 922982469845971);
        cloudinary.uploader.unsigned_upload(file, 'j7xlhzak').then((r: any)=>{
            res.status(200).json(r)
        });
        res.status(500).json({error: 'failed to load data'})

    } catch (err) {
        res.status(500).json(err)
    }
}