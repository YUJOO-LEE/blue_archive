import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWarp>
      YUJOO-LEE @ www.leeyujoo.com
    </FooterWarp>
  )
}

export default Footer;

const FooterWarp = styled.footer`
  width: 100%;
  height: 30px;
  position: fixed;
  left: 0;
  bottom: 0;

  background-color: #fff;
  font: 12px arial;
  text-align: center;
  line-height: 30px;
  color: #444;
`;