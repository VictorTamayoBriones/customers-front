import axios from "axios"
import { API_BASE_URL } from "../config"
import { ILoginDataForm } from "@/models/login.model"
import { USERS_ROUTES } from "./routes"
import { IUser } from "@/models/user.model"

export const authUser  = async (dataUser: ILoginDataForm) =>{
    const res = await axios.post(`${API_BASE_URL}${USERS_ROUTES.auth}`, {
        user: dataUser.user,
        password: dataUser.password
    })

    if(res.data[0]){
        const currentUser:IUser = res.data[0];    
        return currentUser;
    }
    if(res.data.message){
        alert(res.data.message)
    }
}