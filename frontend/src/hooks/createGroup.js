/**
 * createGroup.js
 * Kondwani Mtawali
 * Custom hook to create a new group
 */

import { API_URL } from "../constants";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

/**
 * Custom hook to create a new group
 */
export function useGroupCreate() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [groupTasks, setGroupTasks] = useState("");
    const [participants, setParticipants] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successful, setSuccessful] = useState(false);

    // Mutation function for group creation
    const mutation = useMutation({
        mutationFn: async () => {
            setLoading(true);

            const response = await fetch(`${API_URL}/groups/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    participants: participants,
                    group_tasks: groupTasks,
                })
            });

            if (!response.ok) {
                throw new Error("FAILED GROUP CREATION");
            }

            return response.json();
        },
        onSuccess: () => {
            setLoading(false);
            setSuccessful(true);
        },
        onError: (err) => {
            setLoading(false);
            setError(err);
            setSuccessful(false);
        }
    });

    return {
        name,
        setName,
        description,
        setDescription,
        groupTasks,
        setGroupTasks,
        participants,
        setParticipants,
        loading,
        error,
        successful,
        createGroup: mutation.mutate
    };
}
