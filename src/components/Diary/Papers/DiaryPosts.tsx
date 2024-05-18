import AuthContext from "../../context/AuthContext";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseApp";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/Button";

type TabType = "all" | "my";

export interface PostProps {
  id?: string;
  title: string;
  email: string;
  content: string;
  createdAt: string;
  undatedAt?: string;
  uid: string;
}

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function DiaryPosts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const getDiaryPosts = async () => {
    const datas = await getDocs(collection(db, "posts"));

    const postArray: PostProps[] = [];
    datas.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id } as PostProps;
      postArray.push(dataObj);
    });

    setPosts(postArray);
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?");
    if (confirm && id) {
      await deleteDoc(doc(db, "posts", id));

      alert("게시글을 삭제했습니다.");
      getDiaryPosts();
    }
  };

  useEffect(() => {
    getDiaryPosts();
  }, []);

  const goToWritePaper = () => {
    navigate("/diary/Paper4/write");
  };

  return (
    <PostsContainer>
      <ButtonContainer>
        <Button onClick={goToWritePaper}>글쓰기</Button>
      </ButtonContainer>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post-item">
            <Link to={`/diary/Paper4/${post.id}`}>
              <div className="post-title">{post.title}</div>
              <div className="post-date">{post.createdAt}</div>
              <div className="post-content">{post.content}</div>
            </Link>
            {post.uid === user?.uid && (
              <ButtonContainers>
                <LinkButton to={`/diary/Paper4/edit/${post.id}`}>
                  수정
                </LinkButton>
                <Button onClick={() => post.id && handleDelete(post.id)}>
                  삭제
                </Button>
              </ButtonContainers>
            )}
          </div>
        ))
      ) : (
        <ButtonContainer>게시글 없음</ButtonContainer>
      )}
    </PostsContainer>
  );
}

const ButtonContainer = styled.div`
  margin: 30px 20px 10px 10px;
  display: flex;
  justify-content: right;
`;

const ButtonContainers = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
`;

const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => (
  <Button>
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      {children}
    </Link>
  </Button>
);

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: auto;
  overflow-y: auto;
  height: 80vh;

  .write-button {
    margin: 10px;
  }

  .post-item {
    background-color: lightblue;
    padding: 15px;
    margin: 10px 20px;
    border-radius: 10px;
    border: 1mm dashed lightblue;
    background-clip: padding-box;
    border-radius: 4px;
    padding: 8px;

    a {
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration: none;
      }
    }

    .post-title {
      font-size: 20px;
      margin-bottom: 5px;
    }

    .post-date {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }

    .post-content {
      margin-bottom: 10px;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: orange;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    // background: pink;
  }
`;
