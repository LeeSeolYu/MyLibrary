import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

export default function SignupForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);

      alert("회원가입에 성공했습니다.");
      navigate("/");
    } catch (error: any) {
      alert(error?.code);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!value?.match(validRegex)) {
        setError("이메일 형식이 올바르지 않습니다");
      } else {
        setError("");
      }
    }
    if (name === "password") {
      setPassword(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }
    if (name === "password__confirm") {
      setPasswordConfirm(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (value !== password) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
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
      <StyledInput
        type="password"
        name="password__confirm"
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChange={onChange}
        required
      />
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      <StyledButton
        type="submit"
        value="회원가입"
        disabled={error.length > 0}
      />
      <StyledSignupLink to="/diary/Paper5">
        계정이 이미 있다면 로그인
      </StyledSignupLink>
    </StyledForm>
  );
}
