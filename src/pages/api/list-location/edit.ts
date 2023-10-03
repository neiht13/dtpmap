import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "../../../../prisma/generated/client";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
        res.status(401).json({error: 'not sign in'})
    }
    try {
        const {
            id,
            stt,
            name1,
            name2,
            name3,
            lat,
            long,
            FPT,
            SCTV,
            VTVCab,
            VMS
        } = req.body
        const result = await prisma.listLocation.update({
            data: {
                stt,
                name1,
                name2,
                name3,
                lat,
                long,
                FPT,
                SCTV,
                VTVCab,
                VMS
            },
            where: { id }
        }).finally(async () => {
            await prisma.$disconnect()
        })
        res.status(200).json({result})
    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'failed to load data'})
    }
}