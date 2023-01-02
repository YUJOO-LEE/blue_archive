import styled from 'styled-components';
import SectionLayout from './SectionLayout';

const Community = ({ pageNum }: { pageNum: number }) => {
  return (
    <SectionLayout pageNum={pageNum}>
      <Section>
      page{pageNum}
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

  background-color: yellowgreen;
`;