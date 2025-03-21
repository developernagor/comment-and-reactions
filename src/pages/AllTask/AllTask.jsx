import React from "react";
import SingleTask from "../SingleTask/SingleTask";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function AllTask() {
  const apiUrl = `${import.meta.env.VITE_API_URL}/tasks`;
  const { data: tasks = [], isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axios.get(apiUrl);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 mt-10">
        <p className="font-semibold">Failed to load tasks.</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">
        All Tasks: {tasks.length}
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tasks.map((singleTask) => (
            <SingleTask key={singleTask._id} singleTask={singleTask} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllTask;
