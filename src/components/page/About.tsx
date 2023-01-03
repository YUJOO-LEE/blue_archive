import styled from 'styled-components';
import SectionLayout from './SectionLayout';

const About = ({ pageNum }: { pageNum: number }) => {
  return (
    <SectionLayout pageNum={pageNum}>
      <Section>
      page{pageNum}
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

  background-color: pink;
`;