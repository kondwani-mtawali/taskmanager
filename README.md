# TaskManager

**TaskManager** is a full-stack task management web application built using **Django REST Framework (DRF)** on the backend and **React.js** on the frontend. The project supports both personal and group-based task management with an accessible and responsive user interface.

This application was developed for an application development course project and showcases core CRUD functionality, dynamic filtering, and visual task representation.

---

## 🔧 Features

### 🗂️ Tasks

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

### 👥 Group Tasks

- Create and view task groups
- Assign participants to groups (stored as comma-separated strings)
- Manually assign tasks to groups (via comma-separated task IDs or names)
- Expand/collapse task lists for each group

### 🎨 UI/UX

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

## ⚙️ Setup Instructions

### Backend (Django + DRF)

1. Navigate to the `backend/` directory:
   ```bash
   cd backend/
   
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
