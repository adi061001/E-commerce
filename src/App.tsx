
import React, { useState } from "react";
import { HomeScreen
  
 } from "./Screen/HomePage/HomeScreen";
import Login from "./Screen/Login/LoginPage";
import { Routes,Route, Router } from "react-router-dom";





export  default function App(){
let [isValue,setisValue]=useState<Boolean>()


function getvalue(){

}

  
  return<>
<HomeScreen isvalue={getvalue}/>
<Routes>
  <Route path="/Login" element={<Login/>}></Route>
</Routes>

  




     
  </>
}