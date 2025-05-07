/**
 * main.jsx
 * Kondwani Mtawali
 * How React interacts with the rest of the App
 * Routes defined in root
 * 
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import { TasksCreate } from './pages/tasksCreate.jsx';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TaskDelete } from './pages/tasksDelete.jsx';
import { TasksGroupsCreate } from './pages/tasksGroupCreate.jsx';
import { TasksGroupsView } from './pages/tasksGroupsView.jsx';
import { TasksGroupsDelete } from './pages/tasksGroupsDelete.jsx';
import { TasksEdit } from './pages/tasksEdit.jsx';

const client = new QueryClient(); //Query set up

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tasks/create" element={<TasksCreate />} />
          <Route path="/tasks/delete" element={<TaskDelete />} />
          <Route path="/groups/create" element={<TasksGroupsCreate />} />
          <Route path="/groups/view" element={<TasksGroupsView />} />
          <Route path="/groups/delete/:id" element={<TasksGroupsDelete />} />
          <Route path="/tasks/edit/:id" element={<TasksEdit />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  </StrictMode>,
);
