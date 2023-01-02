import { ReactNode, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ScrollContext } from './ContextAPI';

const SectionLayout = ({ children, pageNum }: { children: ReactNode; pageNum: number }) => {
  const { dispatch } = useContext(ScrollContext);
  const curSection = useRef<HTMLDivElement>(null);

  const wheelHandler = (e: { deltaY: number }) => {
    const { deltaY } = e;

    if (deltaY > 0) {
      // 스크롤 내릴 때
      dispatch({type: 'NEXT', curPage: pageNum});
    } else {
      // 스크롤 올릴 때
      dispatch({type: 'PREV', curPage: pageNum});
    }
  };

  useEffect(() => {
    if (!curSection.current) return;

    curSection.current.addEventListener('wheel', wheelHandler);
    return () => {
      if (!curSection.current) return;

      curSection.current.removeEventListener('wheel', wheelHandler);
    };
  }, [curSection.current]);


  return (
    <Section ref={curSection}>
      {children}
    </Section>
  )
}

export default SectionLayout;

const Section = styled.section`
  width: 100%;
  height: 100vh;
`;