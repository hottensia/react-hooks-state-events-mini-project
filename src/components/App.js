import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [stateTask, setStateTask] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onTaskFormSubmit = (newTask) => {
    
    setStateTask([...stateTask, newTask]);
  };
  function onDelete(taskText) {
    const updatedTasks = stateTask.filter(task => task.text !== taskText);
    console.log({taskText});
    setStateTask(updatedTasks);
  }
  function onSelected(category){
    
    setSelectedCategory(category)
  }

  const filteredTasks = selectedCategory === "All"
    ? stateTask
    : stateTask.filter(task => task.category === selectedCategory);


  console.log({ stateTask })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} onSelected={onSelected}/>
      <NewTaskForm categories= {CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onDelete={onDelete} />
    </div>
  );
}

export default App;