import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #ff69b4;
  }
`;

const StyledButton = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ff69b4;
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #ff1493;
  }
`;

const StyledErrorMessage = styled.div`
  color: #ff1493;
  font-size: 14px;
  margin-top: 10px;
`;

const StyledSignupLink = styled(Link)`
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  color: #ff69b4;
  text-decoration: none;

  &:hover {
    color: red;
  }
`;

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);

      alert("로그인에 성공했습니다.");
      navigate("/");
    } catch (error: any) {
      setError(error?.code);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        type="email"
        name="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={onChange}
        required
      />
      <StyledInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={onChange}
        required
      />
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      <StyledButton type="submit" value="로그인" />
      <StyledSignupLink to="/diary/Paper6">
        계정이 없으면 회원가입
      </StyledSignupLink>
    </StyledForm>
  );
}
