import React, { useState } from "react";
import styled from "styled-components";
import { useProjects } from "../../context/ProjectContext";
import TechStack from "../../common/TechStack";

const PaperContainer = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ProfilePic = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0px 25px;
  border: 3px solid transparent;
  cursor: pointer;
  &:hover {
    border: 3px solid pink;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectName = styled.h2`
  margin: 0;
  font-size: 1.2em;
`;

const Description = styled.div`
  font-size: 0.8em;
`;

const Divider = styled.hr`
  border-top: 1px solid #ccc;
  margin: 10px 0;
`;

const ScreenshotSection = styled.div`
  display: flex;
  align-items: center;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 50%;
  height: 55vh;
`;

const Screenshot = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: transparent;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;

  &:hover {
    color: pink;
  }

  &.left {
    left: 1px;
  }

  &.right {
    right: 1px;
  }
`;

const ScreenshotDescription = styled.div`
  width: 50%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h3 {
    margin: 0;
    margin-top: -30px;
    margin-bottom: 30px;
  }

  p {
    margin: 0;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Paper2() {
  const { selectedProject } = useProjects();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (selectedProject && selectedProject.items) {
      setCurrentSlide((prev) => (prev + 1) % selectedProject.items.length);
    }
  };

  const prevSlide = () => {
    if (selectedProject && selectedProject.items) {
      setCurrentSlide((prev) =>
        prev === 0 ? selectedProject.items.length - 1 : prev - 1
      );
    }
  };

  const renderDescription = (text) => {
    return text.split("\n").map((item, key) => {
      return (
        <span key={key}>
          {item}
          <br />
        </span>
      );
    });
  };

  const handleProfileClick = () => {
    if (selectedProject && selectedProject.githubLink) {
      window.open(selectedProject.githubLink, "_blank");
    }
  };

  return (
    <PaperContainer>
      {selectedProject ? (
        <>
          <Header>
            <ProfilePic
              src={selectedProject.logo}
              alt={selectedProject.name}
              onClick={handleProfileClick}
            />
            <ProjectInfo>
              <ProjectName>{selectedProject.name}</ProjectName>
              <Description>{selectedProject.description}</Description>
            </ProjectInfo>
          </Header>
          <Divider />
          <ScreenshotSection>
            <CarouselContainer>
              <CarouselButton className="left" onClick={prevSlide}>
                &lt;
              </CarouselButton>
              <Screenshot
                src={selectedProject.items[currentSlide].screenshot}
                alt="Project Screenshot"
              />
              <CarouselButton className="right" onClick={nextSlide}>
                &gt;
              </CarouselButton>
            </CarouselContainer>
            <ScreenshotDescription>
              <h3>{selectedProject.items[currentSlide].detail.name}</h3>
              <p>
                {renderDescription(
                  selectedProject.items[currentSlide].detail.description
                )}
              </p>
            </ScreenshotDescription>
          </ScreenshotSection>
          <TechStackContainer>
            <TechStack
              techStack={selectedProject.techStack}
              category={selectedProject.category}
            />
          </TechStackContainer>
        </>
      ) : (
        <TextContainer>프로젝트를 선택해주세요</TextContainer>
      )}
    </PaperContainer>
  );
}

export default Paper2;
