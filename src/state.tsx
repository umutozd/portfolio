import React from "react";

export interface AppState {
  pageTabIndex: number;
  setPageTabIndex: (newIndex: number) => void;
}

export const state = {
  pageTabIndex: 0,
} as AppState;

export const AppContext = React.createContext<AppState>(state);
