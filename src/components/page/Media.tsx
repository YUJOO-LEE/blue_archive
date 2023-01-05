import { useRef } from 'react';
import styled from 'styled-components';
import SectionLayout from './SectionLayout';
import useIntersection from '../../hooks/useIntersection';

const Media = ({ pageNum }: { pageNum: number }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const intersecting = useIntersection(sectionRef);

  return (
    <SectionLayout pageNum={pageNum}>
      <Section ref={sectionRef} className={intersecting ? 'on' : undefined}>
        <article>page{pageNum}</article>
      </Section>
    </SectionLayout>
  )
}

export default Media;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  article{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
    transition: 0.5s 0.5s;
    transform: scale(10);
    opacity: 0;
  }

  &.on{
    article{
      transform: scale(1);
      opacity: 1;
    }
  }
`;