/**
 * tasksDelete.jsx
 * Kondwani Mtawali
 * Page allowing users to delete tasks
 * Leverages useTaskDelete hook to allow user to delete tasks
 * Returns forms for user to input into the backend API
 * 
 */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useTaskDelete } from "../hooks/deleteTasks";

export function TaskDelete() {
    const [id, setId] = useState(""); // Tracks ID of task being deleted
    const { mutate, isPending, isError, isSuccess } = useTaskDelete();
    const navigate = useNavigate(); // Navigate on success

    const handleDelete = (e) => {
        e.preventDefault();
        mutate(id);
    };

    if (isSuccess) {
        navigate("/");
    }
    if (isPending) {
        return <>
            <h1>--Loading--</h1>
        </>
    }
    if (isError) {
        return <>
            <h1>Something Went Wrong!</h1>
        </>
    }
    return (
        /**
         * Task delete form
         * Form for inputting which task, by ID, to delete
         * Accesses CSS styling from App.css(.container)
         */
        <div className="container">
            <h1 className="page-title">Delete Task</h1>
            <form onSubmit={handleDelete} className="task-form">
                <input type="text" placeholder="Task ID (e.g. 3)" value={id} onChange={(e) => setId(e.target.value)} />
                <button type="submit">Delete</button>
            </form>
        </div>
    );

}