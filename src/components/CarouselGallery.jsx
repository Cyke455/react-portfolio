import React from "react";
import { Carousel, Button } from "react-bootstrap";



function CarouselGallery({ setView }) {
    
  const images = [
    { src: "venmod.png", alt: "Marvel Rivals Black Suit Spider-Man Mod" },
    { src: "spidmod1.png", alt: "Marvel Rivals Classic Spider-Man Mod" },
    { src: "venmod2.png", alt: "Marvel Rivals Classic Venom Mod" },
    { src: "midnightsp.png", alt: "Midnight Suns Spider-Man Mod" },
    { src: "logo.png", alt: "Avengers Iron Man Blender Render" },
    { src: "petedamaged.png", alt: "Battle Damaged Spider-Man Blender Render" },
    { src: "F4.png", alt: "Fantastic Four Blender Render" },
    { src: "radiospider-man.jpg", alt: "Radiohead Spider-Man Blender Render" },
    { src: "capshield.png", alt: "Classic Captain America shield modeled and rendered by me" },
    { src: "lastvegetable.png", alt: "The Last Vegetable " },
    { src: "spaceoddity.png", alt: "Space Oddity" }
  ];

  return (

    
    
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Carousel interval={3000} pause={false}>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img.src}
              alt={img.alt}
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
            <Carousel.Caption>
              <h3>{img.alt}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

       <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setView("welcome")}
        >
          Go Back
        </button>
    </div>
  );
}

export default CarouselGallery;