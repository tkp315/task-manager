import { useTasks } from '../context/TaskContext';

const priorityStyles = {
  low: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  high: 'bg-red-100 text-red-700',
};

const statusStyles = {
  todo: 'bg-gray-100 text-gray-600',
  in_progress: 'bg-blue-100 text-blue-700',
  done: 'bg-green-100 text-green-700',
};

export default function TaskCard({ task }) {
  const { toggle } = useTasks();

  const isOverdue =
    task.dueDate && !task.completed && new Date(task.dueDate) < new Date();

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border p-5 flex flex-col gap-3 transition-opacity ${
        task.completed ? 'opacity-60' : 'opacity-100'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggle(task._id)}
            className="w-4 h-4 accent-indigo-600 cursor-pointer mt-1"
          />
          <h3
            className={`font-semibold text-gray-800 ${
              task.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {task.title}
          </h3>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${priorityStyles[task.priority]}`}>
            {task.priority}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[task.status]}`}>
            {task.status.replace('_', ' ')}
          </span>
        </div>
      </div>

      {task.description && (
        <p className="text-sm text-gray-500 ml-7">{task.description}</p>
      )}

      {task.dueDate && (
        <p className="text-xs text-gray-400 ml-7">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      {task.completedAt && (
        <p className="text-xs text-green-600 ml-7">
          Completed at: {new Date(task.completedAt).toLocaleString()}
        </p>
      )}

      {isOverdue && (
        <p className="text-xs font-semibold text-red-500 bg-red-50 rounded-lg px-3 py-2 ml-7">
          Hurry up! This task is overdue.
        </p>
      )}
    </div>
  );
}
