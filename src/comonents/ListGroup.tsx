import React from "react";
import { MouseEvent } from "react";

const ListGroup = () => {
  let items = ["Paris", "London", "American Fork", "Hauraz", "Casma"];
  //   items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>no items found</p> : null} */}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className="list-group-item"
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
