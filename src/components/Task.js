import React from "react";

function Task({ task, onDelete, selectedCategory }) {
  const { id, text, category } = task;

  const handleDelete = () => {
    onDelete(id);
  };

  const isSelected = () => {

    if (selectedCategory === "All") {

      return true;

    }

    return selectedCategory === category;

  };
  return (
    <div className={`task ${isSelected() ? "selected" : ""}`}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
