import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "../../../../prisma/generated/client";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {undefined} from "zod";

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if (session) {
        try {
            const body = req.body
            delete body.id;
            const result = await prisma.user.update({
                data: body,
                where: { username: body.username }
            }).finally(async () => {
                await prisma.$disconnect()
            })
            res.status(200).json({result})
        } catch (err) {
            console.log(err)
            res.status(500).json({error: 'failed to load data'})
        }
    } else {
        res.status(401).json({error: 'not sign in'})
    }

}