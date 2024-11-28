import { Button } from "@mui/material";
import React from "react";




interface PropsButton {
    text: string,
    style?: object,
    variant1?: "contained"| 'outlined'
    type?:"submit" 
}

export default function ButtonCompo({ text, variant1, style,type }: PropsButton) {

    // console.log(typeof variant)
    return <>
        <Button sx={{ ...style }} variant={variant1} type={type}>{text} </Button>

    </>
}