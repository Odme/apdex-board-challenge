import Subtitle from './shared/Subtitle';
import Title from './shared/Title';
import ViewSwitcher from './ViewSwitcher';

const AppTitle = () => (
  <>
    <div>
      <Title>Apps by Host</Title>
      <Subtitle>for user averylongemailadress@companyname.com</Subtitle>
    </div>
    <ViewSwitcher />
  </>
);

export default AppTitle;
