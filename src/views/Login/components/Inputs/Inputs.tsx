import { InputsContainer } from './inputs.style'
import { Input } from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import { useContext } from 'react'
import { LoginContext } from '../../context/login.context'

function Inputs() {

    const { dataLoginForm, handleData } = useContext(LoginContext)

    return (
      <InputsContainer>
          <Input type="text" label="User" name="user" value={dataLoginForm.user} onChange={(e)=>handleData(e)} min={3} max={50}/>
          <Input type="password" label="Password" name="password" value={dataLoginForm.password} onChange={(e)=>handleData(e)} min={8} max={50}/>
          <Button type="submit" >Login</Button>
      </InputsContainer>
    )
}

export default Inputs