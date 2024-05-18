import React, { createContext, useContext, useState, ReactNode } from "react";

type FeatureType = {
  name: string;
  description: string;
};

type ProjectType = {
  name: string;
  logo: string;
  description: string;
  items: {
    screenshot: string;
    detail: {
      name: string;
      description: string;
    };
  }[];
  techStack: string[];
  developmentPeriod: string;
  role: string;
  githubLink: string;
  liveDemoLink: string;
  category: "coding";
};

type ProjectContextType = {
  projects: ProjectType[];
  selectedProject: ProjectType | null;
  setSelectedProject: (project: ProjectType | null) => void;
};

const projectData: ProjectType[] = [
  {
    name: "My Library",
    logo:
      process.env.PUBLIC_URL + "/images/coding/mylibrary/mylibrary_logo.png",
    description: "포트폴리오 사이트",
    items: [
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/mylibrary/mylibrary_screenshot_1.png",
        detail: {
          name: "Interactive 3D Cube",
          description:
            "메인화면에 보여지는 큐브\n리액트의 Three.js 라이브러리 활용",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/mylibrary/mylibrary_screenshot_2.png",
        detail: {
          name: "About Me",
          description: "디지털 명함\n이력서 & 포트폴리오 링크 제공",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/mylibrary/mylibrary_screenshot_3.png",
        detail: {
          name: "Coding Projects",
          description: "토이 프로젝트 소개",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/mylibrary/mylibrary_screenshot_4.png",
        detail: {
          name: "Artworks Gallery",
          description: "디지털 예술 작품 전시",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/mylibrary/mylibrary_screenshot_5.png",
        detail: {
          name: "방명록",
          description: "로그인 회원가입 및 방명록",
        },
      },
    ],
    techStack: ["React", "TypeScript"],
    developmentPeriod: "2024년 1월 - 2024년 1월",
    role: "..",
    githubLink: "https://github.com/LeeSeolYu/MyLibrary",
    liveDemoLink: "..",
    category: "coding",
  },
  {
    name: "Puddy Puddy",
    logo:
      process.env.PUBLIC_URL + "/images/coding/puddypuddy/puddypuddy_logo.png",
    description: "반려인간을 위한 반려동물 SNS 서비스",
    items: [
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/puddypuddy/puddypuddy_screenshot_1.png",
        detail: {
          name: "메인 화면",
          description: "전체, 팔로우 최근 게시물이\n보이는 메인 화면",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/puddypuddy/puddypuddy_screenshot_2.png",
        detail: {
          name: "포스트 업로드",
          description: "사진, 내용, 해시태그\n업로드",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/puddypuddy/puddypuddy_screenshot_3.png",
        detail: {
          name: "마이페이지",
          description: "내 게시물\n좋아요 게시물",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/puddypuddy/puddypuddy_screenshot_4.png",
        detail: {
          name: "SNS 기능",
          description: "로그인, 로그아웃\n알림\n검색\n좋아요, 댓글",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/puddypuddy/puddypuddy_screenshot_5.png",
        detail: {
          name: "DarkMode",
          description: "다크모드 구현",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/coding/puddypuddy/puddypuddy_screenshot_6.png",
        detail: {
          name: "Share",
          description: "카카오 공유 기능 구현",
        },
      },
    ],
    techStack: ["React", "TypeScript"],
    developmentPeriod: "2024년 1월 - 2024년 1월",
    role: "..",
    githubLink: "https://github.com/LeeSeolYu/PuddyPuddy",
    liveDemoLink: "..",
    category: "coding",
  },
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <ProjectContext.Provider
      value={{
        projects: projectData,
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
