/**
 * tasksGroupsCreate.jsx
 * Kondwani Mtawali
 * Page that allows user to create new group
 * Leverages useGroupCreate hook to allow user to input Group components in forms
 * 
 */
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useGroupCreate } from "../hooks/createGroup";

export function TasksGroupsCreate() {
    const { name, setName, description, setDescription, groupTasks, setGroupTasks,
        participants, setParticipants, loading, error, successful, createGroup } = useGroupCreate();

    const navigate = useNavigate();

    useEffect(() => {
        if (successful) {
            navigate("/"); //Redirects home after success
        }
    }, [successful, navigate]);

    if (loading) return <h1>--Loading--</h1>;
    if (error) return <h1>Something Went Wrong!</h1>;

    return (
        /**
         * Group Creation form
         * Form for inputting group components and creating a new group
         * Accesses CSS styling from App.css(.container)
         */
        <div className="container">
            <h1>Create Group</h1>
            <form onSubmit={createGroup} className="task-form">
                <input type="text" placeholder="Group Name" value={name} onChange={(e) => setName(e.target.value)} />
                <textarea placeholder="Group Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Usernames (comma-separated)" value={participants} onChange={(e) => setParticipants(e.target.value)} />
                <input type="text" placeholder="Group Tasks" value={groupTasks} onChange={(e) => setGroupTasks(e.target.value)} />
                <button type="submit">Create Group</button>
            </form></div>
    )
}
