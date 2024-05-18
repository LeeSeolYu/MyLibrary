import React, { useContext, useEffect, useState } from "react";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseApp";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PostProps } from "../Papers/DiaryPosts";
import Button from "../../common/Button";
import Input from "../../common/Input";
import Textarea from "../../common/Textarea";
import styled from "styled-components";

function Write() {
  const params = useParams();
  const [post, setPost] = useState<PostProps | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (post && post.id) {
        const postRef = doc(db, "posts", post?.id);
        await updateDoc(postRef, {
          title: title,
          content: content,
          updatedAt: new Date()?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        });

        alert("게시글을 수정했습니다.");
        navigate(`/diary/Paper4/${post.id}`);
      } else {
        await addDoc(collection(db, "posts"), {
          title: title,
          content: content,
          createdAt: new Date()?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          email: user?.email,
          uid: user?.uid,
        });

        alert("게시글을 생성했습니다.");
        navigate("/diary/Paper4");
      }
    } catch (e: any) {
      console.log(e);
      alert(e?.code);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e;

    if (name === "title") {
      setTitle(value);
    }
    if (name === "content") {
      setContent(value);
    }
  };

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      setPost({ id: docSnap.id, ...(docSnap.data() as PostProps) });
    }
  };

  useEffect(() => {
    if (params?.id) getPost(params?.id);
  }, [params?.id]);

  useEffect(() => {
    if (post && user)
      if (post.uid === user.uid) {
        setTitle(post?.title);
        setContent(post?.content);
      } else {
        navigate("/diary/Paper4");
        alert("접근 불가능한 페이지 입니다.");
      }
  }, [navigate, post, user]);

  return (
    <StyledWrite>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={onChange}
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <Textarea
            name="content"
            id="content"
            required
            onChange={onChange}
            value={content}
          />
        </div>
        <div className="submit-button">
          <Button type="submit" Emoji>
            {post ? "수정" : "제출"}
          </Button>
        </div>
      </form>
    </StyledWrite>
  );
}

export default Write;

const StyledWrite = styled.div`
  max-width: 500px;
  margin: auto;
  margin-top: 30%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: pink;
  }

  .form-group {
    margin-bottom: 10px;
  }

  .submit-button {
    text-align: right;
  }
`;
