import { useState, useEffect } from "react";
import TabButton from "./TabButton";
import AddTaskButton from "../AddTaskButton";
import TabContent from "./TabContent";

function safeJSONParse(item) {
  try {
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error("Error parsing data from localStorage", error);
    return [];
  }
}

function FilterTabs() {
  const labels = ["To Do", "Done", "Trash"];

  const [tasks, setTasks] = useState(() =>
    safeJSONParse(localStorage.getItem("tasks"))
  );
  const [doneTasks, setDoneTasks] = useState(() =>
    safeJSONParse(localStorage.getItem("doneTasks"))
  );
  const [trashTasks, setTrashTasks] = useState(() =>
    safeJSONParse(localStorage.getItem("trashTasks"))
  );
  const [activeTab, setActiveTab] = useState("To Do");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [doneTasks]);

  useEffect(() => {
    localStorage.setItem("trashTasks", JSON.stringify(trashTasks));
  }, [trashTasks]);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const markAsDone = (taskToToggle) => {
    if (doneTasks.some((task) => task.id === taskToToggle.id)) {
      setDoneTasks((prevDoneTasks) =>
        prevDoneTasks.filter((task) => task.id !== taskToToggle.id)
      );
    } else {
      setDoneTasks((prevDoneTasks) => [...prevDoneTasks, taskToToggle]);
    }
  };

  const removeTask = (taskToRemove) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToRemove.id)
    );
    setTrashTasks((prevTrashTasks) => [...prevTrashTasks, taskToRemove]);
    setDoneTasks((prevDoneTasks) =>
      prevDoneTasks.filter((task) => task.id !== taskToRemove.id)
    );
  };

  const restoreTask = (taskToRestore) => {
    setTrashTasks((prevTrashTasks) =>
      prevTrashTasks.filter((task) => task.id !== taskToRestore.id)
    );
    setTasks((prevTasks) => [...prevTasks, taskToRestore]);
  };

  const deleteForever = (taskToDelete) => {
    setTrashTasks((prevTrashTasks) =>
      prevTrashTasks.filter((task) => task.id !== taskToDelete.id)
    );
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
        doneTasks={doneTasks}
        trashTasks={trashTasks}
        markAsDone={markAsDone}
        removeTask={removeTask}
        restoreTask={restoreTask}
        deleteForever={deleteForever}
      />
    </div>
  );
}

export default FilterTabs;
