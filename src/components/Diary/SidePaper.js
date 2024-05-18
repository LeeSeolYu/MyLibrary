import { useEffect, useState } from "react";
import styles from "./SidePaper.module.css";
import DiaryCoverSide from "./SidePapers/DiaryCoverSide";
import SidePaper1 from "./SidePapers/SidePaper1";
import SidePaper2 from "./SidePapers/SidePaper2";
import SidePaper3 from "./SidePapers/SidePaper3";
import SidePaper4 from "./SidePapers/SidePaper4";
import SidePaper5 from "./SidePapers/SidePaper5";
import SidePaper6 from "./SidePapers/SidePaper6";

function SidePaper({ selectedPaper, onProjectClick }) {
  const Papers = {
    Paper1: <SidePaper1 />,
    Paper2: <SidePaper2 onProjectClick={onProjectClick} />,
    Paper3: <SidePaper3 />,
    Paper4: <SidePaper4 />,
    Paper5: <SidePaper5 />,
    Paper6: <SidePaper6 />,
  };

  const [paperComponent, setPaperComponent] = useState(null);

  useEffect(() => {
    setPaperComponent(Papers[selectedPaper] || <DiaryCoverSide />);
  }, [selectedPaper]);

  return <div className={styles.SidePaper}>{paperComponent}</div>;
}

export default SidePaper;
