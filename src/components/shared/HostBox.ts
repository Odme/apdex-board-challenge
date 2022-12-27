import styled from 'styled-components';

export const HostTitle = styled.h1`
  font-size: ${({ theme }) => theme.spacing(8)};
  margin: 0;
`;

export const HostBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11.5)};
  padding: ${({ theme }) => theme.spacing(15)};
  background-color: ${({ theme }) => theme.colors.background[100]};
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow: 0 0 0 ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.colors.background[600]};

  & > ${HostTitle} {
    color: ${({ theme }) => theme.colors.foreground[900]};
  }
`;
