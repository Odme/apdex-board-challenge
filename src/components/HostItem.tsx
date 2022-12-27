import { FC, useMemo } from 'react';

import { HostBox, HostTitle } from './shared/HostBox';
import useHostApp from '../hooks/useHostApp';
import { AppBox, AppText } from './shared/AppBox';

interface HostItemProps {
  hostname: string;
}

const HostItem: FC<HostItemProps> = ({ hostname }) => {
  const { getTopAppsByHost } = useHostApp();

  const apps = useMemo(() => getTopAppsByHost(hostname, 5), [getTopAppsByHost, hostname]);

  return (
    <HostBox>
      <HostTitle>{hostname}</HostTitle>
      {apps.map(({ apdex, name }) => (
        <AppBox key={`${apdex}-${name}`}>
          <AppText>{apdex}</AppText>
          <AppText>{name}</AppText>
        </AppBox>
      ))}
    </HostBox>
  );
};

export default HostItem;
