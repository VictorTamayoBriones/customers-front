import { LoginContainer } from "./login.style"
import { LoginProvider } from "./context/login.provider"
import FormLogin from "./components/FormLogin/FormLogin"


function Login() {

  return (
    <LoginContainer>
      <LoginProvider>
        <FormLogin/>
      </LoginProvider>
    </LoginContainer>
  )
}

export default Login