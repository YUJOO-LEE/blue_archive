import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWarp>
      Footer
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
`;