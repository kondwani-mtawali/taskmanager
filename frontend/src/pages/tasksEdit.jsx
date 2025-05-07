/**
 * taskEdit.jsx
 * Kondwani Mtawali
 * Page allowing user to edit tasks
 * Leverages useTask and useTaskUpdate hooks to allow users to edit componenets of tasks
 * Leverages useGroup to allow users to assign a task to a group
 */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useTask, useTaskUpdate } from "../hooks/editTask";
import { useGroupList } from "../hooks/viewGroups";

/**
 * Page to edit an existing task
 */
export function TasksEdit() {
    const { id } = useParams();
    const navigate = useNavigate(); // Redirect after update
    const { data: task, isLoading, isError } = useTask(id); // Gets task and its components
    const updateTask = useTaskUpdate(id);
    const { data: groups = [], isLoading: groupsLoading, error: groupsError } = useGroupList();//query fetch hooks
    const [groupId, setGroupId] = useState(""); // new state to track group selection
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [taskDue, setTaskDue] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState(3);
    const [externalLink, setExternalLink] = useState("");
    const [taskComplete, setTaskComplete] = useState(false);

    // useEffect to populate fields onece task is fetched
    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description || "");
            setTaskDue(task.task_due || "");
            setCategory(task.category || "");
            setPriority(task.priority || 3);
            setExternalLink(task.external_link || "");
            setTaskComplete(task.task_is_complete);
        }
    }, [task]); // task is the only dependency

    // Handles updates inputted by the user in the forms
    const handleUpdate = (e) => {
        e.preventDefault();
        updateTask.mutate({
            title,
            description,
            task_due: taskDue,
            category,
            priority,
            external_link: externalLink,
            task_is_complete: taskComplete
        }, {
            onSuccess: () => {
                navigate("/"); //Redirects after update
            }
        });
    };

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Task not found</h1>;

    return (
        /**
         * Task edit form
         * Form for inputting changes to task components
         * Accesses CSS styling from App.css(.container)
         */
        <div className="container">
            <h1 className="page-title">Edit Task</h1>
            <form onSubmit={handleUpdate} className="task-form">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <input type="datetime-local" value={taskDue} onChange={(e) => setTaskDue(e.target.value)} />
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    {[1, 2, 3, 4, 5].map(level => (
                        <option key={level} value={level}>Priority {level}</option>
                    ))}
                </select>
                <label htmlFor="group">Assign to Group</label>
                <input type="url" value={externalLink} onChange={(e) => setExternalLink(e.target.value)} placeholder="External Link" />
                <label>
                    <input type="checkbox" checked={taskComplete} onChange={(e) => setTaskComplete(e.target.checked)} />
                    Mark as Complete
                </label>
                <button type="submit" className="edit-button">Update Task</button>
            </form>
        </div>
    );
}
