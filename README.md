# **React/Typescript Memory Card Game**

Try it live: https://react-typescript-memory-card-game.netlify.app/

This is a lightweight memory card game built using React and TypeScript. It fetches character data from the Rick and Morty API and challenges users to click each character only once per session. If a player clicks the same character twice, the game resets. Scores are tracked in real time, and the interface gives clear feedback when you win or lose. This is was an assignment/practice project for The Odin Project Full Stack curriculum (https://www.theodinproject.com/lessons/node-path-react-new-memory-card). The idea was to play around a similar project. 

In order to keep practicing Typescript, I decided to incorporate it into this project as well. It’s a self-contained frontend app with dynamic rendering, functional interactivity, and stateless API usage — designed to put React hooks, components, and TypeScript to practical use.

## **What This Project Covers**


-This project was built to apply and reinforce key frontend skills, including:
-React state and effect hooks to manage gameplay logic and UI updates.
-Component-based architecture for a clean and modular codebase.
-Typed API integration using TypeScript interfaces to safely consume external data.
-Conditional rendering for feedback and game-state UI.
-Array manipulation for randomization (Fisher-Yates shuffle).
-Prop typing and strict typing across components and event handlers.
-The goal wasn't just to build a game, but to practice writing predictable, testable UI logic using real-world data in a React + TypeScript setting.

## **Features**

-Dynamically fetches and displays 18 random Rick and Morty characters on each session.
-Click-based memory logic: click each character once — clicking twice ends the game.
-Character cards are reshuffled after each correct click.
-Real-time score tracking with a high score saved during the session.
-Feedback messages for both win and loss states.
-One-click Reset Game functionality.
-Built entirely with React functional components, using hooks and strict TypeScript typings.

## **Tech Stack**

-React with functional components and hooks (useState, useEffect)
-TypeScript for static typing and improved developer experience
-Vite for lightweight dev/build setup
-Rick and Morty API for live character data
-CSS for simple, readable styling

## **How It Works**

-The app loads a list of characters from the API on mount using useEffect.
-Characters are stored in state and randomized using a Fisher-Yates shuffle.
-Every time a card is clicked:
-If it hasn’t been clicked before: score increases, card list reshuffles.
-If it has: the game is lost, and the score resets.
-If the player successfully clicks all characters without repetition: they win.
-All state (score, best score, clicked IDs, win/loss flags) is handled in React.
-UI feedback (win/lose messages, score tracking) is conditionally rendered based on state.

## 📁 Project Structure

| Path                          | Purpose                                 |
|-------------------------------|-----------------------------------------|
| `src/api/rickAndMorty.ts`     | Fetches character data from the API     |
| `src/components/Card.tsx`     | Renders individual character card       |
| `src/components/CardGrid.tsx` | Displays the grid of cards              |
| `src/App.tsx`                 | Main game component and logic           |
| `src/app.css`                 | App styles                              |
| `src/main.tsx`                | Entry point                             |


## **TypeScript Highlights**

-TypeScript is used throughout the app to enforce structure and improve clarity:
-A Character interface defines the structure of the API response:

_interface Character {
  id: number;
  name: string;
  image: string;
}_

-Component props are strictly typed, ensuring better editor support and type safety.
-Game logic handlers like handleCardClick use typed arguments and return types:

_const handleCardClick = (id: number): void => { ... }_

=API fetching, array shuffling, and state updates all benefit from TypeScript’s predictability.

## **Getting Started**


1.- Clone the repository:


_git clone https://github.com/your-username/rick-and-morty-memory-game.git
cd rick-and-morty-memory-game
_
2.- Install dependencies:

_npm install_

3.- Run the development server:

_npm run dev_

4.- Build for production:

_npm run build_


## 🧩 **Ideas for Future Enhancements**

-Save best score using localStorage
-Add animations or transitions to card flips/shuffles
-Add difficulty levels or game modes
-Use responsive layout for mobile-friendliness
-Improve UI with better styling or sound effects

## 👤 Author

Omar Alejandro Ruiz Ramos
📧 omarruizramos@gmail.com

## 📄 License
 
This project is licensed under the MIT License.
