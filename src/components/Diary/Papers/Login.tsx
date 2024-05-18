import React from "react";
import styles from "./Login.module.css";
import styled from "styled-components";
import LoginForm from "../../common/LoginForm";

function Login() {
  return (
    <LoginFormWrapper>
      <LoginForm />
    </LoginFormWrapper>
  );
}

export default Login;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
`;
