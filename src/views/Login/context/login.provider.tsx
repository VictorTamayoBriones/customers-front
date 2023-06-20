import React, { useState } from "react"
import { LoginContext } from "./login.context"
import { ILoginDataForm } from "@/models/login.model"

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const LoginProvider = ({ children }:Props)=>{

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

    const handleLoginSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log('first')
    }

    return(
        <LoginContext.Provider value={{dataLoginForm, handleData, handleLoginSubmit}} >
            {children}
        </LoginContext.Provider>
    )
}