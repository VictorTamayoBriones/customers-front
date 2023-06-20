import { ILoginDataForm } from "@/models/login.model"
import React from "react"

interface LoginState {
    dataLoginForm: ILoginDataForm,
    handleData: (e:React.ChangeEvent<HTMLInputElement>) => void
    handleLoginSubmit: (e:React.FormEvent<HTMLFormElement>)=>void
}

export const LoginContext = React.createContext( {} as LoginState )