import React from "react";

const Message = () => {
  const name = "";
  if (name)
    return (
      <>
        <h1>Hello {name}</h1>
      </>
    );
  return <p>Loser</p>;
};

export default Message;
