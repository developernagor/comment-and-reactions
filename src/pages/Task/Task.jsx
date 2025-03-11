import React, { useState } from "react";

const Task = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newComment, setNewComment] = useState(""); // State for the comment input
  const [editingCommentId, setEditingCommentId] = useState(null); // To track editing state of comments
  const [editedCommentText, setEditedCommentText] = useState(""); // Edited comment text

  // Simulated Logged-in User Info (Replace with real authentication)
  const user = {
    name: "John Doe",
    photo: "https://via.placeholder.com/40", // Replace with real user profile
  };

  const reactionsList = ["👍", "❤️", "😂"];

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { taskText: task, comments: [], reactions: {} }]);
    setTask("");
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
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 p-2 border rounded-md"
          placeholder="Enter a new task"
        />
        <button
          onClick={handleAddTask}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Task
        </button>
      </div>

      <ul className="list-none">
        {tasks.map((taskItem, index) => (
          <li key={index} className="flex flex-col p-4 border-b">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{taskItem.taskText}</span>
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

export default Task;
