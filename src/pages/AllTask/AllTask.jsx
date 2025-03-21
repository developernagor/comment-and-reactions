import React, { useState } from "react";
import SingleTask from "../SingleTask/SingleTask";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function AllTask() {

  const [sortOrder, setSortOrder] = useState("default");


  const apiUrl = `${import.meta.env.VITE_API_URL}/tasks`;
  const { data: tasks = [], isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axios.get(apiUrl);
      console.log(data)
      return data;
    },
  });



  // Sort tasks based on the selected option
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOrder === "ascending-deadline") {
      return new Date(a.taskDeadline) - new Date(b.taskDeadline);
    } else if (sortOrder === "descending-deadline") {
      return new Date(b.taskDeadline) - new Date(a.taskDeadline);
    }
    return 0; // Default order
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
      <div className="flex justify-between">
      <h2 className="text-2xl font-semibold mb-4">
        All Tasks: {tasks.length}
      </h2>
      {/* Sorting Dropdown */}
      <div className="text-lg font-semibold">
          <label htmlFor="sort" className="mr-2">Sort By:</label>
          <select
            id="sort"
            className="border rounded-lg px-2 py-1"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="ascending-deadline">Close to Deadline</option>
            <option value="descending-deadline">Far to Deadline</option>
          </select>
        </div>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedTasks.map((singleTask) => (
            <SingleTask key={singleTask._id} singleTask={singleTask} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllTask;
