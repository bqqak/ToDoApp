import TaskItem from "../Tasks/TaskItem";
import MoveToTrash from "../Tasks/MoveToTrash";
import { useState } from "react";

function TabContent({ activeTab, tasks, trashTasks, removeTask, restoreTask, deleteForever }) {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskSelect = (task) => {
    if (selectedTask?.id === task.id) {
      setSelectedTask(null); 
    } else {
      setSelectedTask(task);
    }
  };

  const clearSelectedTask = () => {
    setSelectedTask(null); 
  };

  return (
    <div className="mt-8 p-4 ml-11 mr-11">
      {activeTab === "To Do" && (
        <div>
          <p className="text-3xl font-medium">To Do</p>
          <div className="bg-gray-200 w-auto h-1 mt-5 mb-5"></div>
          <div>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onCheck={() => handleTaskSelect(task)} 
                isSelected={selectedTask?.id === task.id}
              />
            ))}
            {selectedTask && (
              <MoveToTrash
                taskToRemove={selectedTask} 
                removeTask={removeTask} 
                clearSelectedTask={clearSelectedTask} 
              />
            )}
          </div>
        </div>
      )}
      {activeTab === "Done" && (
        <div>
          <p className="text-3xl font-medium">Done</p>
          <div className="bg-gray-200 w-auto h-1 mt-5 mb-5"></div>
          <div>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onCheck={() => handleTaskSelect(task)} 
                isSelected={selectedTask?.id === task.id}
              />
            ))}
            
          </div>
        </div>
      )}
      {activeTab === "Trash" && (
        <div>
          <p className="text-3xl font-medium">Trash</p>
          <div className="bg-gray-200 w-auto h-1 mt-5 mb-5"></div>
          <div>
            {trashTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onCheck={() => handleTaskSelect(task)} 
                isSelected={selectedTask?.id === task.id} 
              />
            ))}
            {selectedTask && (
            <div className="bg-gray-100 rounded-xl shadow-md py-2 px-3 w-max space-y-1">
         
            <button
              className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-gray-200 rounded-lg text-sm text-gray-800"
              onClick={() => {
                deleteForever(selectedTask);
                clearSelectedTask();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-7 0a1 1 0 011-1h4a1 1 0 011 1m-7 0h8"
                />
              </svg>
              Delete Forever
            </button>
          
           
            <button
              className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-gray-200 rounded-lg text-sm text-gray-800"
              onClick={() => {
                restoreTask(selectedTask);
                clearSelectedTask();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Move Back To To Do
            </button>
          </div>
          
      
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TabContent;