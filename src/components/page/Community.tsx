import { useRef } from 'react';
import styled from 'styled-components';
import SectionLayout from './SectionLayout';
import useIntersection from '../../hooks/useIntersection';

const Community = ({ pageNum }: { pageNum: number }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const intersecting = useIntersection(sectionRef);

  return (
    <SectionLayout pageNum={pageNum}>
      <Section ref={sectionRef} className={intersecting ? 'on' : undefined}>
        <article>1</article>
        <article>2</article>
        <article>3</article>
        <article>4</article>
      </Section>
    </SectionLayout>
  )
}

export default Community;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: yellowgreen;

  article{
    width: 180px;
    height: 230px;
    background-color: #fff;

    transition: 0.5s 0.5s;
    transform: translateY(50%);
    opacity: 0;

    &:nth-of-type(2){
      transition-delay: 0.7s;
      transform: translateY(-50%);
    }
    &:nth-of-type(3){
      transition-delay: 0.9s;
    }
    &:nth-of-type(4){
      transition-delay: 1.1s;
      transform: translateY(-50%);
    }
  }

  &.on{
    article{
      transform: translateY(0);
      opacity: 1;
    }
  }
`;