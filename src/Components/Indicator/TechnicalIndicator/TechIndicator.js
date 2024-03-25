import { useEffect, useState } from "react";
import GraphBar from "../Graph/GraphBar";
import "./TechIndicator.css";
import { GoInfo } from "react-icons/go";

export default function TechIndicator(props) {
  const { name, tags, indicators } = props.data;
  return (
    <div className="indicator-container">
      <div className="info-bar">
        <p>{name}</p>
        <GoInfo className="icon" />
      </div>
      <div className="graph-bar">
        <GraphBar />
      </div>
      <div
        className="tag-bar"
        style={{ visibility: `${tags && tags.length ? "visible" : "hidden"}` }}
      >
        {tags && tags.length && tags[0] && (
          <>
            <div className="tag">
              <p className="tag-value">{tags[0].bearish}</p>
              <div className="tag-title">Bearish</div>
            </div>
            <div className="tag">
              <p className="tag-value">{tags[0].neutral}</p>
              <div className="tag-title">Neutral</div>
            </div>
            <div className="tag">
              <p className="tag-value">{tags[0].bullish}</p>
              <div className="tag-title">Bullish</div>
            </div>
          </>
        )}
      </div>

      <div className="indicators-bar">
        {indicators &&
          indicators.length &&
          indicators[0] &&
          indicators[0].map((indicator, i) => {
            const { value, name } = indicator;
            return (
              <div className="indicator">
                <p className="indicator-value">{value}</p>
                <p className="indicator-title">{name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
