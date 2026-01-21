import React from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

const App = () => {
  let items = ["Paris", "London", "American Fork", "Hauraz", "Casma"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Like size="100" color="orange"></Like>
    </>
  );
};

export default App;
