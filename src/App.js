import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';
import './app.css';

function App() {
  const [ flashcards, setFlashcards ] = useState(SAMPLE_FLASHCARDS);
  useEffect( () => {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(res => {
      setFlashcards(res.data.results.map( (questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer);
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)
          ),
          answer
        ]
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort( () => Math.random() - 0.5)

        }
      }))
      console.log(res.data)
    })
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />
    </div>
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
    answer: "Kendricks",
    options: [
      "Jesus",
      "Kenderson",
      "Messiah",
      "BTS",
    ]
  },
]

export default App;
