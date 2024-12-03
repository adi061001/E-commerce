
import React from "react";

import Login from "./Screen/Login/LoginPage";
import { Routes,Route } from "react-router-dom";

import Signup from "./Screen/Signup/Signup";

import { HomeScreen } from "./HomePage/HomeScreen";
import { Box } from "@mui/material";





export  default function App(){




  
  return<>
  <Box sx={{position:"relative",}}>


 <HomeScreen/>


 </Box>


 <Routes>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/Signup" element={<Signup/>}></Route>
</Routes> 


</>
}