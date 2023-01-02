import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrap>
      <Triangle top={0} left={0} />
      <Triangle top={0} left={0} />
      <Triangle top={0} left={0} />
      <Triangle top={0} left={0} />
      <Triangle top={0} left={0} />
      <Triangle top={0} left={0} />
    </LoadingWrap>
  )
}

export default Loading;

const LoadingWrap = styled.aside`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
`;

const Triangle = styled.div<{top: number, left: number}>`
  box-sizing: content-box;
  width: 0;
  height: 0;
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid white;
`;