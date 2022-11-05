import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Contain =styled.div``;

const Container = styled.div`
background: linear-gradient(
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)
),
url("https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/07/photojoiner-photo-1-1532336719.jpeg")
  center;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Contain>
      <NavBar/>
    <Container>
      
      <Announcement />
      <Title>Plants</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Types
            </Option>
            <Option>Bonsai</Option>
            <Option>Herbs</Option>
            <Option>Shrubs</Option>
            <Option>Flowering Plants</Option>
            <Option>Creepers</Option>
            <Option>Cactus</Option>
            <Option>Trees</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Seed</Option>
            <Option>Sapling</Option>
            <Option>Grown</Option>
            <Option>Hybrids</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
    </Contain>
  );
};

export default ProductList;