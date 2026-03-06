import { useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

export default function TaskList() {
  const { tasks, loading, error, fetchTasks } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (loading) return <p className="text-center text-gray-400 mt-10">Loading tasks...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">No tasks yet. Create one!</p>
      ) : (
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
