import { useProjects } from "../../context/ProjectContext";
import React, { useState } from "react";
import styled from "styled-components";

const SidePaperContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  overflow-y: scroll;
  height: 75vh;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: pink;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  // 기타 브라우저용 스크롤바 스타일
  scrollbar-color: purple pink; /* Firefox */
  scrollbar-width: thin; /* Firefox */

  .project {
    width: 130px;
    height: 130px;
    margin-bottom: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
  }

  img {
    width: 130px;
    object-fit: cover;
    border-radius: 10%;
    background: rgb(255, 255, 255, 0.5);
  }

  .project:hover img {
    border: 2px solid pink;
  }

  .pinkBubble {
    display: none;
    position: absolute;
    width: 100px;
    padding: 3px;
    border-radius: 8px;
    background: rgba(233, 97, 154, 0.815);
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 185px;
  }

  .pinkBubble::after {
    content: "";
    position: absolute;
    top: -11px;
    left: 50%;
    border: solid transparent;
    border-bottom-color: rgba(233, 97, 154, 0.815);
    border-width: 6px;
    margin-left: -6px;
  }

  .project:hover .pinkBubble {
    display: block;
  }
`;

function Project({ name, logo, onClick }) {
  return (
    <div className="project" onClick={onClick}>
      <img src={logo} alt={name} />
      <p className="pinkBubble">{name}</p>
    </div>
  );
}

function SidePaper2() {
  const { projects, setSelectedProject } = useProjects();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    console.log(project);
  };

  return (
    <SidePaperContainer>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          logo={project.logo}
          onClick={() => handleProjectClick(project)}
        />
      ))}
    </SidePaperContainer>
  );
}

export default SidePaper2;
