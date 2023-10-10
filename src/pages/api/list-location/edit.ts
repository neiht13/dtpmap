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
        const body = req.body
        const id = body.id;
        delete body.id;
        const result = await prisma.listLocation.update({
            data: body,
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