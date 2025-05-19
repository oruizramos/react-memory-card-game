interface HeaderProps {
  score: number;
  bestScore: number;
}

const Header = ({ score, bestScore }: HeaderProps) => (
  <header>
    <h1>Rick & Morty Memory Game</h1>
    <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  </header>
);

export default Header;
