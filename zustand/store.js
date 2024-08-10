import { create } from "zustand";

const useDrawerStore = create((set) => ({
  open: false,
  isRegister: false,

  register: () => set({ open: true, isRegister: true }),

  login: () => set({ open: true, isRegister: false }),

  toggleDrawer: () => set((state) => ({ open: !state.open })),

  closeDrawer: () => set({ open: false }),
}));

const useAuthStore = create((set) => ({
  authToken: null,
  setAuthToken: (token) => set({ authToken: token }),
  clearAuthToken: () => set({ authToken: null }),
}));

export { useDrawerStore, useAuthStore };
