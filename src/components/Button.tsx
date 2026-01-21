import React, { ReactNode } from "react";
import { useState } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  const [isClicked, setClicked] = useState(false);
  return (
    <>
      {isClicked && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setClicked(false);
            }}
          ></button>
        </div>
      )}
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => {
          onClick();
          setClicked(true);
        }}
      >
        {children}
      </button>
      {}
    </>
  );
};

export default Button;
