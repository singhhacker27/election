import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, Trophy, RefreshCcw, Info } from 'lucide-react';

const quizData = [
  {
    id: 1,
    question: "What is the minimum age to vote in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    correct: 1,
    explanation: "The 61st Amendment Act of 1988 lowered the voting age from 21 to 18 years in India.",
    difficulty: "Beginner"
  },
  {
    id: 2,
    question: "Which body is responsible for conducting elections in India?",
    options: ["Supreme Court", "Parliament", "Election Commission of India", "Ministry of Home Affairs"],
    correct: 2,
    explanation: "The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering election processes in India.",
    difficulty: "Beginner"
  },
  {
    id: 3,
    question: "How many members are directly elected to the Lok Sabha?",
    options: ["250", "543", "545", "550"],
    correct: 1,
    explanation: "The Lok Sabha has 543 elective seats, and these members are directly elected by the people.",
    difficulty: "Intermediate"
  },
  {
    id: 4,
    question: "What is the tenure of a member of the Rajya Sabha?",
    options: ["4 years", "5 years", "6 years", "Permanent"],
    correct: 2,
    explanation: "Members of the Rajya Sabha are elected for a term of 6 years. One-third of the members retire every two years.",
    difficulty: "Intermediate"
  },
  {
    id: 5,
    question: "Who appoints the Chief Election Commissioner of India?",
    options: ["The Prime Minister", "The President", "The Chief Justice of India", "The Parliament"],
    correct: 1,
    explanation: "The President of India appoints the Chief Election Commissioner and other Election Commissioners.",
    difficulty: "Advanced"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-saffron/10"
        >
          <Trophy className="h-20 w-20 text-saffron mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-navy-blue mb-2">Quiz Complete!</h2>
          <p className="text-xl text-gray-500 mb-8">You scored {score} out of {quizData.length}</p>
          
          <div className="flex justify-center gap-4">
            <button onClick={resetQuiz} className="btn-outline flex items-center gap-2">
              <RefreshCcw className="h-5 w-5" /> Try Again
            </button>
            <button className="btn-primary" onClick={() => window.location.href = '/'}>
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-sm font-bold text-saffron uppercase tracking-widest">{question.difficulty}</span>
          <h1 className="text-3xl font-bold text-navy-blue mt-1">Election Quiz</h1>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Question</p>
          <p className="text-xl font-bold text-navy-blue">{currentQuestion + 1}/{quizData.length}</p>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-2 mb-12">
        <div 
          className="bg-india-green h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
        ></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => {
              let buttonClass = "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex justify-between items-center ";
              if (!isAnswered) {
                buttonClass += selectedOption === index ? "border-navy-blue bg-navy-blue/5" : "border-gray-100 hover:border-saffron hover:bg-saffron/5";
              } else {
                if (index === question.correct) {
                  buttonClass += "border-india-green bg-india-green/10 text-india-green-dark font-bold";
                } else if (selectedOption === index) {
                  buttonClass += "border-red-500 bg-red-50 text-red-700";
                } else {
                  buttonClass += "border-gray-100 opacity-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <span className="text-lg">{option}</span>
                  {isAnswered && index === question.correct && <CheckCircle2 className="h-6 w-6" />}
                  {isAnswered && selectedOption === index && index !== question.correct && <XCircle className="h-6 w-6" />}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mt-8 overflow-hidden"
          >
            <div className="bg-navy-blue/5 p-6 rounded-2xl border border-navy-blue/10">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-navy-blue mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-navy-blue mb-1">Did you know?</p>
                  <p className="text-gray-700 leading-relaxed">{question.explanation}</p>
                </div>
              </div>
              <button
                onClick={handleNext}
                className="mt-6 w-full btn-primary flex items-center justify-center gap-2"
              >
                {currentQuestion === quizData.length - 1 ? 'Show Results' : 'Next Question'}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
