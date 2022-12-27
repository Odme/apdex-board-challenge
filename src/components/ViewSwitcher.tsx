/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';

const SwitcherWrapper = styled.form`
  & > input {
    height: ${({ theme }) => theme.spacing(9)};
    width: ${({ theme }) => theme.spacing(9)};
    margin: 0 ${({ theme }) => theme.spacing(4)};
  }
`;

const ViewSwitcher = () => {
  const [, setAsList] = useState(false);

  const onChangeInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.target;
    setAsList(checked);
  };

  return (
    <SwitcherWrapper>
      <input id="show" name="show" type="checkbox" onChange={onChangeInputHandler} />
      <label htmlFor="show">Show as list</label>
    </SwitcherWrapper>
  );
};

export default ViewSwitcher;
