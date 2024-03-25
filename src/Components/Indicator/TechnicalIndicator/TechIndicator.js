import { useEffect, useState } from "react";
import GraphBar from "../Graph/GraphBar";
import "./TechIndicator.css";
import { GoInfo } from "react-icons/go";
import { getWeightedAvg } from "../../Utils";

export default function TechIndicator(props) {
  const {
    data: { name, tags, indicators },
    durationTag,
  } = props;
  const [pointerPosition, setPointerPosition] = useState(0);
  const [overflow, setOverflow] = useState(true);

  useEffect(() => {
    if (tags && tags.length && tags[durationTag]) {
      const { bearish, neutral, bullish } = tags[durationTag];
      let num = getWeightedAvg(bearish, neutral, bullish);
      setPointerPosition(num);
    } else {
      let num = Math.floor((Math.random() - 0.5) * 7);
      setPointerPosition(num);
    }
  }, [props, durationTag]);

  return (
    <div className="indicator-container">
      <div className="info-bar">
        <p>{name}</p>
        <GoInfo className="icon" />
      </div>
      <div className="graph-bar">
        <GraphBar indicator={name} pointerPosition={pointerPosition} />
      </div>
      <div
        className="tag-bar"
        style={{ visibility: `${tags && tags.length ? "visible" : "hidden"}` }}
      >
        {tags && tags.length && tags[durationTag] && (
          <>
            <div className="tag">
              <p className="tag-value">{tags[durationTag].bearish}</p>
              <div
                className="tag-title"
                style={{ background: "#ffcccc", color: "#660000" }}
              >
                Bearish
              </div>
            </div>
            <div className="tag">
              <p className="tag-value">{tags[durationTag].neutral}</p>
              <div
                className="tag-title"
                style={{ background: "lightgrey", color: "grey" }}
              >
                Neutral
              </div>
            </div>
            <div className="tag">
              <p className="tag-value">{tags[durationTag].bullish}</p>
              <div
                className="tag-title"
                style={{ background: "#87CEFA", color: "#4169E1" }}
              >
                Bullish
              </div>
            </div>
          </>
        )}
      </div>
      {(name === "summary" || name === "Support & Resistence") && (
        <div className="indicators-bar">
          {indicators &&
            indicators.length &&
            indicators[durationTag] &&
            indicators[durationTag].map((indicator, i) => {
              const { value, name } = indicator;
              return (
                <div className="indicator" key={i}>
                  <p className="indicator-value">{value}</p>
                  <p className="indicator-title">{name}</p>
                </div>
              );
            })}
        </div>
      )}
      {(name === "Moving averages" || name === "oscillators") && (
        <div
          className="indicators-bar dropdown-bar"
          style={{ overflowY: `${overflow ? "hidden" : "visible"}` }}
        >
          {indicators &&
            indicators.length &&
            indicators[durationTag] &&
            indicators[durationTag].map((indicator, i) => {
              const { value, name, tag } = indicator;
              return (
                <div className="indicator dropdown-indicator" key={i}>
                  <p className="dropdown-tag dropdown">
                    <p>{tag}</p>
                  </p>
                  <p className="indicator-value dropdown">{value}</p>
                  <p className="indicator-title dropdown">{name}</p>
                </div>
              );
            })}
        </div>
      )}
      {(name === "Moving averages" || name === "oscillators") && (
        <div className="view-btn" onClick={() => setOverflow((prev) => !prev)}>
          View Details
        </div>
      )}
    </div>
  );
}
