import { useState } from "react";

const TaskForm = () => {
  const url = `https://week-7-backend.onrender.com/tasks`;
  const [post, setPost] = useState("");
  
  // it posts on change... somehow need to limit it to on click but it seems to not like it hehe need to figure this out before changing it back probably, useEffect will probably do it but not sure how to limit it... I guess one can make new states for each action and it keeps track of those...
  const postTask = async (task) => {
    console.log("test", task)
    await fetch(url, {
      method: "get", // should this be post? or did that post bbalnk todos? Yea I changed it because of the repeated posts hehe
      /*headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: post }),*/
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Task Form</h1>
      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Enter a task!"
      ></textarea>
      <button onClick={() => postTask(post)}>POST</button>
    </>
  );
};
// 
export default TaskForm;
