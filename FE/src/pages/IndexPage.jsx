import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../assets/Loginlogo.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #38bdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-[16pt];
  color: white;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageWrapper = styled.div`
  width: 25vw; 
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: 100%;
  margin-bottom: 40px; 
  text-decoration: none;
  display: flex;
  justify-content: center;

  &:last-child {
    margin-bottom: 0; 
  }
`;

const Button = styled.button`
  font-size: 2rem; 
  width: 100%; 
  padding: 20px 40px; 
  border: none;
  background-color: #03c75a;
  color: white;
  cursor: pointer;
  letter-spacing: 2px;
  box-sizing: border-box;
`;

export default function IndexPage() {
  return (
    <Container>
      <Header>
        <Link to="/" className="flex items-center h-full" style={{ marginLeft: '-2rem' }}>
          <img src={logo} alt="로고" className="h-3/5" />
        </Link>
      </Header>
      <MainContent>
        <PageWrapper>
          <StyledLink to="/login">
            <Button>로그인</Button>
          </StyledLink>
          <StyledLink to="/register">
            <Button>회원가입</Button>
          </StyledLink>
        </PageWrapper>
      </MainContent>
    </Container>
  );
}
