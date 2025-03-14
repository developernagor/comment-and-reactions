import React from 'react'
import SingleTask from "../SingleTask/SingleTask"
function AllTask() {
  const sampleTasks = [
    {
      taskId:1,
      taskTitle: "Design Homepage UI",
      taskDescription: "Create a responsive homepage layout using TailwindCSS.",
      taskDeadline: "2025-03-20",
      taskStatus: "IN PROGRESS",
      taskPriority: "HIGH",
      taskFile: null,
      taskAssign: "Alice Johnson",
      comments: [
        {
          id: 1,
          text: "Let's use a modern color palette.",
          timestamp: "2025-03-10 14:35",
          userName: "John Doe",
          userPhoto: "https://via.placeholder.com/40",
          reactions: { "Alice Johnson": "❤️" },
        },
      ],
      reactions: { "John Doe": "👍" },
    },
    {
      taskId:2,
      taskTitle: "Implement Authentication",
      taskDescription: "Set up Firebase Authentication with Google Sign-In.",
      taskDeadline: "2025-03-18",
      taskStatus: "TO DO",
      taskPriority: "MEDIUM",
      taskFile: null,
      taskAssign: "Bob Smith",
      comments: [],
      reactions: {},
    },
    {
      taskId:3,
      taskTitle: "Optimize Database Queries",
      taskDescription: "Improve MongoDB indexing and reduce redundant queries.",
      taskDeadline: "2025-03-25",
      taskStatus: "DONE",
      taskPriority: "HIGH",
      taskFile: null,
      taskAssign: "Charlie Brown",
      comments: [
        {
          id: 2,
          text: "Queries are now 50% faster!",
          timestamp: "2025-03-12 10:20",
          userName: "Charlie Brown",
          userPhoto: "https://via.placeholder.com/40",
          reactions: { "John Doe": "😂" },
        },
      ],
      reactions: { "Bob Smith": "👍" },
    },
  ];
  

  
  return (
    <div>
      All Task: {sampleTasks.length}
      <div className='grid grid-cols-4 gap-4'>
        {
          sampleTasks.map(singleTask => <SingleTask key={singleTask.taskId} singleTask={singleTask}></SingleTask>)
        }
      </div>
    </div>
  )
}

export default AllTask
