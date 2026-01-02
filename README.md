# Harry Potter Gallery App

A React application that fetches and displays a gallery of Harry Potter characters using the Potter API. The application features dynamic styling where each character card adapts its color theme based on the character's Hogwarts house.

## Features

- **API Integration:** Fetches character data asynchronously using [Axios](https://axios-http.com/).
- **Dynamic Theming:** Cards are styled with specific gradients and colors corresponding to the four Hogwarts houses:
  - 🦁 **Gryffindor:** Red and Gold
  - 🐍 **Slytherin:** Green and Silver
  - 🦅 **Ravenclaw:** Blue and Bronze
  - 🦡 **Hufflepuff:** Yellow and Black
- **Interactive UI:**
  - Hover animations on cards.
  - "View Profile" toggle button to reveal the actor's name.
- **Responsive Layout:** Displays characters in a grid format.

## Technologies Used

- **React:** Frontend library.
- **Axios:** HTTP client for API requests.
- **Tailwind CSS:** Utility classes for layout and background.
- **Inline Styles:** Used for dynamic, prop-based theming within components.

## API Reference

This project consumes the following endpoint:
`https://potterapi-fedeperin.vercel.app/en/characters`

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the application:**

    ```bash
    npm run dev
    ```
    *(Note: Use `npm start` if using Create React App instead of Vite)*

## Project Structure

- **`src/App.jsx`**: Main component that handles the API call and state management for the character list.
- **`src/components/Gallery.jsx`**: Presentation component for individual character cards, handling the house-specific logic and styles.