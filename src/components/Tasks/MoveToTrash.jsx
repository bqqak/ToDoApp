function MoveToTrash({ taskToRemove, removeTask, clearSelectedTask }) {
  const handleRemove = () => {
    removeTask(taskToRemove);
    clearSelectedTask();
  };
  return (
    <div>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl shadow-md text-sm"
        onClick={handleRemove}
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
        Move to Trash
      </button>
    </div>
  );
}

export default MoveToTrash;
