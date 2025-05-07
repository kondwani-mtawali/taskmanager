/**
 * tasksGroupsView.jsx
 * Kondwani Mtawali
 * Page allowing users to delete Groups
 * Leverages useGroupDelete hook to delete on the backend
 */
import React from "react";
import { useState } from "react";
import { useGroupList } from "../hooks/viewGroups";
import { Link } from "react-router";

export function TasksGroupsView() {
    const { data: groups, isLoading, isError } = useGroupList();
    const [expandedGroupId, setExpandedGroupId] = useState(null); // null set to initially not show tasks


    if (isLoading) return <h1>--Loading--</h1>;
    if (isError) return <h1>Something Went Wrong!</h1>;

    return (
        /**
         * Group Views HTML
         * Form for inputting changes to task components
         * Accesses CSS styling from App.css(.container, task-grid, group-buttons, show-tasks button, group-tasks)
         * Allows for toggling of tasks
         */
        <div className="container">
            <h1 className="page-title">Your Groups</h1>
            <Link to="/groups/create" className="nav-link">Create New Group</Link>

            <div className="task-grid">
                {groups.map(group => (
                    <div className="task-card" key={group.id}>
                        <h2 className="task-title">{group.name}</h2>
                        <p>{group.description || "No description provided."}</p>
                        <p><strong>Participants:</strong> {group.participants}</p>

                        <div className="group-buttons">
                            <Link to={`/groups/delete/${group.id}`} className="edit-button">Delete Group</Link>
                            <button
                                className="show-tasks-button"
                                onClick={() =>
                                    setExpandedGroupId(prev => prev === group.id ? null : group.id)
                                }
                            >
                                {expandedGroupId === group.id ? "Hide Tasks" : "Show Tasks"}
                            </button>
                        </div>

                        {/* Task list(shows when expanded)*/}
                        {expandedGroupId === group.id && (
                            <div className="group-tasks">
                                <strong>Tasks in Group:</strong>
                                {group.group_tasks ? (
                                    <ul>
                                        {group.group_tasks.split(',').map((task, index) => (
                                            <li key={index}>{task.trim()}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No tasks assigned to this group.</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );


}
