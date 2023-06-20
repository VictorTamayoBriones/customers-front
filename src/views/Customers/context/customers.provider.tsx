import { ICustomerForm, ICustomerFormdata } from "@/models/customersForm.model";
import { CustomerContext } from "./customers.context"
import { useState, useEffect } from 'react';
import { createCustomer } from "@/api/services/customers/createCustomer.service";
import { ICustomer } from "@/models/customer.models";
import { getCustomers } from "@/api/services/customers/getCustomers.service";
import { deleteCustomer } from '../../../api/services/customers/deleteCustomer.service';

interface Props{
    children: JSX.Element
}

export const CustomerProvider = ({children}:Props) =>{
    const [customersList, setCustomersList]=useState<ICustomer[]>([])

    const loadCustomersList = async () =>{
        const res = await getCustomers()
        setCustomersList(res.data);
    }

    const deleteCustomerByid = async(id: string)=>{
        if(confirm('Confirm you want to delete')){
            const res = await deleteCustomer(id);
            if(res.status === 200){
                loadCustomersList()
            }
        }
        
    }

    useEffect(()=>{
        loadCustomersList();
    },[])
    const [formIsVisible, setFormIsVisible]=useState<boolean>(false)
    const [formCustomerData, setFormCustomerData]=useState<ICustomerFormdata>({
        full_name: '',
        nss: 0,
        rfc: '',
        phone: 0
    });
    const [formConfig, setFormConfig]=useState<ICustomerForm>({
        action: 'create',
        title: ''
    })

    const handleFormConfig = (config: ICustomerForm) => setFormConfig(config)

    const handleDataForm = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFormCustomerData({
            ...formCustomerData,
            [e.target.name]:e.target.value
        });

    };

    const handleFormVisible = (value: boolean) => setFormIsVisible(value);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(formConfig.action === 'create'){
            const res = await createCustomer(formCustomerData)
            if(res.status === 200){
                loadCustomersList();
                setFormIsVisible(false);
                alert('Created Succesfully');
            }
        }
    }
    
    
    return(
        <CustomerContext.Provider value={{formIsVisible, formCustomerData, handleDataForm, handleSubmit, formConfig, handleFormVisible, handleFormConfig, customersList, deleteCustomerByid}} >
            {children}
        </CustomerContext.Provider>
    )
}