import React from "react";
import { Helmet } from "react-helmet-async";
import styled, { keyframes } from "styled-components";
import about from "../data/about.json";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 5rem 3rem;
  border-radius: 12px;
  overflow: hidden;
  color: #222; /* Dark text color */

  background: url("/assets/images/homestay-about.jpg") center/cover no-repeat;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    /* Reduced opacity for lighter overlay so text shows better */
    background: linear-gradient(135deg, rgba(1, 56, 121, 0.6), rgba(255, 106, 0, 0.5));
    z-index: 0;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 3rem 2rem;
  }
`;

const Text = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease forwards;

  color: #222; /* Make sure text is dark */
  
  h2 {
    font-size: 3rem;
    margin-bottom: 0.3rem;
    font-weight: 900;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    color: #013879; /* Dark blue heading */
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -12px;
      width: 60px;
      height: 6px;
      background: #ff6a00;
      border-radius: 3px;
      box-shadow: 0 0 12px #ff6a00aa;
    }
  }

  p {
    font-size: 1.3rem;
    line-height: 1.6;
    margin-top: 1rem;
    color: #444; /* dark gray for paragraph */
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #444;

    svg {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      fill: #013879; /* Dark blue for better visibility */
      filter: none; /* Remove shadow */
    }
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1rem 3rem;
  background: linear-gradient(45deg, #ff6a00, #d85b00);
  color: white;
  font-weight: 900;
  font-size: 1.2rem;
  border-radius: 50px;
  box-shadow: 0 6px 20px #ff6a00cc;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #d85b00, #b24d00);
    box-shadow: 0 10px 30px #d85b00cc;
    transform: scale(1.05);
  }
`;

const ImageSide = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  animation: ${fadeInUp} 1.2s ease forwards;
  box-shadow: 0 0 30px #ff6a0099;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: brightness(0.85);
    border-radius: 16px;
  }
`;

// Icons
const WifiIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 18c1.1 0 2-.9 2-2 0-.52-.2-1-.55-1.36l-1.45 1.45C12.36 16.28 12 16.61 12 17c0 .55.45 1 1 1zm6.36-1.64c.39-.39.39-1.02 0-1.41a8.96 8.96 0 0 0-12.72 0c-.39.39-.39 1.02 0 1.41l1.41 1.41a6.96 6.96 0 0 1 9.9 0l1.41-1.41zM12 6a11.94 11.94 0 0 1 8.49 3.51c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41A13.94 13.94 0 0 0 12 4c-3.26 0-6.22 1.26-8.49 3.51-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0A11.94 11.94 0 0 1 12 6z" />
  </svg>
);

const LaptopIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M20 18v-9H4v9H1v2h22v-2h-3zm-3-2H7v-5h10v5z" />
  </svg>
);

const KitchenIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M7 9h10v2H7zM4 12h16v6H4zM5 18h14v2H5z" />
  </svg>
);

const ChairIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M7 14v4h2v-4h6v4h2v-4h1v-2H6v2h1zm3-9h4v3H10z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm5 14.5a7.91 7.91 0 0 1-10 0c1.5-2.5 4-4 7-4s5.5 1.5 7 4z" />
  </svg>
);

const About = () => (
  <div>
    <Helmet>
      <title>About Us - My Homestay</title>
      <meta name="description" content="Learn more about our story and values." />
    </Helmet>

    <Section>
      <Text>
        <h2>About Us</h2>
        <p>{about.description}</p>

        <FeatureList>
          <li>
            <WifiIcon /> Fast & reliable high-speed Wi‑Fi
          </li>
          <li>
            <LaptopIcon /> Cozy work-from-home setup
          </li>
          <li>
            <KitchenIcon /> Access to private kitchen & local meals
          </li>
          <li>
            <ChairIcon /> Outdoor seating with scenic views
          </li>
          <li>
            <GlobeIcon /> Authentic cultural experiences included
          </li>
        </FeatureList>

        <CTAButton href="/booking">Book Your Stay</CTAButton>
      </Text>

      <ImageSide>
        <img
          src="https://images.unsplash.com/photo-1501183638714-0a2f2feb8965?auto=format&fit=crop&w=800&q=80"
          alt="Cozy homestay interior"
        />
      </ImageSide>
    </Section>
  </div>
);

export default About;
