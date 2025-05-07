/**
 * viewGroups.js
 * Kondwani Mtawali
 * React query hook used to view Groups
 */
import { API_URL } from "../constants";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook to fetch groups the user belongs to
 */
export function useGroupList() {
    return useQuery({
        queryKey: ["groups"],
        queryFn: async () => {
            const response = await fetch(`${API_URL}/groups/`);
            if (!response.ok) {
                throw new Error("Failed to load groups");
            }
            return response.json();
        }
    });
}
