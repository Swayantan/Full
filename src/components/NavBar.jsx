import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import {Link} from 'react-router-dom';

const Container =styled.div` 
    height: 150px;
    //background-color: black;
    ${mobile({height: "50px"})}
    }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  ${mobile({ padding: "10px 0px" })}
 `;

 const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 margin-bottom:100px;
 height: 50px;
 //background-color: black;
 ${mobile({})}
`;
const Language=styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input=styled.input`
    border: block;
    ${mobile({width: "50px"})}
`;

const Center=styled.div`
flex:1;
text-align:left;
height: 150px;
`;

const Logo=styled.h1`
    font-weight: bold;
    // height:20px;
    // width:10px;
    ${mobile({ height:"24px",width:"30px"})}
`;

const Right=styled.div`
felx:1;
display:flex;
align-items:center;
justify-content:flex-end;
margin-bottom:100px;
height: 50px;
${mobile({flex:2, justifyContent:"center"})}
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
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
                    <Input placeholder='Search'/>
                    <SearchIcon style={{color:"gray",fontsize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo><Link to="/"><Image src="https://api.logo.com/api/v2/images?format=webp&logo=logo_ecc7501d-5796-43b7-8fa9-0a71589e3e68&width=2000&quality=100&background=transparent&fit=contain&u=1667583878" ></Image></Link></Logo></Center>
            <Right>
                <MenuItem>
                    <Link to="/register">Register</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/login">Login</Link>
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={2} color="primary">
                    <Link to="/cart">

                    <ShoppingCartOutlinedIcon/>
                    </Link>
                    </Badge>
                </MenuItem>

            </Right>
        </Wrapper>
      {/* Navbar */}
    </Container>
  )
}

export default NavBar;
