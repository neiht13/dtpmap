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
        const result = await prisma.listLocation.create({
            data: {
                "stt": "999",
                "name3": "Tòa nhà",
                "name1": "VNPT Đồng Tháp",
                "name2": "83 Nguyễn Huệ",
                "lat": "10.4565318",
                "long": "105.6359815",
                "FPT": "1",
                "SCTV": "1",
                "VTVCab": "1",
                "VMS": "1",
                "FPT_2": "1",
                "SCTV_2": "1",
                "VTVCab_2": "1",
                "VMS_2": "1",
            }
        }).finally(async () => {
            await prisma.$disconnect()
        })
        res.status(200).json({result})
    } catch (err) {
        res.status(500).json({error: 'failed to load data'})
    }
}