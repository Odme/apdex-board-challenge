import { createContext } from 'react';
import { HostApp } from '../interfaces/hostApp';
import hostAppFixture from '../api/hostAppFixture.json';

export interface HostAppData {
  hostApps: Array<HostApp>;
  addAppToHosts: (app: HostApp) => void;
  removeAppFromHosts: (app: HostApp) => void;
}

export const initialContext = {
  hostApps: hostAppFixture,
  addAppToHosts: () => null,
  removeAppFromHosts: () => null,
};

export const DataContext = createContext<HostAppData>(initialContext);
