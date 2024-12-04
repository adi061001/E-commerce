import { Box, Rating, Typography } from '@mui/material'
import React from 'react'
import './cards.css'

import styled from 'styled-components'
import ButtonCompo from '../button'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'


let CardProduct = styled(Box)`
  height: 326px;
  margin-left: 40px;
  position: relative;

  width: 242px;
  box-shadow: 0px 3px 15px 0px black;

  padding: 13px;
`
let CardProdDetails = styled(Box)`
  position: relative;
  top: 53%;
`

const CardProdName = styled(Typography)`
  font-size: 17px;
  font-family: system-ui;
  font-style: italic;
`
const CardProdPrice = styled(Typography)`
  color: brown;
  margin-top: 8px;
  font-weight: 600;
`

const CardProductImage = styled.img`
  width: 148px;
  height: 175px;
  position: absolute;
  z-index: -1;
  left: 62px;
  top: 32px;
`



interface cardProps{
 prductName:string
 productImg:string
 productRateing:number
 productPrice:number
}




export default function Cards ({prductName ,productImg,productRateing,productPrice}:cardProps) {
  return (
    <>
      <Box component={'section'} sx={{ mb: 8 }}>
       
        
        <CardProduct>
          <Rating
            name='half-rating-read'
            defaultValue={5}
            precision={productRateing}
            readOnly
          />
          
          <CardProductImage src={productImg} />
          <CardProdDetails>
            <CardProdName variant='h6'>{prductName} </CardProdName>
            <Typography sx={{ fontSize: '11px' }} variant='subtitle1'>
              Shiped 3-4 days
            </Typography>
            <CardProdPrice>${productPrice}</CardProdPrice>

            <Box sx={{ mt: 2 }}>
              <ButtonCompo
                type='button'
                variant1='contained'
                text={`Add  Cart`}
                icon={<ShoppingCartIcon />}
                style={{ background: '#009eae' }}
              ></ButtonCompo>

              <ButtonCompo
                text='Buy'
                variant1='contained'
                type='button'
                style={{ ml: 2, background: '#009eae' }}
                icon={<ShoppingBagIcon />}
              />
            </Box>
          </CardProdDetails>
        </CardProduct>
      </Box>
    </>
  )
}
