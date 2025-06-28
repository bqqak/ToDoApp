import { useState } from "react";
import TabButton from "./TabButton";
import AddTaskButton from "../AddTaskButton";
import TabContent from "./TabContent";

function FilterTabs() {
  const labels = ["To Do", "Done", "Trash"];
  const [activeTab, setActiveTab] = useState("");
  const [tasks, setTasks] = useState([]);
  const [trashTasks, setTrashTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([])
  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const markAsDone = (taskToMark) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToMark.id));
    setDoneTasks((prevDoneTasks) => [...prevDoneTasks, taskToMark]);
  };
  const removeTask = (taskToRemove) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToRemove.id));
    setTrashTasks((prevTrashTasks) => [...prevTrashTasks, taskToRemove]);
  };

  const restoreTask = (taskToRestore) => {
    setTrashTasks((prevTrashTasks) => prevTrashTasks.filter((task) => task.id !== taskToRestore.id));
    setTasks((prevTasks) => [...prevTasks, taskToRestore]);
  };

  const deleteForever = (taskToDelete) => {
    setTrashTasks((prevTrashTasks) => prevTrashTasks.filter((task) => task.id !== taskToDelete.id));
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-12 ml-15">
          {labels.map((label) => (
            <TabButton
              key={label}
              label={label}
              onClick={() => handleTabClick(label)}
            />
          ))}
        </div>

        <div>
          <AddTaskButton addTask={addTask} />
        </div>
      </div>
      <TabContent
        activeTab={activeTab}
        tasks={tasks}
        trashTasks={trashTasks}
        removeTask={removeTask}
        restoreTask={restoreTask}
        deleteForever={deleteForever}
        markAsDone={markAsDone}
      />
    </div>
  );
}

export default FilterTabs;