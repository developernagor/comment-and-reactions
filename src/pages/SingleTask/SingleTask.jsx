import React from "react";
import { Link } from "react-router";

function SingleTask({ singleTask }) {
  // console.log(singleTask);

  return (
    <div className="p-2 border border-lime-400 rounded-lg">
      <h1>Task Title: {singleTask.taskTitle}</h1>
      <h1>Deadline: {singleTask.taskDeadline}</h1>
      <div className="task-details-btn text-center my-2">
        <Link to={`/task/${singleTask._id}`}>
          <button className="btn btn-info text-white">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default SingleTask;
