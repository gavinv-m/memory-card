export default function NextIcon({
  updateScore,
  filmId,
  width = '25',
  height = '25',
  className = 'next-icon',
}) {
  return (
    <div className="next-button-container">
      <svg
        data-id={filmId}
        width={width}
        height={height}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        onClick={(e) => {
          updateScore(e);
        }}
      >
        <circle
          cx="256"
          cy="256"
          r="246"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="178.18 411.63 333.82 256 178.18 100.37"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
