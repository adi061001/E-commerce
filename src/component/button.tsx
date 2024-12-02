import { Button } from "@mui/material";
import React from "react";




interface PropsButton {
    text: string,
    style?: object,
    variant1?: "contained"| 'outlined'
    type?:"submit" | "button",
    Icon?:React.ReactNode
}

export default function ButtonCompo({ text, variant1, style,type ,Icon}: PropsButton) {

    // console.log(typeof variant)
    return <>
        <Button sx={{ ...style }} endIcon={Icon} variant={variant1} type={type}>{text}  </Button>

    </>
}