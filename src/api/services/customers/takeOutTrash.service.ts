import { API_BASE_URL } from "@/api/config";
import { CUSTOMERS_ROUTES } from "../routes";
import axios from 'axios';

export const takeOutTrahs  = async (id: string) =>{
    const res = await axios.post(`${API_BASE_URL}${CUSTOMERS_ROUTES.base}/deleted/${id}`)
    return res
};