import { ICustomer } from "@/models/customer.models";
import { ICustomerForm, ICustomerFormdata } from "@/models/customersForm.model";
import React from "react";

interface CustomersState{
    formIsVisible: boolean
    formConfig: ICustomerForm,
    formCustomerData: ICustomerFormdata,
    handleDataForm: (e:React.ChangeEvent<HTMLInputElement>)=>void
    handleSubmit: (e:React.FormEvent<HTMLFormElement>)=>void,
    handleFormVisible: (value: boolean) => void,
    handleFormConfig: (config: ICustomerForm)=>void,
    customersList: ICustomer[]
}

export const CustomerContext = React.createContext({} as CustomersState);