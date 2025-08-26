import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jsPDF } from "jspdf";

const BookingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('/assets/pexels-aflah-1622600-10585565.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 2rem;
`;

const BookingForm = styled.form`
  background: rgba(255, 255, 255, 0.97);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 500px;

  h2 {
    margin-bottom: 1rem;
    color: #013879;
  }
`;

const InputField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #ff6a00;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #d85b00;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Duration = styled.p`
  font-size: 1rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    if (checkIn && checkOut && checkOut > checkIn) {
      const diff = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      setDuration(diff);
    } else {
      setDuration(0);
    }
  }, [formData.checkIn, formData.checkOut]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Check if two date ranges overlap
  const isOverlapping = (start1, end1, start2, end2) => {
    return start1 < end2 && start2 < end1;
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Booking Request Sent", 20, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Contact: ${formData.contact}`, 20, 60);
    doc.text(`Check-in Date: ${formData.checkIn}`, 20, 70);
    doc.text(`Check-out Date: ${formData.checkOut}`, 20, 80);
    doc.text(`Guests: ${formData.guests}`, 20, 90);
    doc.text(`Duration: ${duration} night${duration > 1 ? "s" : ""}`, 20, 100);

    doc.text("Thank you for your booking request!", 20, 120);

    doc.save(`Booking_${formData.name}_${Date.now()}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];
    if (formData.checkIn < today) {
      return toast.error("❌ Check-in date cannot be in the past.");
    }
    if (formData.checkOut <= formData.checkIn) {
      return toast.error("❌ Check-out must be after check-in.");
    }
    if (!formData.contact.match(/^\+?[0-9]{7,15}$/)) {
      return toast.error("❌ Please enter a valid contact number.");
    }

    // Check overlap with existing bookings in localStorage
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    const newCheckIn = new Date(formData.checkIn);
    const newCheckOut = new Date(formData.checkOut);

    const overlapFound = storedBookings.some((booking) => {
      const bookedCheckIn = new Date(booking.checkIn);
      const bookedCheckOut = new Date(booking.checkOut);
      return isOverlapping(newCheckIn, newCheckOut, bookedCheckIn, bookedCheckOut);
    });

    if (overlapFound) {
      return toast.error("❌ Booking dates overlap with an existing booking. Please choose different dates.");
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      storedBookings.push({
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests,
        timestamp: Date.now(),
      });
      localStorage.setItem("bookings", JSON.stringify(storedBookings));

      toast.success("✅ Booking request sent successfully!");

      generatePDF();

      const whatsappNumber = "9743880882";
      const whatsappMessage = encodeURIComponent(
        `New booking request received:\n\n` +
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Contact: ${formData.contact}\n` +
          `Check-in: ${formData.checkIn}\n` +
          `Check-out: ${formData.checkOut}\n` +
          `Guests: ${formData.guests}\n` +
          `Duration: ${duration} night${duration > 1 ? "s" : ""}`
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

      setFormData({
        name: "",
        email: "",
        contact: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
      });
      setDuration(0);
    } catch (error) {
      console.error(error);
      toast.error("❌ Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookingContainer>
      <Helmet>
        <title>Book Now - My Homestay</title>
        <meta name="description" content="Book your perfect getaway at My Homestay today." />
      </Helmet>

      <ToastContainer />

      <BookingForm onSubmit={handleSubmit}>
        <h2>Book Your Stay</h2>

        <InputField>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputField>

        <InputField>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputField>

        <InputField>
          <Label htmlFor="contact">Contact Number</Label>
          <Input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="+1234567890"
            required
          />
        </InputField>

        <InputField>
          <Label htmlFor="checkIn">Check-in Date</Label>
          <Input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </InputField>

        <InputField>
          <Label htmlFor="checkOut">Check-out Date</Label>
          <Input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </InputField>

        {duration > 0 && (
          <Duration>
            🏡 Duration: {duration} night{duration > 1 ? "s" : ""}
          </Duration>
        )}

        <InputField>
          <Label htmlFor="guests">Number of Guests</Label>
          <Input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </InputField>

        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Confirm Booking"}
        </Button>

        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#555", textAlign: "center" }}>
          Please note: After submitting, click the WhatsApp chat link to notify the owner immediately.
        </p>
      </BookingForm>
    </BookingContainer>
  );
};

export default Booking;
