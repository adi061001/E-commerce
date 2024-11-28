import { TextField } from "@mui/material"
import React, { ChangeEvent } from "react"
import { text } from "stream/consumers"

interface props {
  type: string
  label: string
  style: any
  emailid?: (name: string, value: string) => void
  name: string
  variant?: "outlined" | "standard" | "filled"
  
}

export default function Input({
  type,
  label,
  style,
  emailid,
  name,
  variant,
  
}: props) {
  const emailValueLogin = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (emailid) {
      const { name, value } = event.target
      emailid(name, value)
    }
  }

  return (
    <>
      <TextField
        type={type}
        label={label}
        name={name}
        sx={{ ...style ,'& .css-7pxcz1-MuiInputBase-input-MuiOutlinedInput-input':{
          padding:'6px'
        }}}
        variant={variant}
        onChange={(event) => emailValueLogin(event)}
      
        
        
      />
    </>
  )
}
