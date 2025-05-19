// 1. Declare and export Character type
export interface Character {
  id: number;
  name: string;
  image: string;
}

// 2. Fetch characters with random page
export async function fetchCharacters(): Promise<Character[]> {
  const totalPages = 34;
  const randomPage = Math.floor(Math.random() * totalPages) + 1;

  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${randomPage}`
  );
  const data = await response.json();
  return data.results.slice(0, 18).map((char: any) => ({
    id: char.id,
    name: char.name,
    image: char.image,
  }));
}
