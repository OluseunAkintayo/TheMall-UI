import styled from "styled-components";
import { Container, SubTitle, Text, Title, Wrapper } from "../styled";
import { Facebook, Instagram, MapPin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Divider />
      <Wrapper>
        <Container>
          <FooterGrid>
            <div className="footer-grid-item">
              <Title>E-Mall</Title>
              <LinkContainer>
                <Text size={14} color="#9ca3af">
                  Donec ex tellus, consequat sed dictum non, rhoncus in orci. Aliquam mollis malesuada ipsum, blandit sodales enim porta vel.
                </Text>
              </LinkContainer>
              <LocationIcon>
                <MapPin />
                <Text color="#9ca3af" size={14}>Donec ex tellus, consequat sed dictum non</Text>
              </LocationIcon>
            </div>
            <div className="footer-grid-item">
              <SubTitle>Products</SubTitle>
              <LinkContainer>
                <Link to="#">Phones</Link>
                <Link to="#">Laptops</Link>
                <Link to="#">Appliances</Link>
                <Link to="#">Software</Link>
                <Link to="#">Photography</Link>
              </LinkContainer>
            </div>
            <div className="footer-grid-item">
              <SubTitle>Links</SubTitle>
              <LinkContainer>
                <Link to="#">Blog</Link>
                <Link to="#">Support</Link>
                <Link to="#">Contact Us</Link>
                <Link to="#">Refund Policy</Link>
                <Link to="#">Privacy Policy</Link>
              </LinkContainer>
            </div>
            <div className="footer-grid-item">
              <SubTitle>Connect with us</SubTitle>
              <Socials>
                <Text color="#9ca3af" size={14}>Follow us on our social media handles</Text>
                <div className="socials-icons">
                  <a href="#"><Facebook /></a>
                  <a href="#"><Instagram /></a>
                  <a href="#"><Twitter /></a>
                  <a href="#"><Youtube /></a>
                </div>
              </Socials>
              <Newsletter>
                <Text color="#9ca3af" size={14}>Subscribe to our newsletter for amazing deals</Text>
                <form className="footer-newsletter-form">
                  <input placeholder="Email address" type="email" required />
                  <button>Subscribe</button>
                </form>
              </Newsletter>
            </div>
          </FooterGrid>
        </Container>
      </Wrapper>
      <Wrapper style={{ background: '#f3f4f6' }}>
        <Container>
          <Text size={14}>
            <span>The Mall</span> &copy; {new Date().getFullYear()}. All rights reserved
          </Text>
        </Container>
      </Wrapper>
    </footer>
  )
}

export default Footer;

const FooterGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  @media(max-width: 990px) {
    grid-template-columns: repeat(3, 1fr);
    .footer-grid-item:first-child {
      grid-column: 1 / 4;
    }
  }
  @media(max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    .footer-grid-item:first-child {
      grid-column: 1 / 3;
    }
    .footer-grid-item:nth-child(4) {
      grid-column: 1 / 3;
    }
  }
`;
const LocationIcon = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0.25rem;
  margin-top: 1rem;
  svg {
    stroke: red;
  }
`;
const Divider = styled.div`
  height: 1px;
  background-color: #9ca3af;
`;
const LinkContainer = styled.div`
  display: grid;
  margin-top: 0.75rem;
  gap: 0.5rem;
  a {
    color: #9ca3af;
    font-size: 14px;
  }
`;
const Socials = styled.div`
  margin-top: 0.75;
  .socials-icons {
    margin: 0.5rem 0;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(4, 36px);
    a {
      svg {
        stroke: #9ca3af;
        transition: ease-in-out 0.3s;
      }

      &:hover svg {
        stroke: #034078;
        scale: 1.2;
      }
    }
  }
`;

const Newsletter = styled.div`
  width: 100%;
  .footer-newsletter-form {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 80px;
    margin-top: 0.25rem;
    input {
      all: unset;
      width: 100%;
      border: 1px solid #9ca3af70;
      padding: 0.25rem 0.5rem 0.375rem 0.25rem;
      font-family: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 12px;
      &:focus {
        border: 1px solid #001F54;
      }
    }
    button {
      all: unset;
      text-align: center;
      background-color: #001F54;
      font-family: Roboto;
      color: #ffffff;
      font-family: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;