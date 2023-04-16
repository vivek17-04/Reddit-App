import React from 'react'
import { Card, styled } from '@mui/material';

const StyledCard = styled(Card)({
  '&:hover':{
    transform: 'scale(1.5)',
    bordeRadius : 0,
    height: 200
  }
})

const meme = ({ props }) => {
  return (
    <StyledCard >
      <img src={props.data.url} alt='meme' style={{height: 200}}/>
    </StyledCard>
  )
}

export default meme;