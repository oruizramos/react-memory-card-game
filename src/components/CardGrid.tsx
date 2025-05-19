import type { Character } from "../api/rickAndMorty";
import Card from "./Card";

interface Props {
  characters: Character[];
  onCardClick: (id: number) => void;
  clickedIds: number[];
}

export default function CardGrid({ characters, onCardClick, clickedIds }: Props) {
  return (
    <main className="grid">
      {characters.map((char) => (
        <Card
          key={char.id}
          character={char}
          onClick={() => onCardClick(char.id)}
          clicked={clickedIds.includes(char.id)}
        />
      ))}
    </main>
  );
}
