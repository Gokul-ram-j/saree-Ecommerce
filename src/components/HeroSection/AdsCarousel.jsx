import React, { useState } from "react";
import styles from "./ImageCarousel.module.css";

const images = [
  "/images/adsImg2.png",
  "/images/adsImg2.png",
  "/images/adsImg2.png",
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.carousel}>
      <div className={styles.imageWrapper}>
        <img src={images[current]} alt={`Slide ${current}`} />
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              current === index ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
