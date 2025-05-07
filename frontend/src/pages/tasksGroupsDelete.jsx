/**
 * tasksGroupsDelete.jsx
 * Kondwani Mtawali
 * Page allowing users to delete Groups
 * Leverages useGroupDelete hook to delete on the backend
 */
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useGroupDelete } from "../hooks/deleteGroups";

export function TasksGroupsDelete() {
    const { id } = useParams(); // Group ID from route
    const navigate = useNavigate();
    const { mutate, isPending, isError, isSuccess } = useGroupDelete();

    useEffect(() => {
        if (isSuccess) {
            navigate("/groups/view"); // Redirect to the groups page upon completion
        }
    }, [isSuccess, navigate]);

    const handleDelete = (e) => {
        e.preventDefault();
        mutate(id);
    };

    if (isPending) return <h1>--Loading--</h1>;
    if (isError) return <h1>Something Went Wrong!</h1>;

    return (
        /**
         * Group Delete Form
         * Form for inputting changes to task components
         * Accesses CSS styling from App.css(.task-card)
         */
        <div className="task-card">
            <h1>Confirm Delete</h1>
            <form onSubmit={handleDelete}>
                <p>Are you sure you want to delete group {id}?</p>
                <button type="submit">Yes, Delete</button>
            </form>
        </div>
    );
}
