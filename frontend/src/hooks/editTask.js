/**
 * editTask.js
 * Kondwani Mtawali
 * React query hook to fetch task 
 * Second hook used to edit tasks
 */
import { API_URL } from "../constants";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Function to fetch task by its ID
export function useTask(id) {
    return useQuery({
        queryKey: ["task", id], // Separate cache key for each task
        queryFn: async () => {
            const response = await fetch(`${API_URL}/tasks/${id}/`);
            if (!response.ok) {
                throw new Error("Failed to fetch task");
            }
            return response.json(); //JSON promise returned to async function
        }
    });
}

export function useTaskUpdate(id) {
    const queryClient = useQueryClient(); // Sets access to cache

    // Mutation function responsible for PATCH request
    return useMutation({
        mutationFn: async (updatedTask) => {
            const response = await fetch(`${API_URL}/tasks/${id}/`, {
                method: "PATCH", // PATCH request for updates
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedTask) // converts object to JSON string
            });
            if (!response.ok) {
                throw new Error("Failed to update task");
            }
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["tasks"]); // Automatically re-fetches updated task list
            queryClient.invalidateQueries(["task", id]); //Automatically re-fetches updated task
        }
    });
}
