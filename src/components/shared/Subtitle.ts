import styled from 'styled-components';
import Title from './Title';

const Subtitle = styled(Title)`
  font-size: ${({ theme }) => theme.spacing(9)};
  font-weight: normal;
  margin: 0;
`;

export default Subtitle;
