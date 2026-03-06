# Task Manager Portal

A full-stack task management portal built with the MERN stack (NestJS backend).

---

## Github
```
https://github.com/tkp315/task-manager
```

## How to Run

```bash
cd backend
npm install
npm run start:dev

cd frontend
npm i
npm run dev
```


## Project Structure

```
task-manager/
├── backend/
│   └── src/
│       ├── tasks/
│       │   ├── dto/create-task.dto.ts
│       │   ├── task.schema.ts
│       │   ├── tasks.controller.ts
│       │   ├── tasks.service.ts
│       │   └── tasks.module.ts
│       ├── utils/
│       │   ├── api-response.ts
│       │   └── api-error.ts
│       ├── app.module.ts
│       └── main.ts
└── frontend/
    └── src/
        ├── context/
        │   └── TaskContext.jsx
        ├── pages/
        │   ├── TaskList.jsx
        │   └── CreateTask.jsx
        ├── components/
        │   ├── Navbar.jsx
        │   └── TaskCard.jsx
        ├── services/
        │   └── api.js
        └── App.jsx
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PATCH | `/api/tasks/:id/toggle` | Toggle task completed |

---

## Build Prompts

The following prompts were used to build this project step by step:

1. *"I need to design a task management portal using MERN stack but backend with NestJS so we will go step by step 1. setup -> frontend and backend"*

2. *"Our requirements are add task, view task, mark task as completed so basically we need to design 3 APIs add task, get task and update/toggle task, we will first make backend then move on frontend 1. backend setup"*

3. *"No first setup folder structure then we will create mongo schema will use serverless"*

4. *"Will create mongo schema now"*

5. *"Add priority, dueDate, and status also"*

6. *"Next we will create controller for APIs 3 APIs view, add and update/toggle before going forward make utils and add apiResponse class and apiError class"*

7. *"Now create business logic for APIs"*

8. *"Yes now make controller for APIs"*

9. *"Yes (proceed with tasks.module.ts and app.module.ts wiring)"*

10. *"Have you integrated APIs?"*

11. *"Have you used state management or not because in assignment I need to explain state management"*

12. *"Use Context API"*

13. *"Add time also when task is completed"*


## State Management — Context API

This project uses **React Context API** for global state management across the frontend.

### Implementation

**`TaskContext.jsx`** — Central store that holds:
- `tasks` — array of all tasks fetched from the backend
- `loading` — boolean for loading state
- `error` — error message if API fails

**Actions exposed via context:**
- `fetchTasks()` — calls `GET /api/tasks`, updates `tasks` state globally
- `addTask(data)` — calls `POST /api/tasks`, prepends new task to `tasks` state
- `toggle(id)` — calls `PATCH /api/tasks/:id/toggle`, updates the specific task in `tasks` state without re-fetching

**`useTasks()` custom hook** — Wraps `useContext(TaskContext)` so any component can consume the store with one line:
```js
const { tasks, loading, addTask, toggle } = useTasks();
```

**`TaskProvider`** — Wraps the entire app in `App.jsx` so all pages and components share the same state.


---

## What AI Generated vs What I Modified

### AI Generated
- Initial NestJS project structure
- Basic Task schema with fields like title, description and a `completed` boolean field
- Basic controller and service structure for task APIs
- Basic React component structure for displaying tasks

### Modifications and Enhancements by Me
- Replaced the `completed` boolean field with a more flexible `status` field (Pending / Completed)
- Used **MongoDB Serverless instance** instead of a local MongoDB setup
- Designed and organized a **clean folder structure** for better maintainability
- Implemented **custom API response and API error classes** to standardize backend responses
- Added additional fields such as:
  - `dueDate`
  - `updatedAt`
  - `deadline / overdue indicator`
- Implemented logic to **update the task's date and time when the user marks a task as completed**
- Displayed the **last updated timestamp under each task**
- Added **deadline validation logic** that shows a message when a task exceeds its due date (overdue)
