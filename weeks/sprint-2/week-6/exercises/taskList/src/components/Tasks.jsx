import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(null);
  const [twentyTasks, setTwentyTasks] = useState(null);

  const taskApi = "https://week-7-backend.onrender.com/tasks";

  const fetchTasks = async () => {
    await fetch(taskApi)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);      
      setTasks(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // function to save 20 most recent tasks in twentyTasks state
  const sliceTasks = () => {
    let newTasks = tasks?.reverse().slice(0, 20);
    setTwentyTasks(newTasks);
    console.log("20 tasks: ", twentyTasks);
  }

  // fetch tasks from taskApi and save to tasks state
  useEffect(() => {
    fetchTasks();
  },[]);

  // run sliceTasks function after tasks state has been updated
  useEffect(() => {
    sliceTasks();
  },[tasks]);

  return (
    <div>
      <TaskForm />
      <TaskList twentyTasks={twentyTasks}/>
    </div>
  );
};

export default Tasks;
