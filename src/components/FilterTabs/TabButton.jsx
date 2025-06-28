import "./css.css";
function TabButton({ label, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-gray-100 pl-7 pr-7 pt-3 pb-3 rounded-4xl"
        id="labels_buttons"
      >
        {label}
      </button>
    </div>
  );
}

export default TabButton;
