import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled, { keyframes } from "styled-components";
import reviews from "../data/reviews.json";
import { Rating } from "@mui/material";

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #eef3f8, #ffffff);
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.h2`
  font-size: 3rem;
  color: #013879;
  text-align: center;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 5px;
    background: #ff6a00;
    margin: 1rem auto 0;
    border-radius: 3px;
    box-shadow: 0 0 12px #ff6a00aa;
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const ReviewCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 2rem;
  box-shadow: 0 6px 20px rgba(1, 56, 121, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  blockquote {
    font-style: italic;
    color: #444;
    margin-bottom: 1rem;
  }

  footer {
    text-align: right;
    font-weight: bold;
    color: #013879;
  }
`;

const FormWrapper = styled.div`
  background: #ffffff;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(1, 56, 121, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input,
  textarea {
    padding: 1rem;
    font-size: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-family: inherit;
    transition: border 0.3s ease;

    &:focus {
      outline: none;
      border-color: #ff6a00;
      background: #fff8f0;
      box-shadow: 0 0 10px #ff6a00aa;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  button {
    background: linear-gradient(45deg, #ff6a00, #d85b00);
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 1rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px #ff6a00cc;
    }
  }
`;

const ReviewsAndFeedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 0,
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const avgRating =
    reviews.reduce((sum, r) => sum + (r.rating || 5), 0) / reviews.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (_, value) =>
    setForm((prev) => ({ ...prev, rating: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", rating: 0, comments: "" });
  };

  return (
    <Section>
      <Helmet>
        <title>Reviews - My Homestay</title>
        <meta name="description" content="Guest feedback and testimonials." />
      </Helmet>

      <div>
        <Header>Guest Reviews</Header>
        <p style={{ textAlign: "center", marginBottom: "2rem", color: "#555" }}>
          Average Rating:{" "}
          <strong style={{ color: "#013879" }}>{avgRating.toFixed(1)} ★</strong>
        </p>

        <ReviewsGrid>
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
              <Rating
                value={review.rating || 5}
                precision={0.5}
                readOnly
                sx={{ color: "#f5a623", mb: 1 }}
              />
              <blockquote>"{review.message}"</blockquote>
              <footer>— {review.name}</footer>
            </ReviewCard>
          ))}
        </ReviewsGrid>
      </div>

      <div>
        <Header>Share Your Feedback</Header>
        {submitted ? (
          <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#2e7d32" }}>
            ✅ Thank you! Your feedback has been submitted.
          </p>
        ) : (
          <FormWrapper>
            <Form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Rating
                name="rating"
                value={form.rating}
                onChange={handleRating}
                size="large"
                precision={0.5}
                sx={{ mt: -1 }}
              />
              <textarea
                name="comments"
                placeholder="Your Comments"
                value={form.comments}
                onChange={handleChange}
                required
                maxLength={300}
              />
              <button type="submit">Submit Feedback</button>
            </Form>
          </FormWrapper>
        )}
      </div>
    </Section>
  );
};

export default ReviewsAndFeedback;
