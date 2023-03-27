import { APIResponseType } from '@/types/api-response.type'
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIResponseType>
) {
    try {
        const { page } = req.query;
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        res.status(200).json({
            statusCode: 200,
            msg: 'Successfully get the users',
            response: response.data
        })
    } catch (error) {
        res.status(400)
    }
}
