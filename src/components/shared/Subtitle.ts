import styled from 'styled-components';
import Title from './Title';

const Subtitle = styled(Title)`
  font-size: ${({ theme }) => theme.spacing(9)};
  font-weight: normal;
  line-height: 1.2;
  margin: 0;
`;

export default Subtitle;
