import { TextField } from "@mui/material"
import React, { ChangeEvent } from "react"
// import { text } from "stream/consumers"

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
      const {name,value} = event.target
      emailid(name,value)
    }
  }

  return (
    <>
      <TextField
        type={type}
        label={label}
        name={name}
        sx={{ ...style }}
        variant={variant}
        onChange={(event) => emailValueLogin(event)}
      
        
        
      />
    </>
  )
}

// import React, { useEffect, useState } from "react"
// import PrimarySearchAppBar from ".././Layout/navbar/Navbar"
// import { Box, Card, Typography } from "@mui/material"
// import styled from "styled-components"
// import "./Homescreen.css"
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
// import ButtonCompo from ".././component/button"
// import imgproduct from "../image/31TP3LhGyVL._SX300_SY300_QL70_FMwebp_.jpg"

// import Cards from ".././component/Cards/Cards"
// import { productDet } from "../Dto/dataType"
// import { productDeatialsfirst } from "../Dto/dataType"




// const SectionFirst = styled(Box)`
//   position: relative;
//   top: 73px;
// `
// const BoxFirst = styled(Box)`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   margin-top: 12px;
//   border-bottom: 1px solid #8080807d;
// `
// const HomeSection = styled(Box)`
//   margin-top: 12px;
//   height: 100vh;
//   width: 100%;
//   position: relative;
// `

// const Cardtitle = styled(Typography)`
//   font-style: italic;
//   margin: 0px 0px 0px 0px;
//   font-family: revert;
//   border: 1px solid;
//   width: 125px;
//   border-right: 12px solid #009ead;
// `




// let productDeatials= 
// {



// Phone:[
//   {
//     productid: 1,
//     productName: "Imoratal 101",
//     prductCat: "Phone",
//     productRating: 2.4,
//     productImg: imgproduct,
//     productPrice: 345.1,
//   },

//   {
//     productid: 1,
//     productName: "Imoratal 101",
//     prductCat: "Phone",
//     productRating: 3.5,
//     productImg: imgproduct,
//     productPrice: 345.1,
//   },
//   {
//     productid: 1,
//     productName: "Imoratal 101",
//     prductCat: "Phone",
//     productRating: 4.5,
//     productImg: imgproduct,
//     productPrice: 32.892,
//   },],
//   Electronics:[
//     {
//       productid: 1,
//       productName: "Imoratal 101",
//       prductCat: "Phone",
//       productRating: 2.4,
//       productImg: imgproduct,
//       productPrice: 345.1,
//     },
  
//     {
//       productid: 1,
//       productName: "Imoratal 101",
//       prductCat: "Phone",
//       productRating: 3.5,
//       productImg: imgproduct,
//       productPrice: 345.1,
//     },
//     {
//       productid: 1,
//       productName: "Imoratal 101",
//       prductCat: "Phone",
//       productRating: 4.5,
//       productImg: imgproduct,
//       productPrice: 32.892,
//     },


//   ]

//  }

//  function AP(){
//   let a=Object.entries(productDeatials)
//   a.map((value )=>{
//     value.map((value:any)=>console.log(value))
//   })
  
 
//  }


// export const HomeScreen = () => {
//   return (
//     <>
//       <PrimarySearchAppBar></PrimarySearchAppBar>
//       <SectionFirst>
//         <BoxFirst>
//           <Typography
//             variant="subtitle1"
//             sx={{ fontFamily: "cursive", fontStyle: "italic" }}
//           >
//             Mobile
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{ fontFamily: "cursive", fontStyle: "italic" }}
//           >
//             Electronics
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{ fontFamily: "cursive", fontStyle: "italic" }}
//           >
//             Fashion
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{ fontFamily: "cursive", fontStyle: "italic" }}
//           >
//             Furntiures
//           </Typography>
//         </BoxFirst>
//       </SectionFirst>
//       <HomeSection>
//         <Box className="backHomeImg">
//           <Box
//             sx={{
//               position: "absolute",
//               top: "30%",
//               left: "166px",
//               width: "30%",
//             }}
//           >
//             <Typography
//               data-aos="fade-down"
//               variant={"h4"}
//               style={{
//                 margin: 4,
//                 fontFamily: "Edu AU VIC WA NT Arrows ,cursive",
//                 fontSize: "55px",
//               }}
//             >
//               Tip /Mart
//             </Typography>

//             <Typography variant="subtitle1" sx={{ mt: 4, fontStyle: "italic" }}>
//               The beggiest Sale of Top brand is only in Tip/Mart which provide
//               you the best qulatiy of top brands and perfect product which you
//               need
//             </Typography>
//             <Typography variant="inherit" sx={{ mt: 1, fontStyle: "italic" }}>
//               Add to cart with Tip / Mart
//             </Typography>

//             <ButtonCompo
//               style={{ mt: 4, bgcolor: "#009eaf" }}
//               variant1="contained"
//               type="button"
//               text="Shop Now "
//               icon={<ShoppingBagIcon />}
//             ></ButtonCompo>
//           </Box>
//         </Box>
//       </HomeSection>
//       <Cardtitle variant="h5" sx={{ ml: 5, mb: 2 }}>
//         Electronics
//       </Cardtitle>
//       <Box
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,flexWrap:"wrap   "}}
//       >
//         {/* {productDeatials.filter((value:productDe)) => {
//           return (
//             <Cards
//               prductName={value.productName}
//               productImg={value.productImg}
//               productRateing={value.productRating}
//               productPrice={value.productPrice}
//             />
//           )
//         })} */}
//       </Box>
// <button onClick={AP}>click me</button>
//     </>
//   )
// }
