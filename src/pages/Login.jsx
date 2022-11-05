import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/07/photojoiner-photo-1-1532336719.jpeg")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 90%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  align-items: center;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

`;

const Lnk = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Lnk>DO NOT YOU REMEMBER THE PASSWORD?</Lnk>
          <Lnk><Link to="/register">CREATE A NEW ACCOUNT</Link></Lnk>
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;