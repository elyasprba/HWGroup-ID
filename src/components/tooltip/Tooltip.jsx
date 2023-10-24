import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showTooltip = () => {
    setIsOpen(true);
  };

  const hideTooltip = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isOpen && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
