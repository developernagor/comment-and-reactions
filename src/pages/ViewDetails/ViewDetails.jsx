import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Countdown from 'react-countdown';
import { useParams } from 'react-router';

function ViewDetails() {

  const {id} = useParams();

  const {data: task, isLoading, error} = useQuery({
    queryKey:["task", id],
    queryFn: async() => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/task/${id}`);
      console.log(response.data)
      return response.data;
    },
  })
  // console.log(task)

  if (isLoading) return <p>Loading task...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // const { taskTitle, taskDescription, taskAssign, taskDeadline, taskPriority, taskStatus } = task;

  const {
    taskTitle = 'No title available',
    taskDescription = 'No description available',
    taskAssign = 'Not assigned',
    taskDeadline = 'No deadline set',
    taskPriority = 'Not specified',
    taskStatus = 'No status available',
    taskImage="No image file"
  } = task || {};

// Convert deadline to a valid Date object for Countdown
  const deadlineDate = taskDeadline ? new Date(taskDeadline) : null;

  const countdownRenderer = ({ years, months, days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <p className="text-red-500 font-semibold">Deadline Reached!</p>;
    } else {
      return (
        <p className="text-lg font-semibold">
          {years > 0 && `${years}y `} 
          {months > 0 && `${months}m `} 
          {days > 0 && `${days}d `} 
          {hours}h {minutes}m {seconds}s
        </p>
      );
    }
  };

  return (
    <div className="task-container border p-4">

<div className="task-image w-10/12 mx-auto my-4 flex justify-center">
  {taskImage && taskImage !== "No image file" ? (
    <img src={taskImage} alt="Task" className="max-w-full h-auto rounded-lg shadow-md" />
  ) : (
    <p className="text-gray-500">No image available</p>
  )}
</div>
      
      <div className="task-content border p-4">
        <table className="w-10/12 border-collapse">
        <tbody>
            <tr>
              <td className="w-2/12 p-2">Task Title</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">{taskTitle}</td>
            </tr>
            <tr>
              <td className="w-2/12 p-2">Task Description</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">{taskDescription}</td>
            </tr>
            <tr>
              <td className="w-2/12 p-2">Assigned To</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">{taskAssign}</td>
            </tr>
            <tr>
              <td className="w-2/12 p-2">Deadline</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">{taskDeadline}</td>
            </tr>
            <tr>
              <td className="w-2/12 p-2">Priority</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">{taskPriority}</td>
            </tr>
            <tr>
              <td className="w-2/12 p-2">Status</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">{taskStatus}</td>
            </tr>
          </tbody>
        </table>

        {/* Countdown Timer */}
      {deadlineDate ? (
        <div className="text-center text-red-500 mt-4">
          <p className="font-semibold">Time Remaining:</p>
          <Countdown date={deadlineDate} renderer={countdownRenderer} />
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No deadline set</p>
      )}

      </div>
    </div>
  );
}

export default ViewDetails;
