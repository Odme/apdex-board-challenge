import Subtitle from './shared/Subtitle';
import Title from './shared/Title';
import ViewSwitcher from './ViewSwitcher';

const HeaderTitle = () => (
  <>
    <div>
      <Title>Apps by Host</Title>
      <Subtitle>for user test@test.com</Subtitle>
    </div>
    <ViewSwitcher />
  </>
);

export default HeaderTitle;
