import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, Brain } from 'lucide-react';

const flashcardsData = [
  {
    id: 1,
    question: "What is the Lok Sabha?",
    answer: "The Lok Sabha, or the 'House of the People', is the lower house of India's bicameral Parliament. Its members are directly elected by the people of India.",
    category: "Parliament"
  },
  {
    id: 2,
    question: "Who is the Chief Election Commissioner (CEC)?",
    answer: "The CEC heads the Election Commission of India, a body constitutionally empowered to conduct free and fair elections to the national and state legislatures.",
    category: "ECI"
  },
  {
    id: 3,
    question: "What is the Model Code of Conduct (MCC)?",
    answer: "A set of guidelines issued by the ECI to regulate political parties and candidates during elections, ensuring a level playing field.",
    category: "Regulations"
  },
  {
    id: 4,
    question: "What does EVM stand for?",
    answer: "Electronic Voting Machine. It is an electronic device used for recording votes in elections.",
    category: "Technology"
  },
  {
    id: 5,
    question: "What is VVPAT?",
    answer: "Voter Verifiable Paper Audit Trail. It allows voters to verify that their vote was cast correctly by providing a physical paper receipt.",
    category: "Technology"
  },
  {
    id: 6,
    question: "What is NOTA?",
    answer: "'None of the Above' is a ballot option that allows the voter to indicate disapproval of all the candidates in a voting system.",
    category: "Voting"
  }
];

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcardsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-navy-blue mb-4">Election Flashcards</h1>
        <p className="text-gray-600">Master key election terms with these interactive cards.</p>
      </div>

      <div className="flex flex-col items-center gap-8">
        {/* Progress Tracker */}
        <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-saffron h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${((currentIndex + 1) / flashcardsData.length) * 100}%` }}
          ></div>
        </div>
        <div className="text-sm font-medium text-gray-500">
          Card {currentIndex + 1} of {flashcardsData.length}
        </div>

        {/* Card Container */}
        <div className="relative w-full max-w-md aspect-[4/3] perspective-1000">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: direction * 100, opacity: 0, rotateY: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full cursor-pointer"
              onClick={handleFlip}
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-2xl border-2 border-saffron/20 flex flex-col items-center justify-center p-8 text-center">
                  <div className="bg-saffron/10 text-saffron px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                    {flashcardsData[currentIndex].category}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-blue leading-tight">
                    {flashcardsData[currentIndex].question}
                  </h2>
                  <div className="mt-8 text-gray-400 flex items-center gap-2 text-sm">
                    <RotateCcw className="h-4 w-4" /> Click to reveal answer
                  </div>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 backface-hidden bg-navy-blue rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-center text-white"
                  style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                  <Brain className="h-12 w-12 text-saffron mb-6" />
                  <p className="text-xl md:text-2xl leading-relaxed">
                    {flashcardsData[currentIndex].answer}
                  </p>
                  <div className="mt-8 text-saffron/60 flex items-center gap-2 text-sm">
                    <RotateCcw className="h-4 w-4" /> Click to see question
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-6">
          <button 
            onClick={handlePrev}
            className="p-4 bg-white rounded-full shadow-lg hover:bg-gray-50 text-navy-blue transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={handleNext}
            className="p-4 bg-white rounded-full shadow-lg hover:bg-gray-50 text-navy-blue transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <button 
          onClick={() => { setCurrentIndex(0); setIsFlipped(false); }}
          className="mt-4 text-gray-500 hover:text-navy-blue transition-colors flex items-center gap-2 font-medium"
        >
          <RotateCcw className="h-4 w-4" /> Reset Deck
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
