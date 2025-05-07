# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
TaskManager

TaskManager is my attempt at a full-stack task management web application built using Django REST Framework (DRF) on the backend and React.js on the frontend. The project supports personal task creation, editing, deletion, group-based task tracking, and user-friendly visual components. It was developed for an application development project and contains basic features

Features

 Tasks

Create tasks with:

Title, description, due date

Priority levels (1 to 5)

Category, file attachments, and external links

Completion status toggle

View task details

Edit tasks inline

Delete tasks by ID

 Group Tasks

Create and view groups

Assign participants to groups (stored as comma-separated strings)

Manually assign tasks to groups via a comma-separated text field

View tasks assigned to a group with expansion toggles

 
 UI/UX

Fully responsive and styled with custom CSS

Form inputs styled for accessibility and clarity

Task cards display essential metadata (priority, completion, due date)

Intuitive navigation across all pages (Create, Edit, Delete, Group View)




Setup Instructions

Backend Setup

Navigate to backend/

Create virtual environment: python -m venv .venv

Activate: source .venv/bin/activate


Run migrations: python manage.py migrate

Start server: python manage.py runserver

Frontend Setup

Navigate to frontend/

Install dependencies: npm install

Start dev server: npm run dev

App runs at: http://localhost:5173

 Notes

Authentication is not implemented — all data is public.

Group tasks are stored as comma-separated strings.

File uploads are stored in /media/task_files/.

 Author

Kondwani Mtawali | kmtawali8@gmail.com

Concordia University Nebraska

