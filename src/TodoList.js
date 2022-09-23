import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { list } = props;
  const [value, setValue] = useState(true);
  const handleClick = () => {
    setValue(!value);
    console.log(value);
  };
  return (
    <div>
      {list.map((item) => {
        console.log(item);
        // <TodoItem item={item} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default TodoList;
