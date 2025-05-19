# Todo App (MERN Stack)

A simple full-stack Todo application built with React (frontend) and Node.js/Express/MongoDB (backend).

## Features
- Add, edit, delete, and view tasks
- Mark tasks as completed
- Responsive and modern UI
- RESTful API backend

## Project Structure
```
backend/    # Node.js, Express, MongoDB API
frontend/   # React + Vite frontend
```

## Implementation Process

### 1. Backend Setup
- Initialized a Node.js project with Express and MongoDB (Mongoose)
- Created a `Todo` model for tasks
- Implemented RESTful API endpoints:
  - `GET /api/todo` - List all tasks
  - `POST /api/todo` - Create a new task
  - `GET /api/todo/:id` - Get a single task
  - `PUT /api/todo/:id` - Update a task
  - `DELETE /api/todo/:id` - Delete a task
- Added centralized error handling middleware
- Enabled CORS for frontend-backend communication

### 2. Frontend Setup
- Bootstrapped with Vite and React
- Created components:
  - `TaskManager` for adding tasks
  - `AllTasks` for listing all tasks
  - `TaskCard` for displaying and editing individual tasks
- Used Axios for API requests
- Managed state with React hooks
- Styled with custom CSS for a clean UI

### 3. Running the Project

#### Backend
1. Navigate to the `backend` folder:
   ```powershell
   cd backend
   npm install
   npm run dev
   ```
2. Ensure MongoDB is running and a `.env` file with `CONNECTION_STRING` is present.

#### Frontend
1. Open a new terminal and navigate to the `frontend` folder:
   ```powershell
   cd frontend
   npm install
   npm run dev
   ```
2. Visit `http://localhost:5173` in your browser.

## Environment Variables
- Backend requires a `.env` file with:
  ```env
  CONNECTION_STRING=your_mongodb_connection_string
  PORT=5000
  ```

## License
MIT
