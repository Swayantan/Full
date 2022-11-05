import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from "styled-components";

const Container1 = styled.div`

`;

const Container2 = styled.div`
background: linear-gradient(
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)
),
url("https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/07/photojoiner-photo-1-1532336719.jpeg")
  center;
`;

const Home = () => {
  return (
    <Container1 >
      <Announcement/>
      <NavBar/>
      <Container2>
        <Slider/> 
        <Categories/>
        <Products/>
      </Container2>
      
      <Newsletter/>
      <Footer/>
    </Container1>
  )
}

export default Home
