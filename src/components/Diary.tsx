import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styles from "./Diary.module.css";
import PostIts from "./Diary/PostIts";
import InnerDiary from "./Diary/InnerDiary";

interface DiaryProps {
  isAuthenticated: boolean;
  check: boolean;
}

function Diary({ isAuthenticated, check }: DiaryProps) {
  const navigate = useNavigate();
  const { selectedPaper } = useParams();

  const handlePostItClick = (PaperNum: string) => {
    navigate(`/diary/${PaperNum}`);
  };

  return (
    <div className={styles.Diary}>
      <InnerDiary
        selectedPaper={selectedPaper ?? ""}
        isAuthenticated={isAuthenticated}
        check={check}
      />
      <PostIts
        handlePostItClick={handlePostItClick}
        isAuthenticated={isAuthenticated}
        check={check}
      />
    </div>
  );
}

export default Diary;
