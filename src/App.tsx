import AppTitle from './components/HeaderTitle';
import HostList from './components/HostList';
import Container from './components/shared/Container';
import Content from './components/shared/Content';
import Header from './components/shared/Header';
import Layout from './components/shared/Layout';
import useUi from './hooks/useUi';

const App = () => {
  const { listMode } = useUi();

  return (
    <Container>
      <Layout>
        <Header>
          <AppTitle />
        </Header>
        <Content listMode={listMode}>
          <HostList />
        </Content>
      </Layout>
    </Container>
  );
};

export default App;
