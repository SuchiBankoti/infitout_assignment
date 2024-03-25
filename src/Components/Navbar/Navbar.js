import { useState } from "react";
import "./Navbar.css";
import { BiSolidColor } from "react-icons/bi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoIosArrowRoundUp } from "react-icons/io";

export default function Navbar(props) {
  const { handleDuration } = props;
  const [activeTag, setActiveTag] = useState(null);

  const handleTagClick = (index) => {
    setActiveTag(index === activeTag ? null : index);
    handleDuration(index);
  };

  return (
    <div className="navbar">
      <div className="navbar-title-container">
        <div className="title">
          <BiSolidColor className="nifty-icon" />
          <div>NIFTY 50</div>
        </div>
        <div className="current-rating">
          <LiaRupeeSignSolid />
          <div>22096</div>
          <IoIosArrowRoundUp className="nifty-icon" />
          <span>(0.00%)</span>
        </div>
      </div>
      <div className="duration-tags-container">
        {[5, 10, 15, 30, 60, 1440].map((duration, index) => (
          <div
            key={index}
            className={`duration-tag ${index === activeTag ? "active" : ""}`}
            onClick={() => handleTagClick(index)}
          >
            {duration < 60 && index !== activeTag && `${duration} min`}
            {duration === 60 && index !== activeTag && `hour`}
            {duration > 60 && index !== activeTag && `day`}
            {index === activeTag && duration < 60 && `${duration} Minutes`}
            {index === activeTag && duration === 60 && "1 hour"}
            {index === activeTag && duration > 60 && "1 Day"}
          </div>
        ))}
      </div>
    </div>
  );
}
