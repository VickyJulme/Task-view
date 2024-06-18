import React, { useState } from 'react';
import { RiEditFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const Tasklie = () => {
  const initialTasks = [
    {
      id: 1,
      name: "Logo Design",
      startDate: "2021-12-03",
      endDate: "2021-12-05",
      members: 5,
      status: "Done",
      icon: "https://img.icons8.com/color/48/000000/adobe-xd.png", // Figma icon
    },
    {
      id: 2,
      name: "UI Design",
      startDate: "2021-12-03",
      endDate: "2021-12-05",
      members: 5,
      status: "Done",
      icon: " https://img.icons8.com/color/48/000000/figma--v1.png", // Adobe XD icon
    },
  ];
  
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleEditClick = (id) => {
    setEditingTaskId(id);
  };

  const handleDeleteClick = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleTaskChange = (id, field, value) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, [field]: value } : task));
  };

  const handleSaveClick = (id) => {
    setEditingTaskId(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Done':
        return 'bg-green-500 text-white font-semibold';
      case 'In Progress':
        return 'bg-blue-500 text-white font-semibold';
      case 'Completed':
        return 'bg-orange-500 text-white font-semibold';
      default:
        return '';
    }
  };

  return (
    <div className="overflow-x-auto p-6 bg-white rounded-lg shadow-md">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-semibold mb-4">Done</h2>
        <a href="#" className="text-blue-500 hover:underline">See More</a>
      </div>
      <table className="min-w-full bg-white border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 font-normal">Check Box</th>
            <th className="py-2 px-4 font-normal">Task Name</th>
            <th className="py-2 px-4 font-normal">Start Date</th>
            <th className="py-2 px-4 font-normal">End Date</th>
            <th className="py-2 px-4 font-normal">Member</th>
            <th className="py-2 px-4 font-normal">Status</th>
            <th className="py-2 px-4 font-normal">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 text-center"><input type="checkbox" /></td>
              <td className="py-2 px-4 flex items-center space-x-2">
                <img src={task.icon} alt="icon" className="w-6 h-6" />
                {editingTaskId === task.id ? (
                  <select
                    value={task.name}
                    onChange={(e) => handleTaskChange(task.id, 'name', e.target.value)}
                    className="block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="UI Design">UI Design</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                  </select>
                ) : (
                  task.name
                )}
              </td>
              <td className="py-2 px-4">
                {editingTaskId === task.id ? (
                  <input
                    type="date"
                    value={task.startDate}
                    onChange={(e) => handleTaskChange(task.id, 'startDate', e.target.value)}
                    className="block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                ) : (
                  task.startDate
                )}
              </td>
              <td className="py-2 px-4">
                {editingTaskId === task.id ? (
                  <input
                    type="date"
                    value={task.endDate}
                    onChange={(e) => handleTaskChange(task.id, 'endDate', e.target.value)}
                    className="block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                ) : (
                  task.endDate
                )}
              </td>
              <td className="py-2 px-4">
                {editingTaskId === task.id ? (
                  <select
                    value={task.members}
                    onChange={(e) => handleTaskChange(task.id, 'members', e.target.value)}
                    className="block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1} Member</option>
                    ))}
                  </select>
                ) : (
                  `${task.members} Member${task.members > 1 ? 's' : ''}`
                )}
              </td>
              <td className="py-2 px-4">
                {editingTaskId === task.id ? (
                  <select
                    value={task.status}
                    onChange={(e) => handleTaskChange(task.id, 'status', e.target.value)}
                    className={`block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${getStatusColor(task.status)}`}
                  >
                    <option value="Done" className="bg-green-500 text-white font-semibold">Done</option>
                    <option value="In Progress" className="bg-blue-500 text-white font-semibold">In Progress</option>
                    <option value="Completed" className="bg-orange-500 text-white font-semibold">Completed</option>
                  </select>
                ) : (
                  <span className={`inline-block px-2 py-1 rounded ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                )}
              </td>
              <td className="py-2 px-4 text-center space-x-2">
                {editingTaskId === task.id ? (
                  <button onClick={() => handleSaveClick(task.id)} className="text-green-600 rounded-full p-2 bg-green-100">
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEditClick(task.id)} className="text-blue-600 rounded-full p-2 bg-blue-100">
                    <RiEditFill className="text-blue-600" />
                  </button>
                )}
                <button onClick={() => handleDeleteClick(task.id)} className="text-red-600 rounded-full p-2 bg-red-100">
                  <FaTrash className="text-red-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasklie;
