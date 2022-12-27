/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import useUi from '../hooks/useUi';

const SwitcherWrapper = styled.form`
  & > input {
    height: ${({ theme }) => theme.spacing(9)};
    width: ${({ theme }) => theme.spacing(9)};
    margin: 0 ${({ theme }) => theme.spacing(4)};
  }
`;

const ViewSwitcher = () => {
  const {
    toggleViewMode, listMode, listModeLabel, gridModeLabel,
  } = useUi();

  const onChangeInputHandler: ChangeEventHandler<HTMLInputElement> = () => {
    toggleViewMode();
  };

  return (
    <SwitcherWrapper>
      <input id="show" name="show" type="checkbox" onChange={onChangeInputHandler} />
      <label htmlFor="show">{listMode ? listModeLabel : gridModeLabel}</label>
    </SwitcherWrapper>
  );
};

export default ViewSwitcher;
