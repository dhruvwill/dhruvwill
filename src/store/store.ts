import BlogSidebar from "@/components/sections/BlogSidebar";
import { createStore } from "zustand/vanilla";

export type AppState = {
  sidebarOpen: boolean;
  blogSidebarOpen: boolean;
};
export type AppActions = {
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;

  openBlogSidebar: () => void;
  closeBlogSidebar: () => void;
  toggleBlogSidebar: () => void;
  setBlogSidebar: (open: boolean) => void;
};

export type AppStore = AppState & AppActions;

export const initAppStore = (): AppState => {
  return { sidebarOpen: false, blogSidebarOpen: false };
};

export const defaultAppState = {
  sidebarOpen: false,
  blogSidebarOpen: false,
};

export const createAppStore = (initState: AppState = defaultAppState) => {
  return createStore<AppStore>()((set) => ({
    sidebarOpen: false,
    openSidebar: () => set({ sidebarOpen: true }),
    closeSidebar: () => set({ sidebarOpen: false }),
    toggleSidebar: () =>
      set((state) => ({
        sidebarOpen: !state.sidebarOpen,
      })),

    blogSidebarOpen: false,
    openBlogSidebar: () => set({ blogSidebarOpen: true }),
    closeBlogSidebar: () => set({ blogSidebarOpen: false }),
    toggleBlogSidebar: () =>
      set((state) => ({ blogSidebarOpen: !state.blogSidebarOpen })),
    setBlogSidebar: (value: boolean) => set({ blogSidebarOpen: value }),
  }));
};
