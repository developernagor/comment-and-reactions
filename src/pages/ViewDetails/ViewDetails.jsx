import React from 'react';

function ViewDetails() {
  return (
    <div className="task-container border p-4">
      <div className="task-image border w-10/12 mx-auto m-2">Task Image</div>
      <div className="task-content border p-4">
        <table className="w-10/12 border-collapse">
          <tbody>
            <tr className="">
              <td className="w-2/12 p-2">Task title</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">This is task title</td>
            </tr>
            <tr className="">
              <td className="w-2/12 p-2">Task title</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">This is task title</td>
            </tr>
            <tr className="">
              <td className="w-2/12 p-2">Task title</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">This is task title</td>
            </tr>
            <tr className="">
              <td className="w-2/12 p-2">Task title</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">This is task title</td>
            </tr>
            <tr className="">
              <td className="w-2/12 p-2">Task title</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">This is task title</td>
            </tr>
            <tr className="">
              <td className="w-2/12 p-2">Task title</td>
              <td className="w-1/12 p-2">:</td>
              <td className="w-9/12 p-2">This is task title</td>
            </tr>
          </tbody>
        </table>
        <h2 className="task-description mt-4">Task Description</h2>
      </div>
    </div>
  );
}

export default ViewDetails;
