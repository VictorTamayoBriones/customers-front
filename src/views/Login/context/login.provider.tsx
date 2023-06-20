import React, { useState } from "react"
import { LoginContext } from "./login.context"
import { ILoginDataForm } from "@/models/login.model"
import { authUser } from "@/api/services"
import { useDispatch } from 'react-redux';
import { saveSessionUser } from "@/redux/states/userSlice";
import { useNavigate } from "react-router-dom"
import { PRIVATE_ROUTES } from "@/models/routes.model";

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const LoginProvider = ({ children }:Props)=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [dataLoginForm, setDataLoginForm]=useState<ILoginDataForm>({
        user: '',
        password: ''
    })

    const handleData = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setDataLoginForm({
            ...dataLoginForm,
            [e.target.name]:e.target.value
        })
    }

    const handleLoginSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(dataLoginForm.user != '' && dataLoginForm.password != ''){
            await authUser(dataLoginForm)
                .then(res =>{
                    if(res?.id && res.user){
                        dispatch(saveSessionUser(res));
                        navigate(PRIVATE_ROUTES.CUSTOMERS);
                    }  
                })
                .catch(err => alert(err.response.data.message))
        }
    }

    return(
        <LoginContext.Provider value={{dataLoginForm, handleData, handleLoginSubmit}} >
            {children}
        </LoginContext.Provider>
    )
}