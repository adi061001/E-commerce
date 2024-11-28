import React from "react"
import PrimarySearchAppBar from "../component/Navbar"
import { Box, Typography } from "@mui/material"
import styled from "styled-components"

const BoxFirst = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 12px;
  border-bottom: 1px solid #8080807d;
`


const SectionFirst=styled(Box)`
  position: relative;
  top: 73px;
  
`

export const HomeScreen = () => {
  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <SectionFirst>
        <BoxFirst >
          <Box>
            <Typography variant="subtitle1" >Mobile</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Electronics</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Fashion</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Furniture</Typography>
          </Box>
        </BoxFirst>
        </SectionFirst>
    </>
  )
}
