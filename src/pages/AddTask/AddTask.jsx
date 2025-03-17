import React, { useState } from "react";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskStatus, setTaskStatus] = useState("TO DO");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskFile, setTaskFile] = useState(null);
  const [taskAssign, setTaskAssign] = useState("");
  // const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([]);
  const [newComment, setNewComment] = useState(""); // State for the comment input
  const [editingCommentId, setEditingCommentId] = useState(null); // To track editing state of comments
  const [editedCommentText, setEditedCommentText] = useState(""); // Edited comment text

  const handleFileChange = (event) => {
    setTaskFile(event.target.files[0]); // Save the file object
  };
  // Simulated Logged-in User Info (Replace with real authentication)
  const user = {
    name: "John Doe",
    photo: "https://via.placeholder.com/40", // Replace with real user profile
  };

  const reactionsList = ["👍", "❤️", "😂"];

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;
    const newTask = {
      taskTitle,
      taskDescription,
      taskDeadline,
      taskStatus,
      taskPriority,
      taskFile,
      taskAssign,
    };


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



    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskTitle("");
    setTaskDescription("");
    setTaskDeadline("");
    setTaskStatus("TO DO");
    setTaskPriority("");
    setTaskFile(null);
    setTaskAssign("");
    console.log(newTask)
  };
  

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleAddComment = (index) => {
    if (newComment.trim() === "") return;

    const timestamp = new Date().toLocaleString();
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index
          ? {
              ...t,
              comments: [
                ...t.comments,
                {
                  id: Date.now(),
                  text: newComment,
                  timestamp,
                  userName: user.name,
                  userPhoto: user.photo,
                  isEditing: false,
                  reactions: {},
                },
              ],
            }
          : t
      )
    );
    setNewComment(""); // Clear the comment input after adding
  };

  const handleToggleReaction = (type, taskIndex, commentId = null) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === taskIndex
          ? {
              ...task,
              ...(commentId
                ? {
                    comments: task.comments.map((comment) =>
                      comment.id === commentId
                        ? {
                            ...comment,
                            reactions: toggleReaction(comment.reactions, type),
                          }
                        : comment
                    ),
                  }
                : {
                    reactions: toggleReaction(task.reactions, type),
                  }),
            }
          : task
      )
    );
  };

  // Toggle reaction and maintain reaction count
  const toggleReaction = (reactions, type) => {
    const updatedReactions = { ...reactions };
    if (updatedReactions[user.name] === type) {
      delete updatedReactions[user.name]; // Remove reaction if already added
    } else {
      updatedReactions[user.name] = type;
    }
    return updatedReactions;
  };

  // Count total reactions of each type
  const getReactionCounts = (reactions) => {
    return reactionsList.reduce((counts, reaction) => {
      counts[reaction] = Object.values(reactions).filter((r) => r === reaction).length;
      return counts;
    }, {});
  };

  // Handle editing comment
  const handleEditComment = (commentId, taskIndex) => {
    const taskToEdit = tasks[taskIndex];
    const commentToEdit = taskToEdit.comments.find((comment) => comment.id === commentId);
    setEditingCommentId(commentId); // Set the comment as being edited
    setEditedCommentText(commentToEdit.text); // Set the current text for editing
  };

  const handleSaveEditedComment = (commentId, taskIndex) => {
    if (editedCommentText.trim() === "") return;

    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === taskIndex
          ? {
              ...task,
              comments: task.comments.map((comment) =>
                comment.id === commentId
                  ? { ...comment, text: editedCommentText, isEditing: false }
                  : comment
              ),
            }
          : task
      )
    );
    setEditingCommentId(null);
    setEditedCommentText(""); // Clear the edited text
  };

  // Delete a comment
  const handleDeleteComment = (commentId, taskIndex) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === taskIndex
          ? {
              ...task,
              comments: task.comments.filter((comment) => comment.id !== commentId),
            }
          : task
      )
    );
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
        />
        </div>
        <div className="flex flex-col">
        <label>Task deadline</label>
        <input
          type="date"
          value={taskDeadline}
          onChange={(e) => setTaskDeadline(e.target.value)}
          className="flex-1 p-2 border rounded-md"
        />
        </div>
        <div className="flex flex-col">
  <label>Task Status</label>
  <select
    value={taskStatus}
    onChange={(e) => setTaskStatus(e.target.value)}
    className="flex-1 p-2 border rounded-md"
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
  >
    <option value="">Select Task Priority</option>
    <option value="LOW">Low</option>
    <option value="MEDIUM">Medium</option>
    <option value="HIGH">High</option>
  </select>
</div>

        <div className="flex flex-col">
        <label>Upload File</label>
        <input type="file" onChange={handleFileChange} />
      {taskFile && <p>Selected file: {taskFile.name}</p>}
        </div>
        <div className="flex flex-col">
        <label>Task Assign</label>
        <input
          type="text"
          value={taskAssign}
          onChange={(e) => setTaskAssign(e.target.value)}
          className="flex-1 p-2 border rounded-md"
          placeholder="Enter an user name"
        />
        </div>

        <button
          className="ml-2 mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Task
        </button>
      </form>

      <ul className="list-none">
        {tasks.map((taskItem, index) => (
          <li key={index} className="flex flex-col p-4 border-b">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{taskItem.taskTitle}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>

            {/* Task Reactions */}
            <div className="mt-2 flex space-x-2">
              {reactionsList.map((reaction) => {
                const counts = getReactionCounts(taskItem.reactions);
                return (
                  <button
                    key={reaction}
                    className={`px-2 py-1 text-lg ${
                      taskItem.reactions[user.name] === reaction ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleToggleReaction(reaction, index)}
                  >
                    {reaction} {counts[reaction] > 0 ? counts[reaction] : ""}
                  </button>
                );
              })}
            </div>

            <div className="mt-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="p-2 border rounded-md w-full"
                placeholder="Add a comment"
              />
              <button
                onClick={() => handleAddComment(index)}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Save
              </button>
            </div>

            <div className="mt-2">
              <ul className="list-none pl-4">
                {taskItem.comments.map((comment) => (
                  <li key={comment.id} className="p-2 bg-gray-100 mb-1 rounded-md flex items-start">
                    <img
                      src={comment.userPhoto}
                      alt="User"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">{comment.userName}</p>
                        <small className="text-gray-500">{comment.timestamp}</small>
                      </div>

                      {/* Editable comment text */}
                      {editingCommentId === comment.id ? (
                        <div>
                          <input
                            type="text"
                            value={editedCommentText}
                            onChange={(e) => setEditedCommentText(e.target.value)}
                            className="p-2 border rounded-md w-full"
                          />
                          <button
                            onClick={() => handleSaveEditedComment(comment.id, index)}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                          >
                            Save Edited Comment
                          </button>
                        </div>
                      ) : (
                        <p>{comment.text}</p>
                      )}

                      {/* Comment Reactions */}
                      <div className="flex space-x-2 mt-1">
                        {reactionsList.map((reaction) => {
                          const counts = getReactionCounts(comment.reactions);
                          return (
                            <button
                              key={reaction}
                              className={`px-2 py-1 text-lg ${
                                comment.reactions[user.name] === reaction ? "bg-gray-200" : ""
                              }`}
                              onClick={() => handleToggleReaction(reaction, index, comment.id)}
                            >
                              {reaction} {counts[reaction] > 0 ? counts[reaction] : ""}
                            </button>
                          );
                        })}
                      </div>

                      {/* Edit and Delete buttons */}
                      {comment.userName === user.name && (
                        <div className="mt-2 flex space-x-2">
                          <button
                            onClick={() => handleEditComment(comment.id, index)}
                            className="text-yellow-500"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteComment(comment.id, index)}
                            className="text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;
