import { InputsContainer } from './inputs.style'
import { Input } from '@/components/Input/Input'
import Button from '@/components/Button/Button'

function Inputs() {
  return (
    <InputsContainer>
        <Input type="text" label="User" name="user" value="" onChange={(e)=>{console.log(e)}} min={3} max={50}/>
        <Input type="password" label="Password" name="password" value="" onChange={(e)=>{console.log(e)}} min={8} max={50}/>
        <Button>Login</Button>
    </InputsContainer>
  )
}

export default Inputs