import React, { createContext, useContext, useState, ReactNode } from "react";

type ArtworkType = {
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
  tools: string[];
  creationPeriod: string;
  role: string;
  sourceLink: string;
  saleLink: string;
  category: "artworks";
};

type ArtworkContextType = {
  artworks: ArtworkType[];
  selectedArtwork: ArtworkType | null;
  setSelectedArtwork: (artwork: ArtworkType | null) => void;
};

const artworkData: ArtworkType[] = [
  {
    name: "끼끼의 사회생활",
    logo: process.env.PUBLIC_URL + "/images/artworks/kiki/kiki_logo.png",
    description: "끼끼의 회사에서의 하루를 담은 스티커",
    items: [
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/모음.png",
        detail: {
          name: "라인 이모티콘 등재",
          description: "끼끼 캐릭터가 사용된 라인 이모티콘 시리즈",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/01출근중.png",
        detail: {
          name: "WAY TO WORK",
          description: "출근 중",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/02다와가요.png",
        detail: {
          name: "HURRY UP",
          description: "다와가요",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/03안녕하세요.png",
        detail: {
          name: "HELLO",
          description: "안녕하세요",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/04업무중.png",
        detail: {
          name: "WORKING",
          description: "업무 중",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/05넵.png",
        detail: {
          name: "YEP!",
          description: "넵",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/06화이팅.png",
        detail: {
          name: "GOOD LUCK!",
          description: "화이팅",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/07잘했어요.png",
        detail: {
          name: "EXCELLENT!",
          description: "잘했어요",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/08회의중.png",
        detail: {
          name: "MEETING",
          description: "회의 중",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/09밥먹고해요.png",
        detail: {
          name: "LUNCH TIME",
          description: "밥 먹고 해요",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/10커피마실분.png",
        detail: {
          name: "COFFEE TIME",
          description: "커피 마실 분",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/11좀쉴까요.png",
        detail: {
          name: "BREAK TIME",
          description: "좀 쉴까요",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/12휴식중.png",
        detail: {
          name: ":)",
          description: "휴식 중",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/13감사합니다.png",
        detail: {
          name: "THANK YOU!",
          description: "감사합니다",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/14잠시만요.png",
        detail: {
          name: "PLEASE WAIT",
          description: "잠시만요",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/15충격.png",
        detail: {
          name: "ㅇㅅㅇ",
          description: "충격",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/16완료.png",
        detail: {
          name: "DONE!",
          description: "완료",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/17죄송합니다.png",
        detail: {
          name: "SORRY",
          description: "죄송합니다",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/18슬픔.png",
        detail: {
          name: "ㅠㅠ",
          description: "슬픔",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/19화.png",
        detail: {
          name: "🔥",
          description: "화",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/20고생하셨습니다.png",
        detail: {
          name: "TAKE IT EASY",
          description: "고생하셨습니다",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/21웃음.png",
        detail: {
          name: "HA HA HA",
          description: "웃음",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/22하트.png",
        detail: {
          name: "🩷",
          description: "하트",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/23축하.png",
        detail: {
          name: "🎉",
          description: "축하",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/24월급.png",
        detail: {
          name: "SALARY",
          description: "월급",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/25안녕히계세요.png",
        detail: {
          name: "GOOD BYE",
          description: "안녕히계세요",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/26야근.png",
        detail: {
          name: "WORK OVERTIME",
          description: "야근",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/27몸져누움.png",
        detail: {
          name: "😵",
          description: "몸져누움",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/28업무메세지.png",
        detail: {
          name: "📲",
          description: "업무메시지",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/29과로.png",
        detail: {
          name: "..",
          description: "과로",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/30퇴사하고싶다.png",
        detail: {
          name: "I WANNA QUIT THE JOB",
          description: "퇴사하고 싶다",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/31사직서.png",
        detail: {
          name: "RESIGNATION",
          description: "사직서",
        },
      },
      {
        screenshot:
          process.env.PUBLIC_URL +
          "/images/artworks/kiki/kikissociallife/32퇴사.png",
        detail: {
          name: "I'M FREE",
          description: "퇴사",
        },
      },
    ],
    tools: ["illustrator", "photoshop"],
    creationPeriod: "..",
    role: "디자인",
    sourceLink: "..",
    saleLink: "https://store.line.me/stickershop/product/14659001/ko",
    category: "artworks",
  },
];

const ArtworkContext = createContext<ArtworkContextType | undefined>(undefined);

export const ArtworkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkType | null>(
    null
  );

  return (
    <ArtworkContext.Provider
      value={{
        artworks: artworkData,
        selectedArtwork,
        setSelectedArtwork,
      }}
    >
      {children}
    </ArtworkContext.Provider>
  );
};

export const useArtworks = (): ArtworkContextType => {
  const context = useContext(ArtworkContext);
  if (context === undefined) {
    throw new Error("useArtworks must be used within an ArtworkProvider");
  }
  return context;
};
