import { useContext } from 'react';
import styled from 'styled-components';
import { ScrollContext } from './ContextAPI';

const Header = () => {

  const { state, dispatch, setIsLoading } = useContext(ScrollContext);
  const clickHandler = (pageNum: number) => () => {
    if (!setIsLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      dispatch({type: 'MOVETO', curPage: pageNum});
    }, 1000);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <HeaderWrap>
      <Logo>YUJOO</Logo>
      <GNB id='GNB'>
        <ul>
          <li
            className={state === 1 ? 'on' : undefined}
            onClick={clickHandler(1)}
          >게임소개</li>
          <li
            className={state === 2 ? 'on' : undefined}
            onClick={clickHandler(2)}
          >미디어</li>
          <li
            className={state === 3 ? 'on' : undefined}
            onClick={clickHandler(3)}
          >커뮤니티</li>
          <li>쿠폰함</li>
        </ul>
      </GNB>
    </HeaderWrap>
  )
}

export default Header;

const HeaderWrap = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
  background-color: #fff;
`;

const Logo = styled.h1`
  margin: 0 20px;
`;

const GNB = styled.nav`
  ul{
    display: flex;
    gap: 20px;
    li{
      cursor: pointer;

      &.on{
        border-bottom: 1px solid #444;
      }
    }
  }
`;