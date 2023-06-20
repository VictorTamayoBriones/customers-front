import React from "react"

export interface InputProps{
    type: 'text' | 'password' | 'number',
    value: string | number,
    name: string
    label: string,
    min: number,
    max: number
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}