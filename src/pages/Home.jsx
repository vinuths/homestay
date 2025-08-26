import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const lightPalette = {
  primaryBlue: "#0077FF",
  coral: "#FF6F61",
  background: "#F8FAFC",
  textPrimary: "#1F2937",
  textSecondary: "#6B7280",
  buttonHover: "#005FCC",
  sidebarBg: "#E3F2FD",
  cardBg: "#FFFFFF",
  borderColor: "#D1D5DB",
  footerGradientStart: "#0077FF",
  footerGradientEnd: "#005FCC",
  footerTextColor: "white",
};

const darkPalette = {
  primaryBlue: "#4A90E2",
  coral: "#FF6F61",
  background: "#121212",
  textPrimary: "#E0E0E0",
  textSecondary: "#A0A0A0",
  buttonHover: "#357ABD",
  sidebarBg: "#1E1E1E",
  cardBg: "#242424",
  borderColor: "#333333",
  footerGradientStart: "#1E1E1E",
  footerGradientEnd: "#121212",
  footerTextColor: "#E0E0E0",
};
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: background 0.3s ease, color 0.3s ease;
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  background: ${({ theme }) => theme.background};
`;

const Sidebar = styled.div`
  width: 220px;
  padding: 1.5rem;
  background: ${({ theme }) => theme.sidebarBg};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-right: 1px solid ${({ theme }) => theme.borderColor};

  a {
    color: ${({ theme }) => theme.primaryBlue};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 1.1rem;
    &:hover {
      color: ${({ theme }) => theme.coral};
    }
  }

  svg {
    fill: currentColor;
    width: 24px;
    height: 24px;
  }

  h4 {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 1rem;
  }
`;

const Container = styled.div`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: ${({ theme }) => theme.cardBg};
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 119, 255, 0.15);
`;

const Content = styled.div`
  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.textPrimary};
    margin-bottom: 1rem;
    font-weight: 800;
  }
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

const ImageBox = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    height: 100%;
  }
`;

const BookButton = styled(Link)`
  background: ${({ theme }) => theme.primaryBlue};
  color: white;
  padding: 0.85rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 5px 15px rgba(0, 119, 255, 0.4);
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.buttonHover};
    box-shadow: 0 8px 25px rgba(0, 95, 204, 0.6);
  }
`;

const Section = styled.section`
  margin-top: 3.5rem;
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.primaryBlue};
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const ReviewCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 1.8rem 2rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 1.25rem;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primaryBlue};
`;

const ReviewContent = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.6;
  font-size: 1.1rem;
`;

const Footer = styled.footer`
  background: ${({ theme }) =>
    theme === darkPalette
      ? 'linear-gradient(135deg, #1E1E1E, #121212)' // Dark mode gradient
      : `linear-gradient(135deg, ${theme.primaryBlue}, ${theme.buttonHover})`}; // Light mode gradient
  color: ${({ theme }) => (theme === darkPalette ? '#E0E0E0' : 'white')};
  padding: 3rem 1rem;
  text-align: center;
  position: relative;
`;


const FooterLogo = styled.h4`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 800;
  color: white;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.coral};
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  svg {
    fill: white;
    width: 24px;
    height: 24px;
    transition: fill 0.3s ease;
    cursor: pointer;

    &:hover {
      fill: ${({ theme }) => theme.coral};
    }
  }
`;

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    aria-labelledby="instagramIconTitle"
    stroke="none"
  >
    <title id="instagramIconTitle">Instagram</title>
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.5 2.25a1 1 0 110 2 1 1 0 010-2zm-4.25 1a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zm0 1.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z" />
  </svg>
);

const DarkModeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.primaryBlue};
  border: none;
  color: white;
  padding: 0.6rem 1rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.buttonHover};
  }
`;

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkPalette : lightPalette}>
      <GlobalStyle />
      <PageWrapper>
        <Helmet>
          <title>Home – My Homestay</title>
          <meta name="description" content="Experience comfort, charm, and nature at our homestay." />
        </Helmet>

        <DarkModeToggle onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </DarkModeToggle>

        <MainContent>
          <Sidebar>
            <h4>Stay Connected</h4>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
              @yourusername
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24px"
                height="24px"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 7.94 9.8v-6.93H7.9v-2.87h2.04V9.41c0-2.02 1.2-3.14 3.04-3.14.88 0 1.8.16 1.8.16v2h-1.03c-1.02 0-1.34.63-1.34 1.27v1.54h2.29l-.37 2.87h-1.92v6.93C18.56 20.87 22 16.84 22 12z" />
              </svg>
              Facebook
            </a>

            <h4 style={{ marginTop: '2rem' }}>Contact</h4>
            <p>Phone: +91‑9876543210</p>
            <p>
              Email:{" "}
              <a href="mailto:info@myhomestay.com" style={{ color: '#0077FF', textDecoration: 'none' }}>
                info@myhomestay.com
              </a>
            </p>

            <h4 style={{ marginTop: '2rem' }}>Why Choose Our Homestay?</h4>
            <ul style={{ paddingLeft: '1rem', color: darkMode ? '#E0E0E0' : '#1F2937', lineHeight: '1.6', fontSize: '1rem' }}>
              <li>🏞️ Spacious traditional Totti Mane surrounded by majestic mountains</li>
              <li>🌧️ Breathtaking views especially magical during the monsoon season</li>
              <li>🍳 Fully equipped kitchen perfect for cooking authentic local meals</li>
              <li>🥾 Access to nearby trekking trails for adventure enthusiasts</li>
              <li>🏏 Large open spaces ideal for family activities like cricket and outdoor fun</li>
              <li>🏡 Cozy, authentic ambiance offering a memorable and peaceful stay</li>
            </ul>
          </Sidebar>

          <Container>
            <HeroSection>
              <Content>
                <h2>Welcome to My Homestay</h2>
                <p>Imagine waking up in nature, breathing fresh air, and feeling peace all around.</p>
                <BookButton to="/booking">Book Now</BookButton>
              </Content>
              <ImageBox>
                <img src="/assets/pexels-aflah-1622600-10585565.jpg" alt="Cozy homestay" />
              </ImageBox>
            </HeroSection>

            <Section>
              <SectionTitle>What Our Guests Say</SectionTitle>
              <ReviewCard>
                <ReviewHeader>
                  <Avatar src="/assets/guest1.jpg" alt="Guest 1" />
                  <div><strong>John Doe</strong><p>⭐⭐⭐⭐⭐</p></div>
                </ReviewHeader>
                <ReviewContent>"Exceptional hospitality in a peaceful setting."</ReviewContent>
              </ReviewCard>
              <ReviewCard>
                <ReviewHeader>
                  <Avatar src="/assets/guest2.jpg" alt="Guest 2" />
                  <div><strong>Jane Smith</strong><p>⭐⭐⭐⭐⭐</p></div>
                </ReviewHeader>
                <ReviewContent>"Cozy, calming, and truly unforgettable."</ReviewContent>
              </ReviewCard>
            </Section>
          </Container>
        </MainContent>

        <Footer>
          <FooterLogo>My Homestay</FooterLogo>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/rooms">Rooms</FooterLink>
            <FooterLink to="/booking">Booking</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
          <SocialIcons>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 7.94 9.8v-6.93H7.9v-2.87h2.04V9.41c0-2.02 1.2-3.14 3.04-3.14.88 0 1.8.16 1.8.16v2h-1.03c-1.02 0-1.34.63-1.34 1.27v1.54h2.29l-.37 2.87h-1.92v6.93C18.56 20.87 22 16.84 22 12z" />
              </svg>
            </a>
          </SocialIcons>
          <p style={{ marginTop: "1.5rem", fontSize: "0.95rem", color: "#E0EFFF" }}>
            © {new Date().getFullYear()} My Homestay. All rights reserved.
          </p>
        </Footer>

        <FloatingWhatsApp
          phoneNumber="+919876543210"  // Replace with your number
          accountName="My Homestay"
          chatMessage="Hi there! 👋 How can we help you?"
          statusMessage="Online"
          allowClickAway
          notification
          avatar="/assets/whatsapp-avatar.png" // Optional: Add your own avatar image
          darkMode={darkMode}  // Enable WhatsApp dark mode toggle
        />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Home;
