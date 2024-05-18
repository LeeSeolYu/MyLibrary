import React, { createContext, useContext, useState, ReactNode } from "react";

type AboutmeType = {
  name: string;
  logo: string;
  description: string;
  details: {
    name: string;
    description: string;
  }[];
  creationPeriod: string;
  role: string;
  pageLink: string;
  category: "aboutme";
};

type AboutmeContextType = {
  aboutmes: AboutmeType[];
  selectedAboutme: AboutmeType | null;
  setSelectedAboutme: (aboutme: AboutmeType | null) => void;
};

const aboutmeData: AboutmeType[] = [
  {
    name: "이력서",
    logo: process.env.PUBLIC_URL + "/images/aboutme/gitportfolio.png",
    description: "이력서",
    details: [
      {
        name: "이력서",
        description: "이력서",
      },
      {
        name: "이력서",
        description: "이력서",
      },
    ],
    creationPeriod: "2023년 1월 - 2023년 3월",
    role: "디자인",
    pageLink: "https://LeeSeolYu.github.io",
    category: "aboutme",
  },
  {
    name: "이력서",
    logo: process.env.PUBLIC_URL + "/images/aboutme/notionportfolio.png",
    description: "이력서",
    details: [
      {
        name: "이력서",
        description: "이력서",
      },
      {
        name: "이력서",
        description: "이력서",
      },
    ],
    creationPeriod: "2023년 1월 - 2023년 3월",
    role: "디자인",
    pageLink:
      "https://cobalt-yam-d8c.notion.site/Hello-I-m-Lee-Seolyu-ff934faf51a746bba58471b7c5b6fcf8",
    category: "aboutme",
  },
  {
    name: "이력서",
    logo: process.env.PUBLIC_URL + "/images/aboutme/helloportfolio.png",
    description: "이력서",
    details: [
      {
        name: "이력서",
        description: "이력서",
      },
      {
        name: "이력서",
        description: "이력서",
      },
    ],
    creationPeriod: "2023년 1월 - 2023년 3월",
    role: "디자인",
    pageLink: "https://LeeSeolYu.github.io/portfolio",
    category: "aboutme",
  },
];

const AboutmeContext = createContext<AboutmeContextType | undefined>(undefined);

export const AboutmeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedAboutme, setSelectedAboutme] = useState<AboutmeType | null>(
    null
  );

  return (
    <AboutmeContext.Provider
      value={{
        aboutmes: aboutmeData,
        selectedAboutme,
        setSelectedAboutme,
      }}
    >
      {children}
    </AboutmeContext.Provider>
  );
};

export const useAboutmes = (): AboutmeContextType => {
  const context = useContext(AboutmeContext);
  if (context === undefined) {
    throw new Error("useAboutmes must be used within an AboutmeProvider");
  }
  return context;
};
