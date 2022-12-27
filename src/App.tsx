import AppTitle from './components/HeaderTitle';
import HostList from './components/HostList';
import Container from './components/shared/Container';
import Content from './components/shared/Content';
import Header from './components/shared/Header';
import Layout from './components/shared/Layout';

const App = () => (
  <Container>
    <Layout>
      <Header>
        <AppTitle />
      </Header>
      <Content>
        <HostList />
      </Content>
    </Layout>
  </Container>
);

export default App;
