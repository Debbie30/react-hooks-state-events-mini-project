import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDelete }) {

  const handleDelete = (taskId) => {
    onDelete(taskId);
  };

  const filteredTasks = tasks.filter(task => {

    if (selectedCategory === "All") {

      return true;

    }

    return task.category === selectedCategory;

  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTasks.map(task => (
        <Task
          key={task.id} 
          task={task} 
          onDelete={handleDelete}
          selectedCategory={selectedCategory} 
        />
        
      ))}
    </div>
  );
}

export default TaskList;
