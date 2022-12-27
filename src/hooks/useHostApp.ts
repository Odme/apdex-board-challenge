import { useCallback, useMemo } from 'react';
import { HostAppData } from '../context/dataContext';
import useData from './useData';

export const stateReducer = (
  prevState: HostAppData,
  newState: Partial<HostAppData>,
): HostAppData => ({
  ...prevState,
  ...newState,
});

const useHostApp = () => {
  const { hostApps } = useData();
  // O(n log n)
  const sortedApps = useMemo(() => (
    hostApps.sort((a, b) => b.apdex - a.apdex)
  ), [hostApps]);
  // O(n^2)
  const getTopAppsByHost = useCallback((hostname: string, slice = 25) => {
    const appsByHosts = sortedApps.filter((app) => app.host.includes(hostname)).slice(0, slice);
    return appsByHosts;
  }, [sortedApps]);
  // O(n^2)
  const getAllHost = useCallback(() => {
    const hostByApps = sortedApps.flatMap((app) => app.host);
    const hosts = new Set<string>(hostByApps);
    return [...hosts];
  }, [sortedApps]);

  return {
    hostApps,
    sortedApps,
    getAllHost,
    getTopAppsByHost,
  };
};

export default useHostApp;
