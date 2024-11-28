import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Input from "./Input"
import SearchIcon from '@mui/icons-material/Search';
import { BorderAll } from "@mui/icons-material"


export default function PrimarySearchAppBar() {
  return (
    <Box>
      <AppBar sx={{ background: "#ffe7a3" }}>
        <Toolbar
          sx={{
            color: "black",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant={"h4"}
            style={{
              margin: 4,
              fontFamily: "Edu AU VIC WA NT Arrows ,cursive",
              position: "relative",
              top: "10px",
              fontSize: "55px"}}>
            Tip /Mart
          </Typography>

          <Box>
            <Input
              type="search"
              label=""
              style={{ mt: 1, width: 500, BorderAll:"1px solid black",'& .css-7pxcz1-MuiInputBase-input-MuiOutlinedInput-input':{
                padding:'6px'
                
              }}}
              name="searchHome"
            /><SearchIcon sx={{position:"relative",top:"16px",right:"32px"}}></SearchIcon>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box component={"h4"} sx={{ mr: 4 }}>
              Category{" "}
            </Box>
            <Box component={"h4"} sx={{ mr: 4 }}>
              Become Seller{" "}
            </Box>
            <Box component={"h4"}>Login</Box>
            <Box component={"h4"}>/SignUp</Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
