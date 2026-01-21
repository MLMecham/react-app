import React from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

const App = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.";
  return (
    <>
      <Like size="100" color="orange"></Like>
      <ExpandableText>{text}</ExpandableText>
    </>
  );
};

export default App;
