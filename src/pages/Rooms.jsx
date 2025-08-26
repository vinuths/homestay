import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f7f9fc, #ffffff);
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: #013879;
  font-weight: 900;
  margin-bottom: 3rem;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 5px;
    background: #ff6a00;
    margin: 1rem auto 0;
    border-radius: 3px;
    box-shadow: 0 0 10px #ff6a00aa;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(1, 56, 121, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(1, 56, 121, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #013879;
  margin: 0;
`;

const Description = styled.p`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: #ff6a00;
`;

const Amenities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  color: #333;
  font-size: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.5rem;

  li::before {
    content: "✔ ";
    color: #28a745;
    margin-right: 5px;
  }
`;

const BookBtn = styled(Link)`
  align-self: flex-start;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff6a00, #d85b00);
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 6px 20px #ff6a00aa;
  transition: all 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background: linear-gradient(45deg, #d85b00, #ff6a00);
    box-shadow: 0 10px 24px #d85b00aa;
    transform: scale(1.04);
  }
`;

const bungalowImageURL =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80";

const Rooms = () => {
  return (
    <Section>
      <Helmet>
        <title>The Bungalow - My Homestay</title>
        <meta
          name="description"
          content="Experience a luxurious bungalow stay with all modern amenities."
        />
      </Helmet>

      <Header>Our Bungalow</Header>

      <Card>
        <Image src={bungalowImageURL} alt="Luxury Bungalow" loading="lazy" />
        <Info>
          <Title>Spacious 3-Bedroom Bungalow</Title>
          <Description>
            Nestled in a peaceful location, our premium bungalow offers a homely
            experience with modern comfort. Featuring 3 spacious bedrooms with
            attached bathrooms, a fully equipped kitchen, cozy living room,
            dining space, private garden, and a play area — it's perfect for
            families or groups.
          </Description>
          <Price>Total Price: ₹25,000 / night</Price>

          <Amenities>
            <li>3 Bedrooms with Queen Beds</li>
            <li>Attached Bathrooms</li>
            <li>Modern Kitchen</li>
            <li>Dining Area</li>
            <li>Spacious Living Room</li>
            <li>Private Garden</li>
            <li>Kids' Play Area</li>
            <li>High-Speed Wi-Fi</li>
            <li>Flat Screen TV</li>
            <li>Free Parking</li>
          </Amenities>

          <BookBtn to="/booking">Book Now</BookBtn>
        </Info>
      </Card>
    </Section>
  );
};

export default Rooms;
