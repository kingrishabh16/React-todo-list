import React, { useEffect, useState } from "react";
import "./index.css";
import ReactModel from "../../ReactModel";
import TodoCard from "../TodoCard";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");

    if (array) {
      let obj = JSON.parse(array);
      setTaskList(obj);
    }
  }, []);

  const toggle = () => {
    setModal(!modal);
  };
  const createTodo = () => {
    setModal(true);
  };
  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };
  return (
    <>
      <div className="todo-container text-center">
        <h1 className="todo-main-heading">Create Your Todo Item </h1>
        <button className="btn btn-primary mt-2" onClick={createTodo}>
          Click to Create
        </button>
      </div>
      <div className="todo-card-container">
        {taskList.map((myTask) => (
          <TodoCard todoItem={myTask} />
        ))}
      </div>
      <ReactModel modal={modal} toggle={toggle} save={saveTask} />
    </>
  );
};
export default TodoList;
