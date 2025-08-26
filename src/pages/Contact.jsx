import React from "react";
import { Helmet } from "react-helmet-async";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #e9eff5, #f9fbfd);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(1, 56, 121, 0.15);
`;

const Header = styled.h2`
  font-size: 3rem;
  color: #013879;
  text-align: center;
  font-weight: 900;
  letter-spacing: 1.5px;
  position: relative;
  margin-bottom: 1rem;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 5px;
    background: #ff6a00;
    margin: 0.8rem auto 0;
    border-radius: 3px;
    box-shadow: 0 0 12px #ff6a00cc;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
`;

const CardShadow = keyframes`
  0%, 100% { box-shadow: 0 4px 10px rgba(255, 106, 0, 0.3); }
  50% { box-shadow: 0 8px 20px rgba(255, 106, 0, 0.6); }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem 1.8rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(1, 56, 121, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;

  &:hover {
    animation: ${CardShadow} 3s ease infinite;
    transform: translateY(-6px);
  }

  strong {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    color: #013879;
    gap: 8px;
    margin-bottom: 1rem;
  }

  a,
  address {
    color: #013879;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    line-height: 1.4;
  }

  address {
    font-style: normal;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
    fill: #ff6a00;
    margin-right: 8px;
    filter: drop-shadow(0 0 3px #ff6a00cc);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  input,
  textarea {
    width: 100%;
    padding: 1rem 1.2rem;
    border-radius: 8px;
    border: 2px solid #ddd;
    font-size: 1.1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: #ff6a00;
      box-shadow: 0 0 10px #ff6a00cc;
      background: #fff8f0;
    }
  }

  textarea {
    min-height: 140px;
  }

  button {
    background: linear-gradient(45deg, #ff6a00, #d85b00);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 900;
    padding: 1.1rem 0;
    border-radius: 50px;
    box-shadow: 0 6px 20px #ff6a00cc;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(45deg, #d85b00, #ff6a00);
      box-shadow: 0 9px 25px #d85b00cc;
      transform: scale(1.05);
    }
  }
`;

const MapEmbed = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 35px rgba(1, 56, 121, 0.15);

  iframe {
    width: 100%;
    height: 320px;
    border: none;
    filter: drop-shadow(0 0 8px #ff6a0088);
    border-radius: 16px;
    transition: transform 0.3s ease;
  }

  &:hover iframe {
    transform: scale(1.02);
  }
`;

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18v-8l7.5 5.5a.996.996 0 0 0 1 0L20 10v8H4z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6.62 10.79a15.466 15.466 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.05 11.05 0 0 0 3.46.56 1 1 0 0 1 1 1v3.63a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1h3.63a1 1 0 0 1 1 1 11.05 11.05 0 0 0 .56 3.46 1 1 0 0 1-.21 1.11l-2.36 2.22z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const Contact = () => (
  <Section>
    <Helmet>
      <title>Contact Us - My Homestay</title>
      <meta
        name="description"
        content="Reach out to us for booking, questions or support."
      />
    </Helmet>
    <Header>Contact Us</Header>

    <ContactGrid>
      <InfoCard>
        <strong>
          <IconWrapper>
            <EmailIcon />
          </IconWrapper>
          Email Us
        </strong>
        <a href="mailto:contact@myhomestay.com">contact@myhomestay.com</a>
      </InfoCard>
      <InfoCard>
        <strong>
          <IconWrapper>
            <PhoneIcon />
          </IconWrapper>
          Call Us
        </strong>
        <a href="tel:+919876543210">+91‑98765 43210</a>
      </InfoCard>
      <InfoCard>
        <strong>
          <IconWrapper>
            <LocationIcon />
          </IconWrapper>
          Visit Us
        </strong>
        <address>123 Homestay Lane, Hill Town, India</address>
      </InfoCard>
    </ContactGrid>

    <ContactForm
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thanks for reaching out! We'll get back soon.");
      }}
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </ContactForm>

    <MapEmbed>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83985011347!2d77.01991225788022!3d28.613895837204134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62b%3A0x2c943ba6d1e21a0!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1689812345678!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        title="My Homestay Location"
      />
    </MapEmbed>
  </Section>
);

export default Contact;
