/**
 * createTask.js
 * Kondwani Mtawali
 * Custom hook to fetch the list of tasks from the backend
 * Custom hook to create new tasks through the backend API
 * 
 */

import { API_URL } from "../constants";
import { useState, useEffect } from "react";

//Custom hook to fetch list of tasks
export function useTaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch Tasks on component mount and manage loading/error states
    useEffect(() => {
        setLoading(true);
        fetch(API_URL + "/tasks/", {
            headers: {
                "Content-Type": "application/json" //returns a specified format(json in this case)
            }

        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                setLoading(false);
                throw new Error("Error getting data");
            })
            .then((json => {
                setLoading(false);
                setTasks(json);
            }))
            .catch((err) => {
                setError(err);
                setLoading(false);
            })
    }, [/*No Dependencies*/])

    return { tasks, loading, error }
}

// Custom hook to create a new Task through the backend API
export function useTaskCreate() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [groupId, setGroupId] = useState(""); // Group Id for assigning
    const [taskDue, setTaskDue] = useState("");
    const [externalLink, setExternalLink] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("3");
    const [attachment, setAttachment] = useState(null); // handles files
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [error, setError] = useState(null);


    const createTask = (event) => {
        event.preventDefault();
        setLoading(true);

        //Form Data to handle different variables
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("task_due", taskDue);
        formData.append("external_link", externalLink);
        formData.append("category", category);
        formData.append("priority", priority);

        //adding file attachements
        if (attachment) {
            formData.append("attachment", attachment);
        }

        //Add group ID to form data and uses ID as group key
        if (groupId) {
            formData.append("group", groupId);
        }

        fetch(API_URL + "/tasks/", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    setLoading(true);
                    setSuccessful(true);
                    return;
                }
                throw new Error("Something Went Wrong!");
            })
            .catch(err => {
                setLoading(false);
                setError(err);
                setSuccessful(false);
            })
    };

    return {
        title,
        setTitle,
        description,
        setDescription,
        taskDue,
        setTaskDue,
        groupId,
        setGroupId,
        externalLink,
        setExternalLink,
        category,
        setCategory,
        priority,
        setPriority,
        loading,
        error,
        successful,
        createTask,
    }
}