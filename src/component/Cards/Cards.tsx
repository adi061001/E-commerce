import { Box, Rating, Typography } from '@mui/material'
import React from 'react'
import './cards.css'
import prodImg from '../../image/headphones-audio-listen.jpg'
import styled from 'styled-components'
import ButtonCompo from '../button'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

let CardProduct = styled(Box)`
  height: 326px;
  margin-left: 40px;
  position: relative;
  border: 1px solid black;
  width: 242px;
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

const Cardtitle=styled(Typography)`
  
  font-style: italic;
    margin: 0px 0px 0px 0px;
    font-family: revert;
    border: 1px solid;
    width: 125px;
    border-right: 12px solid #009ead;
  

`
export default function Cards () {
  return (
    <>
      <Box component={'section'} sx={{ mb: 8 }}>
        <Cardtitle variant='h5' sx={{ml:5,mb:2}}>
          Electronics
          </Cardtitle>
        
        <CardProduct>
          <Rating
            name='half-rating-read'
            defaultValue={2.7}
            precision={0.5}
            readOnly
          />
          <CardProductImage src={prodImg} />
          <CardProdDetails>
            <CardProdName variant='h6'>Immortal 311 </CardProdName>
            <Typography sx={{ fontSize: '11px' }} variant='subtitle1'>
              Shiped 3-4 days
            </Typography>
            <CardProdPrice>$34.55</CardProdPrice>

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
