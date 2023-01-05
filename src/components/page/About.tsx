import { useRef } from 'react';
import styled from 'styled-components';
import useIntersection from '../../hooks/useIntersection';
import SectionLayout from './SectionLayout';

const About = ({ pageNum }: { pageNum: number }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const intersecting = useIntersection(sectionRef);

  return (
    <SectionLayout pageNum={pageNum}>
      <Section ref={sectionRef} className={intersecting ? 'on' : undefined}>
        <article>
          article 1
        </article>
        <article>
          article 2
        </article>
      </Section>
    </SectionLayout>
  )
}

export default About;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: pink;

  article{
    width: 30%;
    height: 40%;
    background-color: #fff;

    transition: 0.5s 0.5s;
    transform: translateY(10%);
    opacity: 0;

    &:nth-of-type(2){
      transition-delay: 0.7s;
    }
  }

  &.on{
    article{
      transform: translateY(0);
      opacity: 1;
    }
  }
`;