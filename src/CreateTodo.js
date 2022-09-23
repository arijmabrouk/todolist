import React from "react";

const CreateTodo = (props) => {
  const { todo, setTodo, list, setList } = props;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    setList([...list, todo]);
    setTodo("");
    console.log(list);
  };
  return (
    <div>
      <h5> Add a New Todo</h5>
      <textarea
        value={todo}
        rows="4"
        cols="50"
        onChange={handleChange}
      ></textarea>
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default CreateTodo;
