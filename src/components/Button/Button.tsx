import { ButtonContainer } from "./button.style"

interface Props{
  children: string | JSX.Element | React.ReactNode,
  type: 'button' | 'submit'
}

function Button({children, type}:Props) {
  return (
    <ButtonContainer type={type} >
      {children}
    </ButtonContainer>
  )
}

export default Button