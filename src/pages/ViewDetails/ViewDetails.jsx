import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

function ViewDetails() {

  const {id} = useParams();

  const {data: task, isLoading, error} = useQuery({
    queryKey:["task", id],
    queryFn: async() => {
      const response = await axios.get(`http://localhost:5000/task/${id}`);
      console.log(response)
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
  } = task || {};


  return (
    <div className="task-container border p-4">
      <div className="task-image border w-10/12 mx-auto m-2">Task Image</div>
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
      </div>
    </div>
  );
}

export default ViewDetails;
