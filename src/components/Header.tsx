import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <h1>Blue Archive</h1>
      <GNB id='GNB'>
        <ul>
          <li><a href='#'>게임소개</a></li>
          <li><a href='#'>미디어</a></li>
          <li><a href='#'>커뮤니티</a></li>
          <li><a href='#'>쿠폰함</a></li>
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

  background-color: #fff;
`;

const GNB = styled.nav`
  ul{
    display: flex;
  }
`;