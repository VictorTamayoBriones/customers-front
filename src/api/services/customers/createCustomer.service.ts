import { API_BASE_URL } from "@/api/config";
import { CUSTOMERS_ROUTES } from "../routes";
import axios from 'axios';
import { ICustomerFormdata } from "@/models/customersForm.model";

export const createCustomer  = async (data: ICustomerFormdata) =>{
    const res = await axios.post(`${API_BASE_URL}${CUSTOMERS_ROUTES.base}`,data)
    return res
};