import { useEffect, useState } from "react";
import TechIndicator from "../Indicator/TechnicalIndicator/TechIndicator";
import Navbar from "../Navbar/Navbar";
import "./Main.css";
export default function Main() {
  const [summaryData, setSummaryData] = useState({});
  const [supportAndResistenceData, setSupportAndResistenceData] = useState({});
  const [movingAveragesData, setMovingAveragesData] = useState({});
  const [oscillatorsData, setOscillatorsData] = useState({});

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
      <Navbar />
      <div className="main-grid-container">
        <TechIndicator data={summaryData} />
        <TechIndicator data={supportAndResistenceData} />
        <TechIndicator data={movingAveragesData} />
        <TechIndicator data={oscillatorsData} />
      </div>
    </div>
  );
}
