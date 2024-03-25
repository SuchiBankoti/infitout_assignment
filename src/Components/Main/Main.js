import { useEffect, useState } from "react";
import TechIndicator from "../Indicator/TechnicalIndicator/TechIndicator";
import Navbar from "../Navbar/Navbar";
import "./Main.css";
export default function Main() {
  const [summaryData, setSummaryData] = useState({});
  const [supportAndResistenceData, setSupportAndResistenceData] = useState({});
  const [movingAveragesData, setMovingAveragesData] = useState({});
  const [oscillatorsData, setOscillatorsData] = useState({});
  const [durationTag, setDurationTag] = useState(0);
  function handleDuration(index) {
    setDurationTag(index);
  }
  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((res) => {
        const { summary, supportAndResistence, movingAverages, oscillators } =
          res;
        setSummaryData(summary);
        setMovingAveragesData(movingAverages);
        setOscillatorsData(oscillators);
        setSupportAndResistenceData(supportAndResistence);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="main-container">
      <Navbar handleDuration={handleDuration} />
      <div className="main-grid-container">
        <TechIndicator data={summaryData} durationTag={durationTag} />
        <TechIndicator
          data={supportAndResistenceData}
          durationTag={durationTag}
        />
        <TechIndicator data={movingAveragesData} durationTag={durationTag} />
        <TechIndicator data={oscillatorsData} durationTag={durationTag} />
      </div>
      <div className="footer"></div>
    </div>
  );
}
