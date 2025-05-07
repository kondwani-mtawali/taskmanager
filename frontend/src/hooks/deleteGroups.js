/**
 * deleteGroups.js
 * Kondwani Mtawali
 * React Query hook to delete a group by its ID
 */
import { API_URL } from "../constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useGroupDelete() {
    const queryClient = useQueryClient(); //Accesses query cache

    //Mutation function: id used to identify group
    return useMutation({
        mutationFn: async (id) => {
            const response = await fetch(`${API_URL}/groups/${id}/`, {
                method: "DELETE", //Delete method for removing it from API
            });
            if (!response.ok) {
                throw new Error("FAILED GROUP DELETE");
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["groups"]); // Automatically refetches list of groups
        }
    });
}
