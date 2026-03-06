import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar';
import TaskList from './pages/TaskList';
import CreateTask from './pages/CreateTask';

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Navigate to="/tasks" replace />} />
              <Route path="/tasks" element={<TaskList />} />
              <Route path="/create" element={<CreateTask />} />
            </Routes>
          </main>
        </div>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
