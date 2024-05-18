import React from "react";
import styles from "./Signup.module.css";
import styled from "styled-components";
import SignupForm from "../../common/SignupForm";

function Signup() {
  return (
    <SignupFormWrapper>
      <SignupForm />
    </SignupFormWrapper>
  );
}

export default Signup;

const SignupFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
`;
