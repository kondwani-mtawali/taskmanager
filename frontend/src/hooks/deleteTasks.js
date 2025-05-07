/**
 * deleteTask.js
 * Kondwani Mtawali
 * React Query hook for deleting tasks
 */

import { API_URL } from "../constants";
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useTaskDelete() {
    const queryClient = useQueryClient(); //Accesses React Query Cache

    // Mutation function responsible for sending delete request
    return useMutation({
        mutationFn: async (id) => {
            const response = await fetch(`${API_URL}/tasks/${id}/`, {
                method: 'DELETE', //Delete method to remove it from API

            });
            if (!response.ok) {
                throw new Error('FAILED DELETION');
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['tasks']); //Automatically re-fetches list of updated tasks
        }
    });
}
