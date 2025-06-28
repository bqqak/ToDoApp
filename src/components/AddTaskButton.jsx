import { useState } from "react";

function AddTaskButton({ addTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState("");

  function addNewWindow() {
    setIsOpen(!isOpen);
  }

  function getNewToDo(e) {
  
    setTask(e.target.value);
  }

  function addNewToDo() {
    if (task.trim()) {
        
     addTask(task); 
      setTask(""); 

    }
  }

  return (
    <div className="mr-20">
      {isOpen && (
        <div className="bg-gray-200 rounded-2xl w-60 h-55 absolute right-50 top-25 flex flex-col ">
          <p className="pl-5 pt-3 pb-3 font-bold">Add New To Do</p>
          <div className="bg-white rounded-xl w-50 h-25 ml-5">
            <textarea
              value={task}
              onChange={getNewToDo}
              placeholder="Your text"
              className="ml-3 mt-2 w-45 h-22 focus:outline-none"
            />
          </div>
          <button
            className="bg-black text-white  w-15 rounded-3xl pt-2 pb-2 mt-3 ml-5"
            onClick={addNewToDo}
          >
            Add
          </button>
        </div>
      )}
      <button
        className="text-3xl bg-black text-white w-12 h-12 rounded-3xl"
        onClick={addNewWindow}
      >
        +
      </button>
    </div>
  );
}

export default AddTaskButton;