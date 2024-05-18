import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]); // Default to the first category

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent empty tasks
    onTaskFormSubmit({ text, category });
    setText(''); // Clear input after submission
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={handleTextChange} placeholder="Enter task" />
      </label>
      <label>
        Category
        <select value={category} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categories.map(category => (
            // Exclude "All" category from the dropdown options
            category !== "All" && (
              <option key={category} value={category}>
                {category}
              </option>
            )
        ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
