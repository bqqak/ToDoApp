function TaskItem({ task, onCheck, isSelected }) {
  const handleCheck = () => {
    if (onCheck) {
      onCheck(task);
    }
  };

  return (
    <div className="group flex items-center justify-between p-2 hover:bg-gray-100 rounded transition">
      <div className="flex items-center gap-2">
        <p className="mr-2 text-gray-400">:</p>
        <input
          type="checkbox"
          className="w-4 h-4 accent-purple-600"
          onChange={handleCheck}
          checked={isSelected}
        />
        <span
          className={
            isSelected ? "line-through text-gray-500" : "text-gray-800"
          }
        >
          {task.text}
        </span>
      </div>
    </div>
  );
}

export default TaskItem;
