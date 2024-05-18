import React from "react";
import styled from "styled-components";
import profileImage from "../../../assets/profile.png";

const DiaryCoverSideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.div`
  border: 1mm dashed var(--seolyu-mylibrary-pink-opacity);
  border-radius: 5px;
  background: url(${profileImage}) no-repeat center center/contain;
  width: 80%;
  padding-bottom: 80%;
`;

const ProfileDesc = styled.div`
  margin-top: 20px;
`;

function DiaryCoverSide() {
  return (
    <DiaryCoverSideContainer>
      <DiaryCoverSideContainer>
        <Profile>
          <ProfileImg></ProfileImg>
          <ProfileDesc>안녕하세요</ProfileDesc>
        </Profile>
      </DiaryCoverSideContainer>
    </DiaryCoverSideContainer>
  );
}

export default DiaryCoverSide;
