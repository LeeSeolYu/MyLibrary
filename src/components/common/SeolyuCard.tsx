import React from "react";
import styled from "styled-components";

const SeolyuCardContainer = styled.div`
  width: 293px;
  height: 150px;
  align-items: center;
  color: #262626;
`;

const SeolyuIdleHeader = styled.div`
  width: 100%;
  height: 20px;
  background-color: rgb(211, 82, 125);
  line-height: 20px;
  font-size: 12px;
`;

const SeolyuIdleLogo = styled.div`
  float: left;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 3px;
  margin-right: 5px;
`;

const SeolyuIdleLogoIcon = styled.img`
  transform: scale(0.02);
`;

const SeolyuIdleText = styled.div`
  color: white;
`;

const HtmlTag = styled.span`
  color: dodgerblue;
`;

const SeolyuIdleSide = styled.div`
  background-color: rgb(235, 150, 177);
  width: 7.6%;
  height: 130px;
  float: left;
`;

const SeolyuIdleHTML = styled.div`
  width: 92.4%;
  height: 130px;
  float: left;
  background-color: rgb(247, 229, 232);
  font-size: 12px;
`;

const StyledSpanGreen = styled.span`
  color: green;
`;

const StyledSpanDarkMagenta = styled.span`
  color: darkmagenta;
`;

function SeolyuCard() {
  return (
    <SeolyuCardContainer>
      <SeolyuIdleHeader>
        <SeolyuIdleLogo>
          <SeolyuIdleLogoIcon src="/images/seolyucard/seolyu.png" alt="" />
        </SeolyuIdleLogo>
        <SeolyuIdleText>Seolyu_Business_Card.html</SeolyuIdleText>
      </SeolyuIdleHeader>
      <SeolyuIdleSide>
        <img src="/images/seolyucard/idle1.png" alt="" />
        <img src="/images/seolyucard/idle2.png" alt="" />
        <img src="/images/seolyucard/idle3.png" alt="" />
      </SeolyuIdleSide>
      <SeolyuIdleHTML>
        <div>
          <HtmlTag>&lt;</HtmlTag>
          <StyledSpanGreen>card</StyledSpanGreen>
          <HtmlTag>&gt;</HtmlTag>
          <br />
          &nbsp;&nbsp;&nbsp;
          <HtmlTag>&lt;</HtmlTag>
          <StyledSpanGreen>name</StyledSpanGreen>
          <HtmlTag>&gt;</HtmlTag>
          <StyledSpanDarkMagenta>Seolyu Lee</StyledSpanDarkMagenta>
          <HtmlTag>&lt;/</HtmlTag>
          <StyledSpanGreen>name</StyledSpanGreen>
          <HtmlTag>&gt;</HtmlTag>
          <br />
          &nbsp;&nbsp;&nbsp;
          <HtmlTag>&lt;</HtmlTag>
          <StyledSpanGreen>title</StyledSpanGreen>
          <HtmlTag>&gt;</HtmlTag>
          <StyledSpanDarkMagenta>Programmer</StyledSpanDarkMagenta>
          <HtmlTag>&lt;/</HtmlTag>
          <StyledSpanGreen>title</StyledSpanGreen>
          <HtmlTag>&gt;</HtmlTag>
          <br />
          &nbsp;&nbsp;&nbsp;
          <HtmlTag>&lt;</HtmlTag>
          <StyledSpanGreen>email</StyledSpanGreen>
          <HtmlTag>&gt;</HtmlTag>
          <StyledSpanDarkMagenta>leeseolyu@gmail.com</StyledSpanDarkMagenta>
          <HtmlTag>&lt;/</HtmlTag>
          <StyledSpanGreen>email</StyledSpanGreen>
          <HtmlTag>&gt;</HtmlTag>
          <br />
          <HtmlTag>&lt;/</HtmlTag>
          <StyledSpanGreen>card</StyledSpanGreen>
          <HtmlTag>&gt;</HtmlTag>
          <br />
        </div>
      </SeolyuIdleHTML>
    </SeolyuCardContainer>
  );
}

export default SeolyuCard;
