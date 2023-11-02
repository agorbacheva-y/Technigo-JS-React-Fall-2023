import { useState } from "react";

const TaskList = (twentyTasks) => {
  const [checked, setChecked] = useState(false);

  const url = `https://week-7-backend.onrender.com/tasks`;
  // `POST <https://week-7-backend.onrender.com/tasks/:id/check>` 

  const postChecked = async (item) => {
    await fetch(`${url}/${item._id}/check`, {
      method: "post"
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (item) => {
    postChecked(item);
    item.isChecked = !item.isChecked;
  };

  console.log("tasks", twentyTasks);

  return (
    <div className="taskCardContainer">
      {twentyTasks.twentyTasks != null &&
        twentyTasks.twentyTasks.map((item) => (
          <div className="taskCard" key={item.id}>
            <input 
              defaultChecked={item.isChecked} 
              id={item._id} 
              type="checkbox"
              onChange={handleChange(item)}
            />
            <label for={item._id}>{item.description}</label>
          </div>
        ))}
    </div>
  );

  /* 
  {
    "isChecked": false,
    "_id": "633ad6b9e44296b1fc668718",
    "description": "Superrr test",
    "date": 1664800441224,
    "__v": 0
  }
   */
};

TaskList.defaultProps = {
  twentyTasks: null,
};

export default TaskList;
