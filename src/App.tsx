import { useContext } from 'react';
import styled from 'styled-components';
import About from './components/About';
import Community from './components/Community';
import { ScrollContext } from './components/ContextAPI';
import Layout from './components/Layout';
import Loading from './components/Loading';
import Media from './components/Media';

const App = () => {
  const { IsLoading } = useContext(ScrollContext);

  return (
    <>
      <Layout>
        <Main>
          <About pageNum={1} />
          <Media pageNum={2} />
          <Community pageNum={3} />
        </Main>
      </Layout>
      {IsLoading && <Loading />}
    </>
  )
}

export default App;

const Main = styled.main`
  perspective: 1000px;
`;