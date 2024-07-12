import { createStore } from "zustand/vanilla";

export type AppState = {
  sidebarOpen: boolean;
};
export type AppActions = {
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

export type AppStore = AppState & AppActions;

export const initAppStore = (): AppState => {
  return { sidebarOpen: false };
};

export const defaultAppState = {
  sidebarOpen: false,
};

export const createAppStore = (initState: AppState = defaultAppState) => {
  return createStore<AppStore>()((set) => ({
    sidebarOpen: false,
    openSidebar: () => set({ sidebarOpen: true }),
    closeSidebar: () => set({ sidebarOpen: false }),
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  }));
};
