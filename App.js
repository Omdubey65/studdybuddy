import DoubtAnswer from './components/DoubtAnswer';
import React, { useState, useEffect } from "react";
import LanguageSelector from "./components/LanguageSelector";
import ModeSelector from './components/ModeSelector';
import Quiz from './components/Quiz';
import SearchBar from './components/SearchBar';
import InteractiveHeader from './components/InteractiveHeader';
function App() {
  const [language, setLanguage] = useState("English");
  const [mode, setMode] = useState("Beginner");
  const [searchTerm, setSearchTerm] = useState("");

  const languages = ["English", "Hindi", "Spanish", "French", "German"];
  const modes = ["Beginner", "Intermediate", "Advanced"];

  const quizzes = {
    English: {
      Beginner: [
        { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
        { question: "What color is the sky?", options: ["Blue", "Green", "Red"], answer: "Blue" },
      ],
      Intermediate: [],
      Advanced: [],
    },
    Hindi: {
      Beginner: [
        { question: "भारत की राजधानी क्या है?", options: ["दिल्ली", "मुंबई", "कोलकाता"], answer: "दिल्ली" },
      ],
      Intermediate: [],
      Advanced: [],
    },
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuiz = quizzes[language]?.[mode] || [];

  // Filter questions by searchTerm (case-insensitive)
  const filteredQuestions = currentQuiz.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset question index when language, mode, or searchTerm changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setSelectedOption(null);
  }, [language, mode, searchTerm]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    setCurrentQuestionIndex((prev) =>
      prev + 1 < filteredQuestions.length ? prev + 1 : 0
    );
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "2px solid #4CAF50",
        borderRadius: "10px",
        backgroundColor: "#f0fff0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ color: "#2E7D32", textAlign: "center" }}>Study Buddy</h1>
       <InteractiveHeader />
      <SearchBar query={searchTerm} onSearch={setSearchTerm} />
      <DoubtAnswer query={searchTerm} />
      <LanguageSelector 
       language={language} 
      onLanguageChange={setLanguage} 
      languages={languages} 
/>

      <ModeSelector modes={modes} selectedMode={mode} onChange={setMode} />

      {filteredQuestions.length > 0 ? (
        <Quiz
          question={filteredQuestions[currentQuestionIndex]}
          showAnswer={showAnswer}
          selectedOption={selectedOption}
          onAnswer={handleOptionClick}
          onNext={handleNextQuestion}
        />
      ) : (
        <p style={{ textAlign: "center" }}>No questions found.</p>
      )}
    </div>
  );
}

export default App;
