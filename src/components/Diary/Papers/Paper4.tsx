import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";
import DiaryPosts from "./DiaryPosts";
import Write from "./Write";
import DiaryPostDetail from "./DiaryPostDetail";

function Paper4() {
  const navigate = useNavigate();
  const { postId } = useParams();

  const goToWritePaper = () => {
    navigate("/diary/Paper4/write");
  };

  return (
    <div>
      <Routes>
        <Route index element={<DiaryPosts />} />
        <Route path="write" element={<Write />} />
        <Route path=":postId" element={<DiaryPostDetail />} />
        <Route path="edit/:id" element={<Write />} />
      </Routes>
    </div>
  );
}

export default Paper4;
