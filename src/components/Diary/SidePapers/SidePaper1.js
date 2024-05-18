import React, { useState } from "react";
import styles from "./SidePaper1.module.css";
import styled from "styled-components";
import { useAboutmes } from "../../context/AboutmeContext";

const SidePaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  overflow-y: scroll;
  height: 75vh;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: pink; /* 스크롤바 썸(움직이는 부분) 색상 */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* 스크롤바 트랙(배경) 색상 */
  }

  // 기타 브라우저용 스크롤바 스타일
  scrollbar-color: purple pink; /* Firefox */
  scrollbar-width: thin; /* Firefox */

  .aboutme a {
    margin-bottom: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  img {
    width: 60%;
    object-fit: cover;
    border-radius: 10%;
    border: 2px solid transparent;
  }

  .aboutme a:hover img {
    border: 2px solid pink; /* 호버 시 로고 이미지 테두리 설정 */
  }

  /* 툴팁 말풍선 스타일링 */
  .pinkBubble {
    display: none;
    position: absolute;
    width: 100px;
    padding: 3px;
    border-radius: 8px;
    background: rgba(233, 97, 154, 0.815);
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 100px;
  }

  .pinkBubble::after {
    content: "";
    position: absolute;
    top: -11px;
    left: 50%;
    border: solid transparent;
    border-bottom-color: rgba(233, 97, 154, 0.815);
    border-width: 6px;
    margin-left: -6px;
  }

  .aboutme a:hover .pinkBubble {
    display: block;
  }
`;

function Aboutme({ name, logo, pageLink, onClick }) {
  return (
    <div className="aboutme">
      <a href={pageLink} target="_blank" rel="pageLink noreferrer" onClick={onClick}>
        <img src={logo} alt={name} />
      </a>
      <p className="pinkBubble">{name}</p>
    </div>
  );
}

function SidePaper1() {
  const { aboutmes, setSelectedAboutme } = useAboutmes();

  const handleAboutmeClick = (aboutme) => {
    setSelectedAboutme(aboutme);
    console.log(aboutme);
  };

  return (
    <SidePaperContainer>
      {aboutmes.map((aboutme, index) => (
        <Aboutme
          key={index}
          name={aboutme.name}
          logo={aboutme.logo}
          pageLink={aboutme.pageLink}
          onClick={(event) => handleAboutmeClick(aboutme, event)}
        />
      ))}
    </SidePaperContainer>
  );
}

export default SidePaper1;
