import styled from 'styled-components';

const Content = styled.main`
  display: grid;
  grid-area: content;
  gap: ${({ theme }) => theme.spacing(15)};
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
`;

export default Content;
