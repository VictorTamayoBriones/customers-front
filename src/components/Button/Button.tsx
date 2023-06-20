import { ButtonContainer } from "./button.style"

interface Props{
    children: string
}

function Button({children}:Props) {
  return (
    <ButtonContainer>
        {children}
    </ButtonContainer>
  )
}

export default Button