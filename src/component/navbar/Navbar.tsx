import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Input from "../Input"
import SearchIcon from '@mui/icons-material/Search';
import "aos/dist/aos.css";
import AOS from "aos"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export default function PrimarySearchAppBar() {
  

  
  
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    AOS.init();
  }, []);


  return (
    <Box>
      <AppBar sx={{ background: "#009eaf7a"}}>
        <Toolbar
          sx={{
            color: "black",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
           data-aos="fade-down"
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
              style={{ mt: 1, width: 500,'& .css-7pxcz1-MuiInputBase-input-MuiOutlinedInput-input':{
                padding:'6px'
                
              }}}
              name="searchHome"
            /><SearchIcon sx={{position:"relative",top:"16px",right:"32px"}}></SearchIcon>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box component={"h4"} sx={{ mr: 4 }} data-aos="fade-down"  >
              Category{" "}
            </Box>
            <Box component={"h4"} sx={{ mr: 4 }} data-aos="fade-down">
              Become Seller{" "}
            </Box>
            <Box component={"h4"}>
            <Link to="/Login"  >Login</Link>
            </Box>
            <Box component={"h4"}>
            <Link to="/Login"  >/SignUp</Link>
            </Box>
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
