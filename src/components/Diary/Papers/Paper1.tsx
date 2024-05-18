import React from "react";
import styles from "./Paper1.module.css";
import styled from "styled-components";
import SeolyuCard from "../../common/SeolyuCard";

function Paper1() {
  return (
    <Paper1Container>
      <SeolyuCard />
    </Paper1Container>
  );
}

export default Paper1;

const Paper1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
