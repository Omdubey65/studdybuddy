// components/Quiz.jsx

import React, { useState } from 'react';

const sampleQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answer: 'Mars',
  },
];

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const question = sampleQuestions[currentQ];

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setSelected('');
    setShowAnswer(false);
    setCurrentQ((prev) => (prev + 1) % sampleQuestions.length);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
      <div className="flex flex-col gap-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(opt)}
            className={`p-3 rounded-md border text-left transition-colors ${
              showAnswer
                ? opt === question.answer
                  ? 'bg-green-200 border-green-400'
                  : opt === selected
                  ? 'bg-red-200 border-red-400'
                  : 'bg-gray-100'
                : 'bg-gray-50 hover:bg-blue-100'
            }`}
            disabled={showAnswer}
          >
            {opt}
          </button>
        ))}
      </div>
      {showAnswer && (
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-700">
            {selected === question.answer ? '✅ Correct!' : '❌ Incorrect.'}
          </p>
          <button
            onClick={nextQuestion}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
