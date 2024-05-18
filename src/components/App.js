import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState([

    { id: 1, text: "Buy rice", category: "Food" },

    { id: 2, text: "Save a tenner", category: "Money" },

    { id: 3, text: "Build a todo app", category: "Code" },

    { id: 4, text: "Get an ISA", category: "Money" },

    { id: 5, text: "Cook rice", category: "Food" },

    { id: 6, text: "Tidy house", category: "Misc" },

  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');


  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const addTask = (newTask) => {
    const newTaskWithId = { ...newTask, id: tasks.length + 1 };
    setTasks([...tasks, newTaskWithId ]);
  };


  // Filter tasks based on selected category
  const filteredTasks =

    selectedCategory === "All"

      ? tasks

      : tasks.filter((task) => task.category === selectedCategory);


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}        
        />
      <NewTaskForm 
      categories={CATEGORIES} 
      onTaskFormSubmit={addTask} 
      />
      <TaskList 
        tasks={filteredTasks} 
        onDelete={deleteTask} 
        selectedCategory={selectedCategory} 
      />
      
    </div>
  );
}

export default App;
