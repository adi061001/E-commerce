import React from "react";
import PrimarySearchAppBar from ".././Layout/navbar/Navbar";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import "./Homescreen.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ButtonCompo from ".././component/button";



import Cards from ".././component/Cards/Cards";


const SectionFirst = styled(Box)`
  position: relative;
  top: 73px;
`;
const BoxFirst = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 12px;
  border-bottom: 1px solid #8080807d;
`;
const HomeSection = styled(Box)`
  margin-top: 12px;
  height: 100vh;
  width: 100%;
  position: relative;
`;





export const HomeScreen = () => {
 

 
  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <SectionFirst>
        <BoxFirst>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "cursive", fontStyle: "italic" }}
          >
            Mobile
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "cursive", fontStyle: "italic" }}
          >
            Electronics
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "cursive", fontStyle: "italic" }}
          >
            Fashion
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "cursive", fontStyle: "italic" }}
          >
            Furntiures
          </Typography>
        </BoxFirst>
      </SectionFirst>
      <HomeSection>
        <Box className="backHomeImg">
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              left: "166px",
              width: "30%",
            }}
          >
            <Typography
              data-aos="fade-down"
              variant={"h4"}
              style={{
                margin: 4,
                fontFamily: "Edu AU VIC WA NT Arrows ,cursive",
                fontSize: "55px",
              }}
            >
              Tip /Mart
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 4, fontStyle: "italic" }}>
              The beggiest Sale of Top brand is only in Tip/Mart which provide
              you the best qulatiy of top brands and perfect product which you
              need
            </Typography>
            <Typography variant="inherit" sx={{ mt: 1, fontStyle: "italic" }}>
              Add to cart with Tip / Mart
            </Typography>

            <ButtonCompo
              style={{ mt: 4, bgcolor: "#009eaf" }}
              variant1="contained"
              type="button"
              text="Shop Now "
              icon={<ShoppingBagIcon />}
            ></ButtonCompo>
          </Box>
        </Box>
      </HomeSection>

      
      <Cards/>
      



     
    </>
  );
};
