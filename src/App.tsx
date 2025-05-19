import { useEffect, useState } from "react";
import { fetchCharacters } from "./api/rickAndMorty";
import type { Character } from "./api/rickAndMorty";
import CardGrid from "./components/CardGrid";

// Memory Game Main Component
export default function App() {
  // State for characters and clicked card IDs
  const [characters, setCharacters] = useState<Character[]>([]);
  const [clickedIds, setClickedIds] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [hasLost, setHasLost] = useState(false); // Track losing state

  // Fetch characters when component mounts or resets
  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    const chars = await fetchCharacters();
    const shuffled = shuffleArray(chars.slice(0, 18)); // get first 18 of the API, randomized
    setCharacters(shuffled);
    setClickedIds([]);
    setScore(0);
    setGameWon(false);
    setHasLost(false);
  };

  // Fisher-Yates Shuffle
  const shuffleArray = (array: Character[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Handle clicking a card
  const handleCardClick = (id: number) => {
    if (clickedIds.includes(id)) {
      // Duplicate click: lose condition
      setHasLost(true);
      if (score > bestScore) setBestScore(score);
      setScore(0);
      setClickedIds([]);
      setGameWon(false);
    } else {
      const newScore = score + 1;
      const updatedClicked = [...clickedIds, id];
      setScore(newScore);
      setClickedIds(updatedClicked);
      setCharacters(shuffleArray(characters));
      setHasLost(false);

      // Win condition
      if (newScore === characters.length) {
        setGameWon(true);
        if (newScore > bestScore) setBestScore(newScore);
      }
    }
  };

  // Reset game handler
  const resetGame = () => {
    loadCharacters();
  };

  return (
    <>
      <header style={{ textAlign: "center", paddingBottom: "1rem" }}>
        <h1>Rick and Morty Memory Game</h1>
        <p>Don’t click the same card twice!</p>
        <p style={{ marginBottom: "0.5rem" }}>
          Score: <strong>{score}</strong> | Best Score: <strong>{bestScore}</strong>
          {" "}
          <button
            onClick={resetGame}
            style={{
              marginLeft: "1rem",
              padding: "0.25rem 0.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "0.3rem",
              border: "none",
              backgroundColor: "#3B3B70",
              color: "white",
              fontWeight: "bold",
            }}
          >
            🔁 Reset
          </button>
        </p>

        {/* Unified styled messages */}
        {gameWon && <p className="win-message">🎉 You win! Try again.</p>}
        {hasLost && <p className="loss-message">You lose! Try again.</p>}
      </header>

      <CardGrid
        characters={characters}
        onCardClick={handleCardClick}
        clickedIds={clickedIds}
      />
    </>
  );
}
