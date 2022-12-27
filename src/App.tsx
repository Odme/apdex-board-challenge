import AppTitle from './components/AppTitle';
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
      <Content />
    </Layout>
  </Container>
);

export default App;
