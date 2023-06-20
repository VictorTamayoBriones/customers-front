import { useContext } from "react"
import { Inputs, LoginHeader, UserCircle } from ".."
import { LoginForm } from "./formLogin.style"
import { LoginContext } from "../../context/login.context"

function FormLogin() {

    const { handleLoginSubmit } = useContext(LoginContext);

  return (
    <LoginForm onSubmit={(e)=>handleLoginSubmit(e)} >
        <LoginHeader/>
        <UserCircle/>
        <Inputs/>
    </LoginForm>
  )
}

export default FormLogin