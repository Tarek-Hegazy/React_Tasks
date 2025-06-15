import { create } from "zustand";
import { getSingleUserAPI, getUsersAPI } from "../api/userApi";

const useUserStore = create((set) => ({
  users: [],
  user: null,
  isLoading: false,
  hasErrors: null,

  searchUsers: async (params) => {
    set({ isLoading: true, hasErrors: null });
    try {
      const response = await getUsersAPI();
      const allUsers = response.data;

      const filteredUsers = allUsers.filter((user) => {
        return Object.entries(params).every(([key, value]) => {
          if (!value) return true;
          return (
            String(user[key]).toLowerCase() === String(value).toLowerCase()
          );
        });
      });

      if (filteredUsers.length === 0) {
        throw new Error("No users found matching all criteria");
      }

      set({ user: filteredUsers[0], isLoading: false });
    } catch (error) {
      console.error("Search error:", error);
      set({ user: null, hasErrors: error, isLoading: false });
    }
  },

  getUser: async (id) => {
    set({ isLoading: true, hasErrors: null });
    try {
      const response = await getSingleUserAPI({ id });
      if (!response.data?.[0]) throw new Error("User not found");
      set({ user: response.data[0], isLoading: false });
    } catch (error) {
      console.error("Error fetching user:", error);
      set({ user: null, hasErrors: error, isLoading: false });
    }
  },

  getUsers: async () => {
    set({ isLoading: true, hasErrors: null });
    try {
      const response = await getUsersAPI();
      set({ users: response.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching users:", error);
      set({ hasErrors: error, isLoading: false });
    }
  },

  clearUser: () => set({ user: null, hasErrors: null }),

  reset: () =>
    set({ users: [], user: null, isLoading: false, hasErrors: null }),
}));

export default useUserStore;
