import { useState } from "react";
import "./Navbar.css";
import { BiSolidColor } from "react-icons/bi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoIosArrowRoundUp } from "react-icons/io";

export default function Navbar() {
  const [hoveredText, setHoveredText] = useState("");

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText("");
  };
  return (
    <div className="navbar">
      <div className="navbar-title-container">
        <div className="title">
          <BiSolidColor />
          <div>NIFTY 50</div>
        </div>
        <div className="current-rating">
          <LiaRupeeSignSolid />
          <div>22096</div>
          <IoIosArrowRoundUp />
          (0.00%)
        </div>
      </div>
      <div className="duration-tags-container">
        <div
          className="duration-tag"
          onMouseEnter={() => handleMouseEnter("5 Minutes")}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredText === "5 Minutes" ? "5 Minutes" : "5min"}
        </div>
        <div
          className="duration-tag"
          onMouseEnter={() => handleMouseEnter("10 Minutes")}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredText === "10 Minutes" ? "10 Minutes" : "10min"}
        </div>
        <div
          className="duration-tag"
          onMouseEnter={() => handleMouseEnter("15 Minutes")}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredText === "15 Minutes" ? "15 Minutes" : "15min"}
        </div>
        <div
          className="duration-tag"
          onMouseEnter={() => handleMouseEnter("30 Minutes")}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredText === "30 Minutes" ? "30 Minutes" : "30min"}
        </div>
        <div
          className="duration-tag"
          onMouseEnter={() => handleMouseEnter("1 Hour")}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredText === "1 Hour" ? "1 Hour" : "hour"}
        </div>
        <div
          className="duration-tag"
          onMouseEnter={() => handleMouseEnter("1 Day")}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredText === "1 Day" ? "1 Day" : "day"}
        </div>
      </div>
    </div>
  );
}
