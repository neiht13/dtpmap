import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await prisma.user.create({
            data: {
                username: 'naux',
                name: "Naux",
                email: 'thein@gmail.com',
                password: "123",
                role: 'user',
                department: 'tpcl',
                status: false
            },
        }).finally(async () => {
            await prisma.$disconnect()
        })
        res.status(200).json({result})
    } catch (err) {
        res.status(500).json({error: 'failed to load data'})
    }
}