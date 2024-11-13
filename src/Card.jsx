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
    >
      {hovering === true ? (
        <iframe
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="card-video"
        ></iframe>
      ) : (
        <img src={imageSrc} className="card-image" alt="Movie poster" />
      )}
      <NextIcon updateScore={updateScore} filmId={filmId}></NextIcon>
    </div>
  );
}
