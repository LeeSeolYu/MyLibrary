import AuthContext from "../../context/AuthContext";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebaseApp";
import React, { useContext } from "react";
import styled from "styled-components";

const MyPageContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const UserInfo = styled.div`
  font-size: 18px;
  color: #333;
  text-align: center;
`;

function MyPage() {
  const { user } = useContext(AuthContext);

  const profilePictureUrl = process.env.PUBLIC_URL + "/images/profile.png";

  return (
    <MyPageContainer>
      <ProfilePicture src={profilePictureUrl} alt="Profile" />
      <UserInfo>{user?.email}</UserInfo>
    </MyPageContainer>
  );
}

export default MyPage;
