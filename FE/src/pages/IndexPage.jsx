import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageWrapper = styled.div`
height: 93vh;
  width: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLink = styled(Link)`
  width: 100%; /* 부모 요소의 너비에 맞추기 위해 추가 */
  margin-bottom: 10px;
  text-decoration: none;
  display: flex;
  justify-content: center; /* 링크 내부 콘텐츠를 중앙으로 정렬 */
`;

const Button = styled.button`
  font-size: 1.5rem; /* 3xl 대신 rem 단위 사용 */
  width: 100%; /* 부모 요소의 너비에 맞추기 위해 100% 사용 */
  max-width: 70vh; /* 최대 너비 설정 */
  padding: 10px 20px;
  border: none;
  background-color: #03c75a;
  color: white;
  cursor: pointer;
  box-sizing: border-box;
`;

export default function IndexPage() {
  return (
    <div className="flex overflow-hidden h-[93vh] justify-center items-center ">
        <PageWrapper>
      <StyledLink to="/login">
        <Button>로그인</Button>
      </StyledLink>
      <StyledLink to="/register">
        <Button>회원가입</Button>
      </StyledLink>
    </PageWrapper>
    </div>

  );

    
}
