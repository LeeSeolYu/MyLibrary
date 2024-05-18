import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PostProps } from "./DiaryPosts";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseApp";
import AuthContext from "../../context/AuthContext";
import styled from "styled-components";
import Button from "../../common/Button";

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function DiaryPostDetail() {
  const [post, setPost] = useState<PostProps | null>(null);
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      setPost({ id: docSnap.id, ...(docSnap.data() as PostProps) });
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("해당 게시글을 삭제하시겠습니까?");
    if (confirmDelete && post && post.id) {
      await deleteDoc(doc(db, "posts", post.id));
      alert("게시글을 삭제했습니다");
      navigate("/diary/Paper4");
    }
  };

  useEffect(() => {
    if (params?.postId) getPost(params?.postId);
  }, [params?.postId]);

  return (
    <PostContainer>
      {post ? (
        <>
          <div className="post-title">{post?.title}</div>
          <div className="post-email">{post?.email}</div>
          <div className="post-date">{post?.createdAt}</div>
          <div className="post-content">{post?.content}</div>
          {post?.email === user?.email && (
            <ButtonContainers>
              <LinkButton to={`/diary/Paper4/edit/${post.id}`}>수정</LinkButton>
              <Button onClick={handleDelete}>삭제</Button>
            </ButtonContainers>
          )}
        </>
      ) : (
        <div>로딩중</div>
      )}
    </PostContainer>
  );
}

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

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: auto;
  padding: 20px;
  margin-top: 30%;
  background-color: lightblue;
  border-radius: 10px;
  border: 1mm dashed lightblue;
  background-clip: padding-box;
  border-radius: 4px;

  .post-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .post-email {
    font-size: 16px;
    color: #666;
  }

  .post-date {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }

  .post-content {
    margin-bottom: 20px;
  }
`;
