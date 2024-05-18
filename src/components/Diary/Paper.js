import { useEffect, useState } from "react";
import styles from "./Paper.module.css";
import Paper1 from "./Papers/Paper1";
import Paper2 from "./Papers/Paper2";
import Paper3 from "./Papers/Paper3";
import Paper4 from "./Papers/Paper4";
import Login from "./Papers/Login";
import Signup from "./Papers/Signup";
import MyPage from "./Papers/MyPage";
import { app } from "../../firebaseApp";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DiaryCover from "./Papers/DiaryCover";

function Paper({ selectedPaper, isAuthenticated, check, projectDescription }) {
  const navigate = useNavigate();
  const onSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      alert("로그아웃 되었습니다");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const Papers = {
    Paper1: <Paper1 />,
    Paper2: <Paper2 projectDescription={projectDescription} />,
    Paper3: <Paper3 />,
    Paper4: <Paper4 />,
    Paper5: check && !isAuthenticated ? <Login /> : <MyPage />,
    Paper6:
      check && !isAuthenticated ? (
        <Signup />
      ) : (
        <div onClick={onSignOut}>로그아웃</div>
      ),
  };

  const [paperComponent, setPaperComponent] = useState(null);

  useEffect(() => {
    setPaperComponent(Papers[selectedPaper] || <DiaryCover />);
  }, [selectedPaper]);

  return <StyledPaper>{paperComponent}</StyledPaper>;
}

export default Paper;

const StyledPaper = styled.div`
  position: relative;
  grid-area: Paper;
  background-color: var(--seolyu-mylibrary-paper);
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
