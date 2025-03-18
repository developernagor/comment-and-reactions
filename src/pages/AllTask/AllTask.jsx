import React from "react";
import SingleTask from "../SingleTask/SingleTask";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function AllTask() {
  //  Fetch tasks directly inside AllTask (no need for TaskList function)
  const { data: tasks = [], isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
      return response.data;
    },
  });

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>All Tasks: {tasks.length}</h2>
      <div className="grid grid-cols-4 gap-4">
        {tasks.map((singleTask) => (
          <SingleTask key={singleTask._id} singleTask={singleTask} />
        ))}
      </div>
    </div>
  );
}

export default AllTask;
