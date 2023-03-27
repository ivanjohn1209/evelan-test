import { APIResponseType } from "@/types/api-response.type";
import axios from "axios";

export {
    GetUsers,
};

const GetUsers = async (page: number): Promise<APIResponseType> => {
    const domain = process.env.HOST || '';
    const res = await axios.get(`${domain}api/get-users`, { params: { page } });
    return res.data;
}