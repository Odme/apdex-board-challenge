import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing(15)};
  height: auto;
  padding: ${({ theme }) => theme.spacing(15)};
`;

export default Layout;
