import React from "react";

const TodoItem = (props) => {
  const { item, handleClick } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <input type="checkbox" onClick={handleClick}></input>
      <h1>{item}</h1>
    </div>
  );
};

export default TodoItem;
