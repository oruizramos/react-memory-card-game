Rick and Morty Memory Game (React + TypeScript)
This is a memory card game built using React and TypeScript. The game dynamically fetches characters from the Rick and Morty API and challenges users to click each character only once without repeating. If a card is clicked twice, the game resets. The score and best score are tracked, and the game includes win/lose feedback.

This project was built as a hands-on way to practice component architecture, TypeScript with API data, dynamic rendering, and game logic using React state and hooks. It’s a self-contained frontend-only application focused on interactivity, user feedback, and data-driven UI behavior.

Live Demo
• Play the game on Netlify
• View the repository on GitHub

Project Goals & Design
The goal of this project was to apply key concepts in React and TypeScript by:

• Creating a simple but interactive game with dynamic state updates
• Using real API data to generate a unique UI experience each session
• Managing game logic (win/lose, score, shuffling) using useState and useEffect
• Applying TypeScript interfaces to keep the code predictable and error-resistant
• Keeping the UI modular and clean with clear separation of concerns

Each element of the game — character cards, score tracking, game feedback — is built as part of a focused component structure.

Features
• Displays 18 unique Rick and Morty characters from the API
• Shuffles character cards after each successful click
• Tracks current score and best score in real time
• Win condition when all characters are clicked uniquely
• Lose condition when a character is clicked twice
• Visual feedback messages for both win and lose outcomes
• Single-click game reset with score and board refresh
• Fully typed with TypeScript interfaces and strict props

Tech Stack
• React (functional components with hooks)
• TypeScript for static typing and improved DX
• Vite or CRA for local dev and build setup
• CSS for basic layout and style customization
• Rick and Morty API for live character data

Folder Structure
bash
Copy
Edit
src/
├── api/
│   └── rickAndMorty.ts       # API call to fetch character data
├── components/
│   ├── Card.tsx              # Individual character card component
│   └── CardGrid.tsx          # Grid of character cards
├── App.tsx                   # Main game logic and layout
├── app.css                   # Styling for layout and messages
TypeScript Usage Highlights
• Defined a Character interface for consistent character data structure
• All React component props are explicitly typed
• API function and array manipulation (e.g., shuffleArray) are type-safe
• Event handlers such as handleCardClick use typed parameters
• State variables are strictly typed to avoid bugs in logic

ts
Copy
Edit
interface Character {
  id: number;
  name: string;
  image: string;
}
ts
Copy
Edit
const handleCardClick = (id: number): void => {
  // Logic for checking duplicates and updating state
}
Possible Future Enhancements
• Add animations to card clicks and shuffle transitions
• Store best score in localStorage to persist across sessions
• Add difficulty levels with more characters or timers
• Improve styling with a responsive grid and smoother feedback

Getting Started
1. Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/rick-and-morty-memory-game.git
cd rick-and-morty-memory-game
2. Install dependencies

bash
Copy
Edit
npm install
3. Start the development server

bash
Copy
Edit
npm run dev
# or
npm start
4. Build for production

bash
Copy
Edit
npm run build
Author
Omar Alejandro Ruiz Ramos
📧 omarruizramos@gmail.com

License
This project is licensed under the MIT License.