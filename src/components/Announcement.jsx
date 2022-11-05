import React from 'react'
import styled from "styled-components"

const Container=styled.div` 
height:30px;
background-color: teal;
color: white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-width:500;
`


const Announcement = () => {
  return (
    <Container>
      Super Deal ! Free Shipping on orders over Rs.150
    </Container>
  )
}

export default Announcement
