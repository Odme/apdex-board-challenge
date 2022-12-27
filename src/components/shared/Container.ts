import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  max-width: ${({ theme }) => theme.spacing(420)};
  margin: 0 auto;
  padding-top: 15vh;
`;

export default Container;
