import React from "react"

export interface InputProps{
    type: 'text' | 'password',
    value: string,
    name: string
    label: string,
    min: number,
    max: number
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}