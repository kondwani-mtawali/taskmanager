/**
 * tasksCreate.jsx
 * Kondwani Mtawali
 * Page allowing user to create tasks
 * Leverages useTaskCreate hook to allow user to create tasks
 * Leverages useGroupList hook to allow user to view groups and assign a task to a group
 * Returns form for user to input into the backend API
 * 
 */

import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useTaskCreate } from "../hooks/createTasks";
import { useGroupList } from "../hooks/viewGroups";

export function TasksCreate() {
    const { title, setTitle, description, setDescription, taskDue, setTaskDue,
        externalLink, setExternalLink, category, setCategory, priority, setPriority,
        loading, error, successful, createTask } =
        useTaskCreate();

    const navigate = useNavigate(); // Navigation after success

    const { data: groups = [], isLoading: groupsLoading, error: groupsError } = useGroupList();//query fetch hooks
    const [groupId, setGroupId] = useState(""); // new state to track group selection

    useEffect(() => {
        if (successful) {
            navigate("/");
        }
    }), [successful, navigate] //navigate inside useEffect to prevent update while rendering
    if (loading) {
        return <>
            <h1>--Loading--</h1>
        </>
    }
    if (error) {
        return <>
            <h1>Something Went Wrong!</h1>
        </>
    }
    return (
        /**
         * Task creation form
         * Form for new tasks, includes input features for title, time, description, etc.
         * Accesses CSS styling from App.css(.container)
         * 
         */

        <div className="container">
            <h1 className="page-title">Create Task</h1>
            <form onSubmit={createTask} className="task-form">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <input type="datetime-local" value={taskDue} onChange={(e) => setTaskDue(e.target.value)} />
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    {[1, 2, 3, 4, 5].map(level => (
                        <option key={level} value={level}>Priority {level}</option>
                    ))}
                </select>
                <input type="url" value={externalLink} onChange={(e) => setExternalLink(e.target.value)} placeholder="External Link" />

                <button type="submit">Create</button>
            </form>
        </div>
    );
}