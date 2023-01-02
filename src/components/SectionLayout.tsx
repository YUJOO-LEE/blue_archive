import { ReactNode, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ScrollContext } from './ContextAPI';

const SectionLayout = ({ children, pageNum }: { children: ReactNode; pageNum: number }) => {
  const { state, dispatch, setIsLoading } = useContext(ScrollContext);
  const curSection = useRef<HTMLDivElement>(null);

  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();

    const { deltaY } = e;
    if (!setIsLoading) return;
    if ((deltaY < 0 && pageNum === 1) || (deltaY > 0 && pageNum === 3)) return;

    setIsLoading(true);

    setTimeout(() => {
      if (deltaY > 0) {
        // 스크롤 내릴 때
        dispatch({type: 'NEXT', curPage: pageNum});
      } else if (deltaY < 0) {
        // 스크롤 올릴 때
        dispatch({type: 'PREV', curPage: pageNum});
      }
    }, 1000);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
    <Section ref={curSection} className={state === pageNum ? 'on' : undefined}>
      {children}
    </Section>
  )
}

export default SectionLayout;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: none;

  &.on{
    display: block;
  }
`;