import { useContext } from 'react';
import styled from 'styled-components';
import About from './components/page/About';
import Community from './components/page/Community';
import { ScrollContext } from './components/common/ContextAPI';
import Layout from './components/common/Layout';
import Loading from './components/common/Loading';
import Media from './components/page/Media';

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