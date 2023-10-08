import React from "react";
import "./index.css";

const TodoCard = (props) => {
  const { todoItem } = props;
  const { name, details } = todoItem;
  return (
    <div className="TodoCard-container" style="background-color:Gray">
      <h3 className="heading">{name}</h3>
      <p className="para">{details}</p>
    </div>
  );
};
export default TodoCard;
