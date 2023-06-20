import { API_BASE_URL } from "@/api/config";
import { CUSTOMERS_ROUTES } from "../routes";
import axios from 'axios';
import { ICustomerFormdata } from "@/models/customersForm.model";

export const updateCustomer  = async (data: ICustomerFormdata, id:string) =>{
    const res = await axios.patch(`${API_BASE_URL}${CUSTOMERS_ROUTES.base}/${id}`,data)
    return res
};