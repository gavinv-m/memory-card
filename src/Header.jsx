// Exports to App.jsx
export default function Header({ score, bestScore }) {
  return (
    <header>
      <div className="title-and-scores">
        <h1 className="header-title">Memory Reel</h1>
        <div className="scores">
          <span className="current-score">
            Score<span class="colon">:</span> {score}
          </span>
          <span className="best-score">
            Best Score<span class="colon">:</span> {bestScore}
          </span>
        </div>
      </div>
      <span className="game-rules">
        Earn points by clicking on an image, but be careful not to click the
        same one more than once!
      </span>
    </header>
  );
}
