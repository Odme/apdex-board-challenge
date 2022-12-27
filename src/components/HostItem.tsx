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

  const onClickAppHandler = (name: string, version: number) => () => {
    // eslint-disable-next-line no-alert
    alert(`The release number of ${name} is: ${version}`);
  };

  return (
    <HostBox>
      <HostTitle>{hostname}</HostTitle>
      {apps.map(({ apdex, name, version }) => (
        <AppBox key={`${apdex}-${name}`} onClick={onClickAppHandler(name, version)}>
          <AppText>{apdex}</AppText>
          <AppText>{name}</AppText>
        </AppBox>
      ))}
    </HostBox>
  );
};

export default HostItem;
