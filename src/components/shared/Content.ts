import styled from 'styled-components';

interface ContentProps {
  listMode?: boolean;
}

const Content = styled.main<ContentProps>`
  display: grid;
  grid-area: content;
  gap: ${({ theme }) => theme.spacing(15)};
  grid-template-columns: ${({ listMode }) => `${listMode ? '1fr' : 'repeat(auto-fit, minmax(375px, 1fr))'}`};
`;

export default Content;
