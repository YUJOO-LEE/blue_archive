import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  const [IsEnd, setIsEnd] = useState(false);

  setTimeout(()=>{
    setIsEnd(true);
  }, 1000);

  return (
    <LoadingWrap className={IsEnd ? 'ended' : undefined}>
      <Obj><img src='https://lwi.nexon.com/m_ba/brand/chg_page/obj.png' alt='' /></Obj>
      <Triangle top={-10} left={10}><img src='https://lwi.nexon.com/m_ba/brand/chg_page/ef01.png' alt='' /></Triangle>
      <Triangle top={40} left={20}><img src='https://lwi.nexon.com/m_ba/brand/chg_page/ef02.png' alt='' /></Triangle>
      <Triangle top={-10} left={50}><img src='https://lwi.nexon.com/m_ba/brand/chg_page/ef03.png' alt='' /></Triangle>
      <Triangle top={10} left={80}><img src='https://lwi.nexon.com/m_ba/brand/chg_page/ef04.png' alt='' /></Triangle>
      <Triangle top={10} left={20}><img src='https://lwi.nexon.com/m_ba/brand/chg_page/ef05.png' alt='' /></Triangle>
      <Triangle top={30} left={70}><img src='https://lwi.nexon.com/m_ba/brand/chg_page/ef06.png' alt='' /></Triangle>
      <Triangle top={35} left={45}><img src='https://lwi.nexon.com/m_ba/brand/chg_page/ef07.png' alt='' /></Triangle>
      <Triangle top={40} left={-10}><img src='https://lwi.nexon.com/m_ba/brand/chg_page/ef08.png' alt='' /></Triangle>
      <End><img src='https://nxm-clw-cdn.dn.nexoncdn.co.kr/bluearchive/img/brand/chg_page/end_chg.png' alt='' /></End>
    </LoadingWrap>
  )
}

export default Loading;

const rotate = keyframes`
  0% { transform: rotate(0deg) scale(1) }
  100% { transform: rotate(360deg) scale(3) }
`;

const shake = keyframes`
  0% { transform: translate(0, 0) }
  100% { transform: translate(1%, 1%) }
`;

const scale = keyframes`
  0% { transform: scale(0) }
  100% { transform: scale(1) }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(2) }
  10% { opacity: 1; transform: scale(1) }
  90% { opacity: 1; transform: scale(1) }
  100% { opacity: 1; transform: scaleY(0) }
`;

const LoadingWrap = styled.aside`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  opacity: 0;
  animation: ${fadeIn} 1.5s linear 1 forwards;

  &.ended span{
    opacity: 0;
    display: none;
  }
`;

const Obj = styled.span`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${shake} 0.3s linear infinite alternate forwards;
`;

const Triangle = styled.span<{top: number; left: number}>`
  display: inline-block;
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  animation: ${rotate} 1s linear infinite forwards;
`;

const End = styled.p`
  display: inline-block;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  transform: scale(0);
  animation: ${scale} 0.1s 0.7s ease-out 1 forwards;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;