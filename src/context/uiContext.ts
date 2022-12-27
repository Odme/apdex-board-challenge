import { createContext } from 'react';

export interface UiState {
  listMode: boolean;
  toggleViewMode: () => void;
  listModeLabel: string;
  gridModeLabel: string;
}

export const initialContext = {
  listMode: false,
  toggleViewMode: () => null,
  gridModeLabel: 'Show as list',
  listModeLabel: 'Show as an awesome grid',
};

export const UiContext = createContext<UiState>(initialContext);
