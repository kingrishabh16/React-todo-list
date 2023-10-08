import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ReactModel = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [details, setDetails] = useState("");
  const taskInput = (event) => {
    const { name, value } = event.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDetails(value);
    }
  };
  const handleSave = () => {
    let taskObj = {};
    taskObj["name"] = taskName;
    taskObj["details"] = details;
    save(taskObj);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={taskInput}
                name="taskName"
              ></input>
            </div>
            <div className="form-group">
              <label>Task Details</label>
              <textarea
                rows="5"
                className="form-control"
                value={details}
                onChange={taskInput}
                name="details"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Click to Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ReactModel;
