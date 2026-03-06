import { createContext, useContext, useState, useCallback } from 'react';
import { getTasks, createTask, toggleTask } from '../services/api';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getTasks();
      setTasks(res.data.data);
    } catch {
      setError('Failed to load tasks.');
    } finally {
      setLoading(false);
    }
  }, []);

  const addTask = async (data) => {
    const res = await createTask(data);
    setTasks((prev) => [res.data.data, ...prev]);
  };

  const toggle = async (id) => {
    const res = await toggleTask(id);
    setTasks((prev) =>
      prev.map((task) => (task._id === id ? res.data.data : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, loading, error, fetchTasks, addTask, toggle }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
