import React, { useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  //   items = [];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");
  // arr[0] variable selectedIndex
  // arr[1] updater funcion

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>no items found</p> : null} */}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
