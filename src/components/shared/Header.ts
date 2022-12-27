import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  grid-area: header;
  color: ${({ theme }) => theme.colors.foreground[900]};

  & > div {
    display: flex;
    align-items: baseline;
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export default Header;
