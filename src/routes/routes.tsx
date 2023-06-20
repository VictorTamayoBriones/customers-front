import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/models/routes.model"
import { Customers, Login } from "@/views"
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Navigate to={PUBLIC_ROUTES.LOGIN} />} />
            <Route path={PUBLIC_ROUTES.LOGIN} element={<Login/>} />
            <Route path={PRIVATE_ROUTES.CUSTOMERS} element={<Customers/>} />
        </Routes>
    )
}