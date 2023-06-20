import { API_BASE_URL } from "@/api/config";
import { CUSTOMERS_ROUTES } from "../routes";
import axios from 'axios';

export const getCustomers  = async () =>{
    const res = await axios.get(`${API_BASE_URL}${CUSTOMERS_ROUTES.base}`)
    return res
};