/**
 * App.jsx
 * Kondwani Mtawali
 * Web app home page
 * Leverages useTaskList to render task list
 * Contains filtering function allowing user to search tasks by category and by priorities
 */
import './App.css'
import { Link } from 'react-router';
import { useTaskList } from './hooks/createTasks';
import { useState } from "react";

function App() {
  const { tasks, loading, error } = useTaskList(); //Fetches tasks list
  //Use states for filtering function
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");


  if (loading) {
    return (
      <>
        <h1>--Loading--</h1>
      </>
    );
  }
  if (error) {
    return (
      <>
        <h1>Uh Oh!</h1>
      </>
    );
  }

  // Filter task lists based on category and/or priority
  const filteredTasks = tasks.filter(task => {
    const matchesCategory = categoryFilter //Check if filter has been set
      ? task.category && task.category.toLowerCase() === categoryFilter.toLowerCase() //Checks if cateogory exists, checks for casing
      : true;

    const matchesPriority = priorityFilter
      ? String(task.priority) === priorityFilter // Stringifies priority level to compare to filter
      : true;

    return matchesCategory && matchesPriority; // Only filter if it matches both category and priority

  });
  return (
    /**
     * Home Page renderings tasks in containers(css style)
     * Contains navigation bar for create, delete, viewGroups, and task filtering(by priority and category)
     * Attempting to show external links and file attachment for tasks
     */
    <div className="container">
      {/* Navigation bar */}
      <nav className="nav-bar">
        <Link to="/tasks/create" className="nav-link">Create Task</Link>
        <Link to="/tasks/delete" className="nav-link">Delete Task</Link>
        <Link to="/groups/view" className="nav-link">View Group Tasks</Link>
        {/* Filtering UI */}
        <input
          type="text"
          placeholder="Search Category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="filter-input" />
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)} className="filter-input">
          <option value="">All Priorities</option>
          {[1, 2, 3, 4, 5].map(p => (
            <option key={p} value={p}>Priority {p}</option>
          ))}
        </select>
      </nav>

      <h1 className="page-title">Personal Tasks</h1>

      <div className="task-grid">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <div className="task-card" key={task.id}>
              <h2 className="task-title">{task.id}. {task.title}</h2>
              <p><strong>Due:</strong> {new Date(task.task_due).toLocaleString()}</p>
              <p><strong>Category:</strong> {task.category || 'None'}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
              <p><strong>Complete:</strong> {task.task_is_complete ? 'Yes' : 'No'}</p>

              {task.external_link && (
                <p><strong>Link:</strong> <a href={task.external_link} target="_blank" rel="noreferrer">{task.external_link}</a></p>
              )}
              {task.attachment && (
                <p><strong>File:</strong> <a href={task.attachment} target="_blank" rel="noreferrer">View File</a></p>
              )}

              <Link to={`/tasks/edit/${task.id}`} className="edit-button">Edit</Link>
            </div>
          ))
        ) : (
          <p>
            {categoryFilter && !tasks.some(t => t.category && t.category.toLowerCase() === categoryFilter.toLowerCase()) &&
              "Category doesn’t exist."}
            {priorityFilter && !tasks.some(t => String(t.priority) === priorityFilter) &&
              " No tasks with selected priority."}
            {!categoryFilter && !priorityFilter && "No tasks available."}
          </p>
        )}
      </div>

    </div>
  );
}


export default App
