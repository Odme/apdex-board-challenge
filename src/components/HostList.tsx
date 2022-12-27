import { useMemo } from 'react';
import useHostApp from '../hooks/useHostApp';
import HostItem from './HostItem';

const HostList = () => {
  const { getAllHost } = useHostApp();

  const hosts = useMemo(() => getAllHost(), [getAllHost]);

  return (
    <>
      {hosts.map((host) => <HostItem key={host} hostname={host} />)}
    </>
  );
};

export default HostList;
