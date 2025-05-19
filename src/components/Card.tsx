import type { Character } from "../api/rickAndMorty";

interface Props {
  character: Character;
  onClick: () => void;
  clicked: boolean;
}

export default function Card({ character, onClick, clicked }: Props) {
  return (
    <div
      className={`card ${clicked ? "clicked" : ""}`}
      onClick={onClick}
      role="button"
      aria-pressed={clicked}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
}
