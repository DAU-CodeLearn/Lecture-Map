import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useAuth } from "../AuthContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 최소 높이를 100vh로 설정하여 화면을 꽉 채움 */
  padding: 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vh;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 23px;
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
  letter-spacing: 2px;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const { login } = useAuth();
  const onClick = () => {
    const textbox = {
      id: id,
      password: password,
    };
    fetch("http://localhost:8080/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(textbox),
    })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return null;
      }
    })
      .then((data) => {
        if(data != null) {  
          alert("로그인 성공");
          login(data.token); // 로그인 처리
          //console.log(data);
          navigate("/HadanCampusMap");
        }
        else {
          alert("ID 혹은 패스워드를 확인해주세요.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex overflow-hidden h-[93vh] justify-center items-center flex-col">
      <Container>
        <FormWrapper>
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
        </FormWrapper>
      </Container>
    </div>
  );
}
