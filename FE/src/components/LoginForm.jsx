import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

export default function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'id') {
      setId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onClick = () => {
    const textbox = {
      id: id,
      password: password,
    };

    fetch('http://localhost:8080/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(textbox),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Container className="flex flex-col w-[70vh] text-center justify-center items-center">
      <div className="flex flex-col w-[70vh] text-center justify-center items-center">
        <Input
          id="id"
          name="id"
          value={id}
          onChange={handleChange}
          placeholder="아이디를 입력해주세요"
        />
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요"
        />
        <Button onClick={onClick}>로그인</Button>
      </div>
    </Container>
  );
}
