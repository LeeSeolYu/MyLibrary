import React, { useState } from "react";
import styles from "./InnerDiary.module.css";
import SidePaper from "./SidePaper";
import Rings from "./Rings";
import Paper from "./Paper";
import { Outlet } from "react-router-dom";

interface InnerDiaryProps {
  selectedPaper: string;
  isAuthenticated: boolean;
  check: boolean;
}

function InnerDiary({
  selectedPaper,
  isAuthenticated,
  check,
}: InnerDiaryProps) {
  const [projectDescription, setProjectDescription] = useState("");

  const handleProjectClick = (description: string) => {
    setProjectDescription(description);
  };

  return (
    <div className={styles.InnerDiary}>
      <SidePaper
        selectedPaper={selectedPaper}
        onProjectClick={handleProjectClick}
      />
      <Rings />
      <Paper
        selectedPaper={selectedPaper}
        isAuthenticated={isAuthenticated}
        check={check}
        projectDescription={projectDescription}
      />
    </div>
  );
}

export default InnerDiary;
