import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Shimmer animation for the logo text
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  background: linear-gradient(45deg, #8e2de2, #ff6a00);
  padding: 1rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 20px rgba(142, 45, 226, 0.6);
  backdrop-filter: saturate(180%) blur(12px);
  transition: background-color 0.3s ease;
`;

// Shimmering gradient text effect
const Logo = styled.h1`
  font-size: 2.4rem;
  margin: 0;
  font-weight: 900;
  letter-spacing: 3px;
  background: linear-gradient(
    270deg,
    #ff6a00,
    #8e2de2,
    #ff6a00,
    #8e2de2,
    #ff6a00
  );
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 4s linear infinite;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  user-select: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.8rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

// Animated underline for links
const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: white;
  font-size: 1.15rem;
  padding: 0.5rem 0.7rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 3px;
    background: #ff6a00;
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &:hover {
    color: #ffbb72;
  }

  &.active {
  color: #fff; /* brighter white for active link */
  font-weight: 900;
  text-shadow: 0 0 10px #ff6a00cc, 0 0 6px #ffffff88;
  background: linear-gradient(135deg, #ff6a00aa, #8e2de2aa);
  border-radius: 6px;
  padding: 0.5rem 1rem;
  transform: scale(1.05);
  box-shadow: 0 0 12px #ff6a00aa;
}

`;

const Header = () => (
  <HeaderWrapper>
    <Logo>My Homestay</Logo>
    <Nav>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/rooms">Rooms</StyledNavLink>
      <StyledNavLink to="/booking">Booking</StyledNavLink>
      <StyledNavLink to="/gallery">Gallery</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
      <StyledNavLink to="/reviews">Reviews</StyledNavLink>
    </Nav>
  </HeaderWrapper>
);

export default Header;
