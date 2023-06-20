import { LoginContainer, LoginForm } from "./login.style"
import { LoginProvider } from "./context/login.provider"
import { Inputs, LoginHeader, UserCircle } from "./components"


function Login() {
  return (
    <LoginContainer>
      <LoginProvider>
        <LoginForm>
          <LoginHeader/>
          <UserCircle/>
          <Inputs/>
        </LoginForm>
      </LoginProvider>
    </LoginContainer>
  )
}

export default Login