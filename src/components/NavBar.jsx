import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components'

const Container =styled.div` 
    height: 150px;
    //background-color: black;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;  
 `;

 const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 margin-bottom:100px;
 height: 50px;
 //background-color: black;
`;
const Language=styled.span`
font-size: 14px;
cursor: pointer;
`;

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input=styled.input`
    border: none;
`;

const Center=styled.div`
flex:1;
text-align:left;
height: 150px;
`;

const Logo=styled.h1`
    font-weight: bold;
`;

const Right=styled.div`
felx:1;
display:flex;
align-items:center;
justify-content:flex-end;
margin-bottom:100px;
height: 50px;
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
`;
const Image = styled.img`
  height: 120px;
  width: 150px;
  
`;

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <SearchIcon style={{color:"gray",fontsize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo><Image src="https://api.logo.com/api/v2/images?format=webp&logo=logo_ecc7501d-5796-43b7-8fa9-0a71589e3e68&width=2000&quality=100&background=transparent&fit=contain&u=1667583878" ></Image></Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>

            </Right>
        </Wrapper>
      {/* Navbar */}
    </Container>
  )
}

export default NavBar;
