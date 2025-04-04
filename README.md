# Flashcards 2.0 / Quizzical Clone

[![Netlify Status](https://api.netlify.com/api/v1/badges/b008a9e9-9a4b-4f6d-8a49-darwin6f008a9/deploy-status)](https://app.netlify.com/sites/quizzical-darwin-b008a9/deploys)
[![React Version](https://img.shields.io/badge/react-^17.0.2-blue.svg?logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A fun, interactive trivia game application built with React, inspired by the Quizzical format. Test your general knowledge with questions fetched dynamically from the Open Trivia Database.

---

✨ **[Try the Live Demo Here!](https://quizzical-darwin-b008a9.netlify.app/)** ✨

---

![Screenshot of the Quizzical Clone App](https://res.cloudinary.com/donfg7m07/image/upload/v1743735814/quizzical_pkdft6.png)

## 📚 About The Project

This project is a frontend web application designed to replicate the core functionality of a simple trivia game. It presents users with multiple-choice questions fetched from an external API, allows them to select answers, and then reveals their score upon completion.

It served as a practical exercise in building interactive UIs with React, managing component state, and integrating with third-party APIs.

## 🚀 Features

*   Fetches a set of trivia questions from the Open Trivia Database API.
*   Displays questions one by one with multiple-choice answers.
*   Allows users to select their answers.
*   Checks answers and calculates the final score upon submission.
*   Indicates correct and incorrect answers visually.
*   Option to play again with a new set of questions.

## 💻 Tech Stack

*   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
*   **[Axios](https://axios-http.com/)**: Promise-based HTTP client for making API requests.
*   **[JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Core programming language.
*   **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)**: Styling the application.
*   **[Open Trivia Database API](https://opentdb.com/)**: Source of trivia questions.
*   **[Netlify](https://www.netlify.com/)**: Deployment platform.

## 🌐 API Used

This project utilizes the free **Open Trivia Database (OpenTDB)** API.

*   **Fetch Questions:** `https://opentdb.com/api.php?amount=5` (Example: Fetches 5 questions)
*   **Categories List:** `https://opentdb.com/api_category.php` (Note: Category selection is not implemented in this version but the API supports it).

Learn more at [opentdb.com](https://opentdb.com/).

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm (or yarn) installed on your machine.

### Installation

1.  **Clone the repo:**
    ```sh
    git clone https://github.com/KenjaminButton/flashcards2.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd flashcards2
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Running the App

*   **Start the development server:**
    ```sh
    npm start
    ```
    or
    ```sh
    yarn start
    ```
    This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits.

## 📜 Available Scripts

In the project directory, you can run:

*   `npm start` / `yarn start`: Runs the app in development mode.
*   `npm run build` / `yarn build`: Builds the app for production to the `build` folder.
*   `npm test` / `yarn test`: Launches the test runner in interactive watch mode.
*   `npm run eject` / `yarn eject`: Removes the single build dependency (Create React App configuration) - **Note: this is a one-way operation!**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KenjaminButton/flashcards2/issues).

## 📄 License

Distributed under the MIT License. See `LICENSE` file (if one exists in the repo) or [choosealicense.com](https://choosealicense.com/licenses/mit/) for more information.

## 🙏 Acknowledgements

*   [Open Trivia Database](https://opentdb.com/) for providing the free trivia API.
*   [Create React App](https://create-react-app.dev/) for the project setup.
*   The Scrimba course that inspired the original "Quizzical" project concept.

---
