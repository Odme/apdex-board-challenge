import styled from 'styled-components';

export const AppText = styled.p`
  color: ${({ theme }) => theme.colors.highlight[800]};
  margin: 0;
`;

export const AppBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing(8)};
  font-size: ${({ theme }) => theme.spacing(8)};

  :hover {
    cursor: pointer;
    transform: perspective(${({ theme }) => theme.spacing(10)}) translateZ(${({ theme }) => theme.spacing(0.5)});
  }

  & > ${AppText}:first-of-type {
    font-size: ${({ theme }) => theme.spacing(6.5)};
    font-weight: bold;
    line-height: 1.5;
  }
`;
