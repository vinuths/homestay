import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Sample images - replace with your own URLs later
const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Mountain view from the homestay",
    caption: "Breathtaking mountain view",
  },
  {
    src: "https://images.unsplash.com/photo-1501183638714-1f0a3f9d95e4?auto=format&fit=crop&w=800&q=80",
    alt: "Cozy room interior",
    caption: "Comfortable cozy room",
  },
  {
    src: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80",
    alt: "Traditional kitchen",
    caption: "Fully equipped kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    alt: "Trekking trail nearby",
    caption: "Explore nearby trekking trails",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    alt: "Open lawn for activities",
    caption: "Spacious open lawn",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    alt: "Sunset over the mountains",
    caption: "Magical sunset views",
  },
];

// Sample videos - replace with your own video URLs or YouTube links
const videos = [
  {
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    caption: "Home Tour - Exterior & Garden",
    type: "youtube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1560185127-cda3a4880a17?auto=format&fit=crop&w=800&q=80",
    caption: "Cozy Living Room Tour",
    type: "video",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
  },
];

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const floatUp = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

// Styled components
const GalleryWrapper = styled.div`
  max-width: 1100px;
  margin: 3rem auto 5rem;
  padding: 0 1rem 4rem;
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f0f4f8 0%, #d9e4f5 100%);
  border-radius: 20px;
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.1),
    inset 0 0 60px #a9c9ff33;
  user-select: none;
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  margin-bottom: 2.2rem;
  color: #2c3e50;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 900;
  text-shadow: 1.5px 1.5px 3px #a3b1c1;

  &::after {
    content: "";
    display: block;
    width: 130px;
    height: 4px;
    margin: 0.8rem auto 0;
    background: linear-gradient(90deg, #8e2de2, #ff6a00);
    border-radius: 4px;
    box-shadow: 0 0 10px #ff6a00aa;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.7rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const MediaCard = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 18px;
  overflow: hidden;
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.06),
    0 1px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.45s ease, box-shadow 0.45s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-8px) scale(1.07);
    box-shadow:
      0 12px 36px rgba(0, 0, 0, 0.18),
      0 6px 12px rgba(0, 0, 0, 0.15);
    animation: ${floatUp} 3s ease-in-out infinite;
    outline: none;
  }

  img {
    display: block;
    width: 100%;
    height: 170px;
    object-fit: cover;
    transition: transform 0.5s ease;
    user-select: none;
    border-radius: 18px;
  }

  &:hover img,
  &:focus-visible img {
    transform: scale(1.12);
  }
`;

const CaptionOverlay = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.7rem 1.2rem;
  background: linear-gradient(0deg, rgba(0,0,0,0.8) 10%, transparent 90%);
  color: #f1f1f1;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.04em;
  user-select: none;
  border-radius: 0 0 18px 18px;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.7);
`;

// Play icon overlay for videos
const PlayIconOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4.4rem;
  color: rgba(255, 255, 255, 0.85);
  pointer-events: none;
  user-select: none;
  filter: drop-shadow(0 0 8px rgba(0,0,0,0.8));
`;

// Modal styles
const ModalOverlay = styled.div`
  animation: ${fadeIn} 0.3s ease forwards;
  background-color: rgba(0, 0, 0, 0.93);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.7),
    0 12px 24px rgba(0, 0, 0, 0.55);
  cursor: default;
  background: linear-gradient(135deg, #1f2739, #2e3a5a);

  img, iframe, video {
    display: block;
    width: 100%;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 24px 24px 0 0;
    user-select: none;
    background-color: black;
  }
`;

const Caption = styled.p`
  margin: 0;
  padding: 1rem 1.5rem;
  background-color: #172032;
  color: #ddd;
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: 0.06em;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 0 0 8px #111;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #e74c3c;
  border: none;
  color: white;
  font-size: 2.3rem;
  font-weight: 700;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  opacity: 0.92;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  transition: opacity 0.25s ease, background-color 0.25s ease;

  &:hover {
    opacity: 1;
    background-color: #c0392b;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.28);
  border: none;
  font-size: 2.7rem;
  color: white;
  padding: 0.25rem 0.85rem;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  box-shadow: 0 3px 10px rgba(0,0,0,0.45);
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: #2980b9;
  }

  ${(props) => (props.left ? "left: 18px;" : "right: 18px;")}
`;

const SectionTitle = styled.h3`
  margin: 4rem 0 2rem;
  font-size: 2.3rem;
  text-align: center;
  color: #34495e;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-shadow: 1px 1px 3px #b0bec5;
  
  &::after {
    content: "";
    display: block;
    width: 90px;
    height: 3px;
    margin: 1rem auto 0;
    background: linear-gradient(90deg, #8e2de2, #ff6a00);
    border-radius: 3px;
    box-shadow: 0 0 12px #ff6a00bb;
  }
`;

const Gallery = () => {
  const [modalType, setModalType] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (type, index) => {
    setModalType(type);
    setModalIndex(index);
    document.body.style.overflow = "hidden"; // Prevent background scroll when modal open
  };

  const closeModal = () => {
    setModalType(null);
    setModalIndex(null);
    document.body.style.overflow = "auto"; // Re-enable scroll
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (modalType === "image") {
      setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (modalType === "video") {
      setModalIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (modalType === "image") {
      setModalIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (modalType === "video") {
      setModalIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }
  };

  // Close modal on Esc key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev(e);
      if (e.key === "ArrowRight") showNext(e);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalType]);

  return (
    <GalleryWrapper aria-label="Gallery of homestay images and videos">
      <Title>Gallery</Title>

      <SectionTitle>Images</SectionTitle>
      <Grid>
        {images.map(({ src, alt, caption }, i) => (
          <MediaCard
            key={src}
            onClick={() => openModal("image", i)}
            tabIndex={0}
            aria-label={`Open image: ${caption}`}
            onKeyDown={(e) => e.key === "Enter" && openModal("image", i)}
          >
            <img src={src} alt={alt} loading="lazy" draggable="false" />
            <CaptionOverlay>{caption}</CaptionOverlay>
          </MediaCard>
        ))}
      </Grid>

      <SectionTitle>Videos</SectionTitle>
      <Grid>
        {videos.map(({ thumbnail, caption }, i) => (
          <MediaCard
            key={thumbnail}
            onClick={() => openModal("video", i)}
            tabIndex={0}
            aria-label={`Open video: ${caption}`}
            onKeyDown={(e) => e.key === "Enter" && openModal("video", i)}
          >
            <img src={thumbnail} alt={`Video thumbnail for ${caption}`} loading="lazy" draggable="false" />
            <PlayIconOverlay aria-hidden="true">▶</PlayIconOverlay>
            <CaptionOverlay>{caption}</CaptionOverlay>
          </MediaCard>
        ))}
      </Grid>

      {modalType && (
        <ModalOverlay
          role="dialog"
          aria-modal="true"
          aria-label={`${modalType === "image" ? "Image" : "Video"} viewer modal`}
          onClick={closeModal}
          tabIndex={-1}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            tabIndex={0}
          >
            <CloseButton
              onClick={closeModal}
              aria-label="Close modal"
              title="Close"
            >
              ×
            </CloseButton>

            {modalType === "image" && (
              <>
                <img
                  src={images[modalIndex].src}
                  alt={images[modalIndex].alt}
                  loading="eager"
                  draggable="false"
                />
                <Caption>{images[modalIndex].caption}</Caption>
              </>
            )}

            {modalType === "video" && (
              <>
                {videos[modalIndex].type === "youtube" ? (
                  <iframe
                    title={videos[modalIndex].caption}
                    src={videos[modalIndex].url + "?autoplay=1&rel=0"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                ) : (
                  <video controls autoPlay playsInline>
                    <source src={videos[modalIndex].url} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <Caption>{videos[modalIndex].caption}</Caption>
              </>
            )}

            <NavigationButton
              left
              onClick={showPrev}
              aria-label="Previous media"
            >
              ‹
            </NavigationButton>
            <NavigationButton
              onClick={showNext}
              aria-label="Next media"
            >
              ›
            </NavigationButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;
