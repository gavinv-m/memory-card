import { useState } from 'react';
import NextIcon from './icons/NextIcon';

// Exports to Grid
export default function Card({ imageSrc, videoSrc, updateScore, filmId }) {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-name={filmId === 426 ? 'Vertigo' : undefined}
    >
      {hovering === true ? (
        <iframe
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="card-video"
          frameBorder="0"
        ></iframe>
      ) : (
        <img src={imageSrc} className="card-image" alt="Movie poster" />
      )}
      <NextIcon updateScore={updateScore} filmId={filmId}></NextIcon>
    </div>
  );
}
