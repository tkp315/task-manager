import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getTasks = () => api.get('/tasks');
export const createTask = (data) => api.post('/tasks', data);
export const toggleTask = (id) => api.patch(`/tasks/${id}/toggle`);
