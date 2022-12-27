import {
  FC, ReactNode, useCallback, useMemo, useState,
} from 'react';
import { UiContext, initialContext } from '../context/uiContext';

interface UiProviderProps {
  children: ReactNode;
}

const UiProvider: FC<UiProviderProps> = ({ children }) => {
  const [state, setState] = useState(initialContext);
  // O(1)
  const toggleViewMode = useCallback(() => {
    setState((curState) => ({ ...curState, listMode: !curState }));
  }, []);
  // O(1)
  const value = useMemo(() => ({
    ...state,
    toggleViewMode,
  }), [state, toggleViewMode]);

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export default UiProvider;
