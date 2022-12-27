import {
  FC, ReactNode, useCallback, useMemo, useState,
} from 'react';
import { DataContext, initialContext, HostAppData } from '../context/dataContext';
import { HostApp } from '../interfaces/hostApp';

interface DataProviderProps {
  children: ReactNode;
}

export const stateReducer = (
  prevState: HostAppData,
  newState: Partial<HostAppData>,
): HostAppData => ({
  ...prevState,
  ...newState,
});

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [state, setState] = useState(initialContext);
  // O(1)
  const addAppToHosts = useCallback((newApp: HostApp) => {
    setState((curState) => {
      curState.hostApps.push(newApp);
      return { ...curState };
    });
  }, []);
  // O(n)
  const removeAppFromHosts = useCallback((newApp: HostApp) => {
    const newHostApps = state.hostApps.filter((app) => app.name !== newApp.name);
    setState((curState) => ({ ...curState, hostApps: [...newHostApps] }));
  }, [state.hostApps]);
  // O(1)
  const value = useMemo(() => ({
    hostApps: state.hostApps,
    addAppToHosts,
    removeAppFromHosts,
  }), [addAppToHosts, removeAppFromHosts, state.hostApps]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
