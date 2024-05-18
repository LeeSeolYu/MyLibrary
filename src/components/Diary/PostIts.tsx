import React, { useState } from "react";
import styles from "./PostIts.module.css";
import { app } from "../../firebaseApp";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface PostItsProps {
  handlePostItClick: (paperId: string) => void;
  isAuthenticated: boolean;
  check: boolean;
}

function PostIts({ handlePostItClick, isAuthenticated, check }: PostItsProps) {
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

  return (
    <div className={styles.PostIts}>
      <div
        className={`${styles.PostIt} ${styles.PostIt1}`}
        onClick={() => handlePostItClick("Paper1")}
      >
        <div className={`${styles.Index} ${styles.Index1}`}>About Me</div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.PostIt2}`}
        onClick={() => handlePostItClick("Paper2")}
      >
        <div className={`${styles.Index} ${styles.Index2}`}>Coding</div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.PostIt3}`}
        onClick={() => handlePostItClick("Paper3")}
      >
        <div className={`${styles.Index} ${styles.Index3}`}>Artworks</div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.PostIt4}`}
        onClick={() => handlePostItClick("Paper4")}
      >
        <div className={`${styles.Index} ${styles.Index4}`}>Contact</div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.LoginLogout}`}
        onClick={() => handlePostItClick("Paper5")}
      >
        <div className={`${styles.Index} ${styles.Index5}`}>
          {check && !isAuthenticated ? <>Login</> : <>My Page</>}
        </div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.MyPage}`}
        onClick={() => handlePostItClick("Paper6")}
      >
        <div className={`${styles.Index} ${styles.Index6}`}>
          {check && !isAuthenticated ? (
            <>Signup</>
          ) : (
            <div onClick={onSignOut}>Logout</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostIts;
