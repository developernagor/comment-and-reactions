import React, { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskStatus, setTaskStatus] = useState("TO DO");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskFile, setTaskFile] = useState(null);
  const [taskAssign, setTaskAssign] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setTaskFile(e.target.files[0]);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;
    setLoading(true);

    let imageUrl = null;

    if (taskFile) {
      const formData = new FormData();
      formData.append("image", taskFile);

      try {
        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();

        if (!result.success) {
          alert("Image upload failed. Please try again.");
          setLoading(false);
          return;
        }

        imageUrl = result.data?.url;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    // Validate data
    const today = new Date();
today.setHours(0, 0, 0, 0); // Reset time for an accurate comparison

if (new Date(taskDeadline) < today) {
  alert("Deadline must be today or a future date.");
  setLoading(false);
  return;
}

    const newTask = {
      taskTitle,
      taskDescription,
      taskDeadline,
      taskStatus,
      taskPriority,
      taskAssign,
      taskImage: imageUrl,
    };
    console.log(newTask);

    try {
      const response = await fetch("http://localhost:5000/add-task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = await response.json();
      console.log("Task added:", data);
    } catch (error) {
      console.error("Error adding task:", error);
    }

    setTaskTitle("");
    setTaskDescription("");
    setTaskDeadline("");
    setTaskStatus("TO DO");
    setTaskPriority("");
    setTaskFile(null);
    setTaskAssign("");
    // console.log(newTask)
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <form onSubmit={handleAddTask} className="flex mb-4 flex-col">
        <div className="flex flex-col">
          <label>Task Title</label>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="flex-1 p-2 border rounded-md"
            placeholder="Enter task name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Task description</label>
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="flex-1 p-2 border rounded-md"
            placeholder="Enter task description"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Task deadline</label>
          <input
            type="date"
            value={taskDeadline}
            onChange={(e) => setTaskDeadline(e.target.value)}
            className="flex-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Task Status</label>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            className="flex-1 p-2 border rounded-md"
            required
          >
            <option value="TO DO">TO DO</option>
            <option value="IN PROGRESS">IN PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>Task Priority</label>
          <select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            className="flex-1 p-2 border rounded-md"
            required
          >
            <option value="">Select Task Priority</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>Upload File</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Task Assign</label>
          <input
            type="text"
            value={taskAssign}
            onChange={(e) => setTaskAssign(e.target.value)}
            className="flex-1 p-2 border rounded-md"
            placeholder="Enter an user name"
            required
          />
        </div>

        <button
          className="ml-2 mt-4 px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
