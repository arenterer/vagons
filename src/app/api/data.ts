import { sql } from '@vercel/postgres';
import {NextApiRequest, NextApiResponse} from "next";

export default function getAllCatalog(req: NextApiRequest,res:NextApiResponse){
    res.json({hello:'hello!', method: req.method});
}