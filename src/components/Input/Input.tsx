import { InputProps } from "@/models/input.model"
import { InputContainer } from "./input.style"

export const Input = ({ label, name, type, value, min, max,onChange }:InputProps) =>{
    return(
        <InputContainer>
            <input maxLength={max} minLength={min} type={type} name={name} value={value} onChange={(e)=>onChange(e)} required />
            <label>{label}</label>
        </InputContainer>
    )
}