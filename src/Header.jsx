// Exports to App.jsx
export default function Header({ score, bestScore }) {
  return (
    <header>
      <div className="title-and-scores">
        <h1 className="header-title">Memory Reel</h1>
        <div className="scores">
          <span className="current-score">
            Score<span className="colon">:</span> {score}
          </span>
          <span className="best-score">
            Best Score<span className="colon">:</span> {bestScore}
          </span>
        </div>
      </div>
      <span className="game-rules">
        Earn points by clicking the button on each movie poster, but don’t click
        the same one twice!
      </span>
    </header>
  );
}
