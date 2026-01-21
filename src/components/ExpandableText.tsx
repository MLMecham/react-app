import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  maxLength?: number;
}

const ExpandableText = ({ children = "you forgot", maxLength = 30 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };
  return (
    <>
      <div>
        <p style={{ display: "inline", margin: 0 }}>
          {!isExpanded
            ? children?.toString().slice(0, maxLength) + "..."
            : children}
        </p>
        <button style={{ marginLeft: "5px" }} onClick={handleClick}>
          {!isExpanded ? "More" : "Less"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
