import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-600">Task Manager</h1>
        <div className="flex gap-4">
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            All Tasks
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            + Create Task
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
