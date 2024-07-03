import { useState } from "react";
import "./index.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  const toEdit = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const saveTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editTask.trim();
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <button onClick={saveTask}>Save</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => toEdit(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
