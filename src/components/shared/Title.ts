import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.foreground[900]};
  font-size: ${({ theme }) => theme.spacing(17.5)};
  margin: 0;
`;

export default Title;
