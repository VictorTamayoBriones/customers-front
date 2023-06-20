import { API_BASE_URL } from "@/api/config";
import { CUSTOMERS_ROUTES } from "../routes";
import axios from 'axios';

export const deleteCustomer  = async (id: string) =>{
    const res = await axios.delete(`${API_BASE_URL}${CUSTOMERS_ROUTES.base}/${id}`)
    return res
};