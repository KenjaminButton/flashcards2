import React, { useState } from 'react';
import FlashcardList from './FlashcardList';

function App() {
  const [ flashcards, setFlashcards ] = useState(SAMPLE_FLASHCARDS);
  return (
    // <h1>Hello World!</h1>
    <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "Who do you think you are?",
    answer: "Kenderson",
    options: [
      "Jesus",
      "Kenderson",
      "Messiah",
      "BTS",
    ]
  },
  {
    id: 2,
    question: "Who do you think God is?",
    answer: "Kenderson",
    options: [
      "Jesus",
      "Kenderson",
      "Messiah",
      "BTS",
    ]
  },
]

export default App;
