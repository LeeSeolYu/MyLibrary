import React from "react";
import styled from "styled-components";

type TechStackProps = {
  techStack: string[];
  category: "coding" | "artworks";
};

const TechStackContainer = styled.div`
  display: flex;
  width: 460px;
  overflow: hidden;
`;

const TechStackScroll = styled.div`
  display: flex;
  animation: scroll 40s linear infinite;
  height: 7vh;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const TechStackImage = styled.img`
  margin: 10px;
  height: 40px;
`;

const TechStack: React.FC<TechStackProps> = ({ techStack, category }) => {
  return (
    <TechStackContainer>
      <TechStackScroll>
        {[...Array(20)].map(() =>
          techStack.map((tech, index) => (
            <TechStackImage
              key={`${tech}-${index}`}
              src={
                process.env.PUBLIC_URL + `/images/${category}/tools/${tech}.png`
              }
              alt={tech}
            />
          ))
        )}
      </TechStackScroll>
    </TechStackContainer>
  );
};

export default TechStack;
