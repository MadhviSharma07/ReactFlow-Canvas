import { create } from "zustand";

interface AppStore {
  selectedAppId: string | null;
  selectedNodeId: string | null;

  activeInspectorTab: string;

  isMobilePanelOpen: boolean;

  setSelectedAppId: (id: string) => void;
  setSelectedNodeId: (id: string | null) => void;

  setActiveInspectorTab: (tab: string) => void;

  setMobilePanelOpen: (open: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  selectedAppId: null,
  selectedNodeId: null,

  activeInspectorTab: "config",

  isMobilePanelOpen: false,

  setSelectedAppId: (id) =>
    set({ selectedAppId: id }),

  setSelectedNodeId: (id) =>
    set({ selectedNodeId: id }),

  setActiveInspectorTab: (tab) =>
    set({ activeInspectorTab: tab }),

  setMobilePanelOpen: (open) =>
    set({ isMobilePanelOpen: open }),
}));