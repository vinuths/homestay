import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { style } from "@mui/system";

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
          phoneNumber="91+9743880882"  // Replace with your number
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



// cozy style
// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
// import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

// // Cozy warm color palette
// const cozyTheme = {
//   background: "#f5f1ea",        // soft cream
//   primaryWarm: "#a9746e",       // warm clay
//   secondaryWarm: "#c9b29b",     // sand beige
//   textPrimary: "#5a3e36",       // dark brown
//   textSecondary: "#7f6a5a",     // lighter brown
//   buttonBg: "#a9746e",
//   buttonHover: "#865f57",
//   cardBg: "#fff8f2",            // off-white for cards
//   borderColor: "#d8c6b9",       // subtle border
//   footerBg: "#a9746e",
//   footerTextColor: "#f5f1ea",
// };

// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@700&family=Open+Sans:wght@400;600&display=swap');

//   body {
//     margin: 0;
//     background: ${({ theme }) => theme.background};
//     color: ${({ theme }) => theme.textPrimary};
//     font-family: 'Open Sans', sans-serif;
//     transition: background 0.3s ease, color 0.3s ease;
//   }

//   a {
//     color: ${({ theme }) => theme.primaryWarm};
//     text-decoration: none;
//     transition: color 0.3s ease;

//     &:hover {
//       color: ${({ theme }) => theme.buttonHover};
//       text-decoration: underline;
//     }
//   }
// `;

// const PageWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background: ${({ theme }) => theme.background};
// `;

// const MainContent = styled.div`
//   flex: 1;
//   display: flex;
//   background: ${({ theme }) => theme.background};
//   @media (max-width: 900px) {
//     flex-direction: column;
//   }
// `;

// const Sidebar = styled.aside`
//   width: 260px;
//   padding: 2rem 2.5rem;
//   background: ${({ theme }) => theme.cardBg};
//   border-right: 1px solid ${({ theme }) => theme.borderColor};
//   display: flex;
//   flex-direction: column;
//   gap: 2.5rem;

//   @media (max-width: 900px) {
//     width: 100%;
//     border-right: none;
//     border-bottom: 1px solid ${({ theme }) => theme.borderColor};
//   }

//   h4 {
//     font-family: 'Josefin Slab', serif;
//     font-weight: 700;
//     font-size: 1.8rem;
//     color: ${({ theme }) => theme.primaryWarm};
//     margin-bottom: 1rem;
//     letter-spacing: 1.2px;
//   }

//   a {
//     display: flex;
//     align-items: center;
//     gap: 0.6rem;
//     font-weight: 600;
//     font-size: 1.1rem;

//     svg {
//       fill: currentColor;
//       width: 24px;
//       height: 24px;
//     }
//   }

//   p, ul {
//     font-size: 1rem;
//     color: ${({ theme }) => theme.textSecondary};
//     line-height: 1.6;
//   }

//   ul {
//     padding-left: 1.25rem;
//     list-style-type: disc;
//   }

//   ul li {
//     margin-bottom: 0.6rem;
//   }
// `;

// const Container = styled.main`
//   flex: 1;
//   max-width: 1000px;
//   margin: 3rem auto 4rem;
//   padding: 0 2rem;
// `;

// const HeroSection = styled.section`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 3rem;
//   background: ${({ theme }) => theme.cardBg};
//   padding: 4rem 3rem;
//   border-radius: 15px;
//   box-shadow: 0 10px 25px rgba(169, 116, 110, 0.2);
//   align-items: center;

//   @media (max-width: 900px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Content = styled.div`
//   h2 {
//     font-family: 'Josefin Slab', serif;
//     font-size: 3.2rem;
//     color: ${({ theme }) => theme.primaryWarm};
//     margin-bottom: 1.25rem;
//     font-weight: 700;
//     letter-spacing: 1.5px;
//   }

//   p {
//     font-size: 1.2rem;
//     color: ${({ theme }) => theme.textSecondary};
//     line-height: 1.7;
//     margin-bottom: 3rem;
//     font-weight: 500;
//   }
// `;

// const ImageBox = styled.div`
//   img {
//     width: 100%;
//     border-radius: 15px;
//     box-shadow: 0 8px 20px rgba(169, 116, 110, 0.25);
//     object-fit: cover;
//     height: 100%;
//     max-height: 420px;
//     transition: transform 0.4s ease;

//     &:hover {
//       transform: scale(1.03);
//     }
//   }
// `;

// const BookButton = styled(Link)`
//   display: inline-block;
//   background: ${({ theme }) => theme.buttonBg};
//   color: ${({ theme }) => theme.background};
//   padding: 1rem 3rem;
//   border-radius: 40px;
//   text-decoration: none;
//   font-weight: 700;
//   font-size: 1.3rem;
//   box-shadow: 0 6px 20px rgba(169, 116, 110, 0.3);
//   transition: background 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     background: ${({ theme }) => theme.buttonHover};
//     box-shadow: 0 10px 30px rgba(134, 95, 87, 0.5);
//   }
// `;

// const Section = styled.section`
//   margin-top: 5rem;
// `;

// const SectionTitle = styled.h3`
//   font-family: 'Josefin Slab', serif;
//   color: ${({ theme }) => theme.primaryWarm};
//   font-size: 2.5rem;
//   text-align: center;
//   margin-bottom: 3rem;
//   font-weight: 700;
//   letter-spacing: 1.2px;
// `;

// const ReviewCard = styled.article`
//   background: ${({ theme }) => theme.cardBg};
//   padding: 2rem 2.5rem;
//   border-radius: 15px;
//   margin-bottom: 2rem;
//   box-shadow: 0 6px 20px rgba(169, 116, 110, 0.1);
//   transition: transform 0.25s ease, box-shadow 0.25s ease;

//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 15px 35px rgba(169, 116, 110, 0.3);
//   }
// `;

// const ReviewHeader = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const Avatar = styled.img`
//   width: 58px;
//   height: 58px;
//   margin-right: 1.5rem;
//   object-fit: cover;
//   border-radius: 50%;
//   border: 2px solid ${({ theme }) => theme.primaryWarm};
// `;

// const ReviewContent = styled.p`
//   font-style: italic;
//   color: ${({ theme }) => theme.textPrimary};
//   line-height: 1.7;
//   font-size: 1.15rem;
//   font-weight: 500;
// `;

// const Footer = styled.footer`
//   background: ${({ theme }) => theme.footerBg};
//   color: ${({ theme }) => theme.footerTextColor};
//   padding: 3.5rem 1rem;
//   text-align: center;
//   font-family: 'Open Sans', sans-serif;
// `;

// const FooterLogo = styled.h4`
//   font-family: 'Josefin Slab', serif;
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   font-weight: 700;
//   color: ${({ theme }) => theme.footerTextColor};
//   letter-spacing: 1.2px;
// `;

// const FooterLinks = styled.nav`
//   display: flex;
//   justify-content: center;
//   gap: 2.8rem;
//   flex-wrap: wrap;
//   margin: 1.5rem 0;
// `;

// const FooterLink = styled(Link)`
//   color: ${({ theme }) => theme.footerTextColor};
//   text-decoration: none;
//   font-weight: 600;
//   font-size: 1.05rem;
//   transition: color 0.3s ease;

//   &:hover {
//     color: ${({ theme }) => theme.buttonHover};
//     text-decoration: underline;
//   }
// `;

// const SocialIcons = styled.div`
//   margin-top: 1.5rem;
//   display: flex;
//   justify-content: center;
//   gap: 2rem;

//   a {
//     color: ${({ theme }) => theme.footerTextColor};
//     transition: color 0.3s ease;

//     &:hover {
//       color: ${({ theme }) => theme.buttonHover};
//     }

//     svg {
//       fill: currentColor;
//       width: 28px;
//       height: 28px;
//       cursor: pointer;
//       transition: fill 0.3s ease;
//     }
//   }
// `;

// const InstagramIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     role="img"
//     viewBox="0 0 24 24"
//     aria-labelledby="instagramIconTitle"
//     stroke="none"
//   >
//     <title id="instagramIconTitle">Instagram</title>
//     <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.5 2.25a1 1 0 110 2 1 1 0 010-2zm-4.25 1a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zm0 1.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z" />
//   </svg>
// );

// const FacebookIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     width="24px"
//     height="24px"
//   >
//     <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 7.94 9.8v-6.93H7.9v-2.87h2.04V9.41c0-2.02 1.2-3.14 3.04-3.14.88 0 1.8.16 1.8.16v2h-1.03c-1.02 0-1.34.63-1.34 1.27v1.54h2.29l-.37 2.87h-1.92v6.93C18.56 20.87 22 16.84 22 12z" />
//   </svg>
// );

// const Home = () => {
//   return (
//     <ThemeProvider theme={cozyTheme}>
//       <GlobalStyle />
//       <PageWrapper>
//         <Helmet>
//           <title>Cozy Homestay – Warm & Inviting Retreat</title>
//           <meta
//             name="description"
//             content="Experience comfort, warmth, and coziness at our homestay surrounded by nature."
//           />
//         </Helmet>

//         <MainContent>
//           <Sidebar>
//             <h4>Contact & Info</h4>

//             <p>To book your stay at our cozy homestay, please reach out:</p>

//             <a href="tel:+918008235920" aria-label="Call us">
//               {/* Phone Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 width="24"
//                 height="24"
//                 aria-hidden="true"
//               >
//                 <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.25a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.25a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.18 2.2z" />
//               </svg>
//               +91 80082 35920
//             </a>

//             <p style={{ marginTop: "1.5rem" }}>
//               Address:
//               <br />
//               124 Cozy Lane, Willow Creek
//               <br />
//               Mountain View, CA 94043
//             </p>

//             <h4>Stay Amenities</h4>
//             <ul>
//               <li>Wood-burning fireplace</li>
//               <li>Warm breakfast included</li>
//               <li>Soft blankets & cushions</li>
//               <li>Quiet nature trails nearby</li>
//               <li>Complimentary herbal teas</li>
//             </ul>
//           </Sidebar>

//           <Container>
//             <HeroSection>
//               <Content>
//                 <h2>Welcome to Your Cozy Retreat</h2>
//                 <p>
//                   Step inside our warm and inviting homestay, where comfort meets nature.
//                   Relax by the fireplace, sip your favorite tea, and unwind in peaceful surroundings.
//                 </p>
//                 <BookButton to="/booking">Book Your Stay</BookButton>
//               </Content>

//               <ImageBox>
//                 <img
//                   src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
//                   alt="Cozy homestay interior with fireplace and cushions"
//                 />
//               </ImageBox>
//             </HeroSection>

//             <Section>
//               <SectionTitle>Guest Reviews</SectionTitle>

//               <ReviewCard>
//                 <ReviewHeader>
//                   <Avatar
//                     src="https://randomuser.me/api/portraits/women/68.jpg"
//                     alt="Jane Doe"
//                   />
//                   <div>
//                     <strong>Jane Doe</strong>
//                     <br />
//                     <small>March 2025</small>
//                   </div>
//                 </ReviewHeader>
//                 <ReviewContent>
//                   “This place felt like home the moment I walked in. The fireplace was
//                   so inviting, and the owners really made me feel cared for. Highly recommended!”
//                 </ReviewContent>
//               </ReviewCard>

//               <ReviewCard>
//                 <ReviewHeader>
//                   <Avatar
//                     src="https://randomuser.me/api/portraits/men/45.jpg"
//                     alt="Mark Smith"
//                   />
//                   <div>
//                     <strong>Mark Smith</strong>
//                     <br />
//                     <small>January 2025</small>
//                   </div>
//                 </ReviewHeader>
//                 <ReviewContent>
//                   “A perfect getaway from the city noise. The cozy ambiance and nature walks
//                   helped me relax fully. Will definitely come back.”
//                 </ReviewContent>
//               </ReviewCard>
//             </Section>
//           </Container>
//         </MainContent>

//         <Footer>
//           <FooterLogo>Cozy Homestay</FooterLogo>

//           <FooterLinks>
//             <FooterLink to="/">Home</FooterLink>
//             <FooterLink to="/about">About</FooterLink>
//             <FooterLink to="/amenities">Amenities</FooterLink>
//             <FooterLink to="/contact">Contact</FooterLink>
//           </FooterLinks>

//           <SocialIcons>
//             <a
//               href="https://instagram.com/cozyhomestay"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//             >
//               <InstagramIcon />
//             </a>
//             <a
//               href="https://facebook.com/cozyhomestay"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//             >
//               <FacebookIcon />
//             </a>
//           </SocialIcons>

//           <p style={{ marginTop: "1.8rem", fontSize: "0.9rem", fontWeight: 500 }}>
//             &copy; {new Date().getFullYear()} Cozy Homestay. All rights reserved.
//           </p>
//         </Footer>

//         <FloatingWhatsApp
//           phoneNumber="+918008235920"
//           accountName="Cozy Homestay"
//           allowEsc
//           allowClickAway
//           notification
//           notificationSound
//           avatar="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=40&q=80"
//           chatMessage="Hi! Welcome to Cozy Homestay 😊 How can we help you relax today?"
//         />
//       </PageWrapper>
//     </ThemeProvider>
//   );
// };

// export default Home;

// luxury style
// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
// import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

// // Luxury dark color palette with gold accents
// const luxuryTheme = {
//   background: "#0d0d0d",
//   primaryGold: "#d4af37",
//   secondaryGold: "#b8952d",
//   textPrimary: "#f5f5f5",
//   textSecondary: "#ccc9c0",
//   buttonBg: "#d4af37",
//   buttonHover: "#b8952d",
//   cardBg: "#1a1a1a",
//   borderColor: "#3a3a3a",
//   footerBg: "linear-gradient(135deg, #000000, #1a1a1a)",
//   footerTextColor: "#d4af37",
// };

// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;600&display=swap');

//   body {
//     margin: 0;
//     background: ${({ theme }) => theme.background};
//     color: ${({ theme }) => theme.textPrimary};
//     font-family: 'Montserrat', sans-serif;
//     transition: background 0.3s ease, color 0.3s ease;
//   }

//   a {
//     color: ${({ theme }) => theme.primaryGold};
//     text-decoration: none;
//     transition: color 0.3s ease;

//     &:hover {
//       color: ${({ theme }) => theme.buttonHover};
//       text-decoration: underline;
//     }
//   }
// `;

// const PageWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background: ${({ theme }) => theme.background};
// `;

// const MainContent = styled.div`
//   flex: 1;
//   display: flex;
//   background: ${({ theme }) => theme.background};
//   @media (max-width: 900px) {
//     flex-direction: column;
//   }
// `;

// const Sidebar = styled.aside`
//   width: 260px;
//   padding: 2rem 2.5rem;
//   background: ${({ theme }) => theme.cardBg};
//   border-right: 1px solid ${({ theme }) => theme.borderColor};
//   display: flex;
//   flex-direction: column;
//   gap: 2.5rem;

//   @media (max-width: 900px) {
//     width: 100%;
//     border-right: none;
//     border-bottom: 1px solid ${({ theme }) => theme.borderColor};
//   }

//   h4 {
//     font-family: 'Playfair Display', serif;
//     font-weight: 700;
//     font-size: 1.8rem;
//     color: ${({ theme }) => theme.primaryGold};
//     margin-bottom: 1rem;
//     letter-spacing: 1.2px;
//   }

//   a {
//     display: flex;
//     align-items: center;
//     gap: 0.6rem;
//     font-weight: 600;
//     font-size: 1.1rem;

//     svg {
//       fill: currentColor;
//       width: 24px;
//       height: 24px;
//     }
//   }

//   p, ul {
//     font-size: 1rem;
//     color: ${({ theme }) => theme.textSecondary};
//     line-height: 1.6;
//   }

//   ul {
//     padding-left: 1.25rem;
//     list-style-type: disc;
//   }

//   ul li {
//     margin-bottom: 0.6rem;
//   }
// `;

// const Container = styled.main`
//   flex: 1;
//   max-width: 1000px;
//   margin: 3rem auto 4rem;
//   padding: 0 2rem;
// `;

// const HeroSection = styled.section`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 3rem;
//   background: ${({ theme }) => theme.cardBg};
//   padding: 4rem 3rem;
//   border-radius: 15px;
//   box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);
//   align-items: center;

//   @media (max-width: 900px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Content = styled.div`
//   h2 {
//     font-family: 'Playfair Display', serif;
//     font-size: 3.8rem;
//     color: ${({ theme }) => theme.primaryGold};
//     margin-bottom: 1.25rem;
//     font-weight: 900;
//     letter-spacing: 2px;
//   }

//   p {
//     font-size: 1.3rem;
//     color: ${({ theme }) => theme.textSecondary};
//     line-height: 1.8;
//     margin-bottom: 3rem;
//     font-weight: 500;
//   }
// `;

// const ImageBox = styled.div`
//   img {
//     width: 100%;
//     border-radius: 15px;
//     box-shadow: 0 10px 35px rgba(0, 0, 0, 0.7);
//     object-fit: cover;
//     height: 100%;
//     max-height: 420px;
//     transition: transform 0.4s ease;

//     &:hover {
//       transform: scale(1.05);
//     }
//   }
// `;

// const BookButton = styled(Link)`
//   display: inline-block;
//   background: ${({ theme }) => theme.buttonBg};
//   color: ${({ theme }) => theme.background};
//   padding: 1rem 3rem;
//   border-radius: 50px;
//   text-decoration: none;
//   font-weight: 700;
//   font-size: 1.3rem;
//   box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
//   transition: background 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     background: ${({ theme }) => theme.buttonHover};
//     box-shadow: 0 12px 40px rgba(184, 142, 18, 0.7);
//   }
// `;

// const Section = styled.section`
//   margin-top: 5rem;
// `;

// const SectionTitle = styled.h3`
//   font-family: 'Playfair Display', serif;
//   color: ${({ theme }) => theme.primaryGold};
//   font-size: 2.8rem;
//   text-align: center;
//   margin-bottom: 3rem;
//   font-weight: 700;
//   letter-spacing: 1.5px;
// `;

// const ReviewCard = styled.article`
//   background: ${({ theme }) => theme.cardBg};
//   padding: 2rem 2.5rem;
//   border-radius: 15px;
//   margin-bottom: 2rem;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//   transition: transform 0.25s ease, box-shadow 0.25s ease;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 18px 45px rgba(212, 175, 55, 0.6);
//   }
// `;

// const ReviewHeader = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const Avatar = styled.img`
//   width: 60px;
//   height: 60px;
//   margin-right: 1.5rem;
//   object-fit: cover;
//   border-radius: 50%;
//   border: 2.5px solid ${({ theme }) => theme.primaryGold};
// `;

// const ReviewContent = styled.p`
//   font-style: italic;
//   color: ${({ theme }) => theme.textPrimary};
//   line-height: 1.7;
//   font-size: 1.2rem;
//   font-weight: 500;
// `;

// const Footer = styled.footer`
//   background: ${({ theme }) => theme.footerBg};
//   color: ${({ theme }) => theme.footerTextColor};
//   padding: 3.5rem 1rem;
//   text-align: center;
//   font-family: 'Montserrat', sans-serif;
// `;

// const FooterLogo = styled.h4`
//   font-family: 'Playfair Display', serif;
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   font-weight: 900;
//   color: ${({ theme }) => theme.primaryGold};
//   letter-spacing: 1.5px;
// `;

// const FooterLinks = styled.nav`
//   display: flex;
//   justify-content: center;
//   gap: 3rem;
//   flex-wrap: wrap;
//   margin: 1.5rem 0;
// `;

// const FooterLink = styled(Link)`
//   color: ${({ theme }) => theme.footerTextColor};
//   text-decoration: none;
//   font-weight: 600;
//   font-size: 1.05rem;
//   transition: color 0.3s ease;

//   &:hover {
//     color: ${({ theme }) => theme.buttonHover};
//     text-decoration: underline;
//   }
// `;

// const SocialIcons = styled.div`
//   margin-top: 1.5rem;
//   display: flex;
//   justify-content: center;
//   gap: 2rem;

//   a {
//     color: ${({ theme }) => theme.footerTextColor};
//     transition: color 0.3s ease;

//     &:hover {
//       color: ${({ theme }) => theme.buttonHover};
//     }

//     svg {
//       fill: currentColor;
//       width: 28px;
//       height: 28px;
//       cursor: pointer;
//       transition: fill 0.3s ease;
//     }
//   }
// `;

// const InstagramIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     role="img"
//     viewBox="0 0 24 24"
//     aria-labelledby="instagramIconTitle"
//     stroke="none"
//   >
//     <title id="instagramIconTitle">Instagram</title>
//     <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.5 2.25a1 1 0 110 2 1 1 0 010-2zm-4.25 1a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zm0 1.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z" />
//   </svg>
// );

// const FacebookIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     width="24px"
//     height="24px"
//   >
//     <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 7.94 9.8v-6.93H7.9v-2.87h2.04V9.41c0-2.02 1.2-3.14 3.04-3.14.88 0 1.8.16 1.8.16v2h-1.03c-1.02 0-1.34.63-1.34 1.27v1.54h2.29l-.37 2.87h-1.92v6.93C18.56 20.87 22 16.84 22 12z" />
//   </svg>
// );

// const Home = () => {
//   return (
//     <ThemeProvider theme={luxuryTheme}>
//       <GlobalStyle />
//       <PageWrapper>
//         <Helmet>
//           <title>Luxury Homestay – Experience Elegance & Comfort</title>
//           <meta
//             name="description"
//             content="Experience luxury, elegance, and nature at our exclusive homestay."
//           />
//         </Helmet>

//         <MainContent>
//           <Sidebar>
//             <h4>Contact & Info</h4>

//             <p>To book your stay at our exclusive luxury homestay, please reach out:</p>

//             <a href="tel:+918008235920" aria-label="Call us">
//               {/* Phone Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.54.57 1 1 0 011 1v3.6a1 1 0 01-1 1A16 16 0 014 6a1 1 0 011-1h3.6a1 1 0 011 1 11.36 11.36 0 00.57 3.54 1 1 0 01-.21 1.11l-2.34 2.34z" />
//               </svg>
//               +91 80082 35920
//             </a>

//             <p>Or email us at:</p>

//             <a href="mailto:info@luxuryhomestay.com" aria-label="Email us">
//               {/* Email Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18v-9.2l7.73 6.59a1 1 0 001.54 0L20 8.8V18H4z" />
//               </svg>
//               info@luxuryhomestay.com
//             </a>

//             <h4>Amenities</h4>
//             <ul>
//               <li>Air conditioning & heating</li>
//               <li>Private pool with scenic views</li>
//               <li>Complimentary gourmet breakfast</li>
//               <li>Luxury linens & toiletries</li>
//               <li>Free Wi-Fi throughout</li>
//               <li>24/7 concierge service</li>
//             </ul>
//           </Sidebar>

//           <Container>
//             <HeroSection>
//               <Content>
//                 <h2>Welcome to Your Luxury Getaway</h2>
//                 <p>
//                   Escape to an oasis of elegance and comfort. Our homestay offers
//                   a unique blend of natural beauty and lavish amenities, crafted
//                   to make your stay unforgettable.
//                 </p>
//                 <BookButton to="/booking">Book Now</BookButton>
//               </Content>
//               <ImageBox>
//                 <img
//                   src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
//                   alt="Luxury homestay pool view"
//                 />
//               </ImageBox>
//             </HeroSection>

//             <Section>
//               <SectionTitle>Guest Reviews</SectionTitle>

//               <ReviewCard>
//                 <ReviewHeader>
//                   <Avatar
//                     src="https://randomuser.me/api/portraits/women/65.jpg"
//                     alt="Emily Johnson"
//                   />
//                   <div>
//                     <strong>Emily Johnson</strong>
//                     <br />
//                     <small>Stayed in July 2024</small>
//                   </div>
//                 </ReviewHeader>
//                 <ReviewContent>
//                   "This homestay exceeded all my expectations! The pool and the
//                   views were breathtaking, and the staff made us feel like royalty."
//                 </ReviewContent>
//               </ReviewCard>

//               <ReviewCard>
//                 <ReviewHeader>
//                   <Avatar
//                     src="https://randomuser.me/api/portraits/men/75.jpg"
//                     alt="Michael Lee"
//                   />
//                   <div>
//                     <strong>Michael Lee</strong>
//                     <br />
//                     <small>Stayed in June 2024</small>
//                   </div>
//                 </ReviewHeader>
//                 <ReviewContent>
//                   "A perfect blend of tranquility and luxury. The gourmet breakfast
//                   was divine. Can't wait to come back!"
//                 </ReviewContent>
//               </ReviewCard>

//               <ReviewCard>
//                 <ReviewHeader>
//                   <Avatar
//                     src="https://randomuser.me/api/portraits/women/72.jpg"
//                     alt="Sophia Martinez"
//                   />
//                   <div>
//                     <strong>Sophia Martinez</strong>
//                     <br />
//                     <small>Stayed in May 2024</small>
//                   </div>
//                 </ReviewHeader>
//                 <ReviewContent>
//                   "Every detail was thoughtfully curated. The experience felt like
//                   a 5-star resort but with the warmth of home."
//                 </ReviewContent>
//               </ReviewCard>
//             </Section>
//           </Container>
//         </MainContent>

//         <Footer>
//           <FooterLogo>Luxury Homestay</FooterLogo>

//           <FooterLinks>
//             <FooterLink to="/">Home</FooterLink>
//             <FooterLink to="/about">About</FooterLink>
//             <FooterLink to="/rooms">Rooms</FooterLink>
//             <FooterLink to="/contact">Contact</FooterLink>
//           </FooterLinks>

//           <SocialIcons>
//             <a
//               href="https://instagram.com/luxuryhomestay"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//             >
//               <InstagramIcon />
//             </a>
//             <a
//               href="https://facebook.com/luxuryhomestay"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//             >
//               <FacebookIcon />
//             </a>
//           </SocialIcons>

//           <p style={{ marginTop: "1.8rem", fontSize: "0.9rem", fontWeight: 500 }}>
//             &copy; {new Date().getFullYear()} Luxury Homestay. All rights reserved.
//           </p>
//         </Footer>

//         <FloatingWhatsApp
//           phoneNumber="+918008235920"
//           accountName="Luxury Homestay"
//           allowEsc
//           allowClickAway
//           notification
//           notificationSound
//           avatar="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=40&q=80"
//           chatMessage="Hi! How can we help you plan your luxury stay?"
//         />
//       </PageWrapper>
//     </ThemeProvider>
//   );
// };

// export default Home;
