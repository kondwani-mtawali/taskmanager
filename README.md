# TaskManager

**TaskManager** is my attempt at a full-stack task management web application built using Django REST Framework (DRF) on the backend and React.js on the frontend. The project supports personal task creation, editing, deletion, group-based task tracking, and user-friendly visual components. It was developed for an application development project and contains basic features

---

## Features

### Tasks

- Create tasks with:
  - Title, description, and due date
  - Priority levels (1 to 5)
  - Category selection
  - File attachments
  - External links
- Toggle completion status
- View detailed task information
- Edit tasks inline
- Delete tasks by ID

### Group Tasks

- Create and view task groups
- Assign participants to groups (stored as comma-separated strings)
- Manually assign tasks to groups (via comma-separated task IDs or names)
- Expand/collapse task lists for each group

### UI/UX

- Fully responsive layout with custom CSS
- Accessible, clearly labeled form inputs
- Task cards display:
  - Priority
  - Completion status
  - Due date
- Seamless navigation across:
  - Create
  - Edit
  - Delete
  - Group view pages

---

##  Setup Instructions

### Backend (Django + DRF)

1. Navigate to the `backend/` directory:
   ```bash
   cd backend/
   python -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt  # If requirements file exists
    python manage.py migrate
    python manage.py runserver

### Frontend (React)
2. Navigate to `frontend/` directory:
    ```bash
    cd frontend/
    npm install
    npm run dev




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
