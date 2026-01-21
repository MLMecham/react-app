import React from "react";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  size?: string;
  color?: string;
}

const Like = ({ size = "100", color = "black" }: Props) => {
  const [isLiked, setLiked] = useState(false);
  return (
    <>
      <button
        style={{
          all: "unset", // remove all default button styles
          cursor: "pointer", // so it still feels clickable
          display: "inline-block",
        }}
        onClick={() => {
          setLiked(!isLiked);
        }}
      >
        {isLiked ? (
          <AiFillHeart size={size} color={color}></AiFillHeart>
        ) : (
          <CiHeart size={size} color={color}></CiHeart>
        )}
      </button>
    </>
  );
};

export default Like;
