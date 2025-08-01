import React, { useState } from 'react';

interface QuizProps {
  onComplete: () => void;
  onAddKey: () => void;
  keysCollected: number;
  onNavigate: (page: 'gallery' | 'playlist') => void;
}

const questions = [
  {
    question: "Where did I give you your first gift?",
    options: [
      "UB",
      "Tech park",
      "Java food stall",
      "Civil block SRM"
    ],
    correct: 3,
    explanation: "Yes! It was at the civil block SRM! That was such a sweet moment! ✨"
  },
  {
    question: "What's my favourite color?",
    options: [
      "Red",
      "Blue",
      "Green",
      "Purple"
    ],
    correct: 1,
    explanation: "Blue is absolutely my favorite! You know me so well! 💙"
  },
  {
    question: "What's my go-to comfort food? 🍕",
    options: [
      "Roti sabji",
      "Chicken",
      "Curd rice",
      "Daal chawal"
    ],
    correct: 3,
    explanation: "Daal chawal is the ultimate comfort food! Nothing beats it! 🍚"
  },
  {
    question: "Where did we first kiss? 💋",
    options: [
      "Tech park",
      "Java",
      "Beside the ground",
      "University block"
    ],
    correct: 3,
    explanation: "At the university block! That was such a perfect moment! 💋"
  }
];

const Quiz: React.FC<QuizProps> = ({ onComplete, onAddKey, keysCollected, onNavigate }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState<boolean[]>(new Array(questions.length).fill(false));

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      onAddKey();
    }

    const newAnswered = [...questionsAnswered];
    newAnswered[currentQuestion] = true;
    setQuestionsAnswered(newAnswered);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else if (keysCollected >= 3) {
      onComplete();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuestionsAnswered(new Array(questions.length).fill(false));
  };

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border-4 sm:border-6 lg:border-8 border-rainbow max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto w-full">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-800 mb-3 sm:mb-4 leading-tight">
            🤔 How Well Do You Know Me? 🤔
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-orange-600">
              Keys Collected: {keysCollected} 🗝️
            </span>
            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: keysCollected }, (_, i) => (
                <span key={i} className="text-2xl sm:text-3xl lg:text-4xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                  🗝️
                </span>
              ))}
            </div>
          </div>

          <div className="bg-yellow-300 rounded-full p-2 sm:p-3 lg:p-4 inline-block mb-4 sm:mb-6">
            <span className="text-sm sm:text-lg lg:text-2xl font-bold text-purple-800">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
        </div>

        {!showResult ? (
          <div className="text-center">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-relaxed px-2">
              {question.question}
            </h2>
            
            <div className="grid gap-3 sm:gap-4 mb-6 sm:mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-lg lg:text-xl border-2 sm:border-3 lg:border-4 border-white hover:border-yellow-300 w-full"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className={`text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6 animate-bounce ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? '🎉' : '😅'}
            </div>
            
            <h3 className={`text-xl sm:text-2xl lg:text-4xl font-black mb-3 sm:mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? 'YOU GOT THE KEY! 🗝️' : 'Oops! No key this time!'}
            </h3>
            
            <p className="text-sm sm:text-lg lg:text-2xl text-gray-700 mb-4 sm:mb-6 font-semibold px-2">
              {question.explanation}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-black py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 text-sm sm:text-lg lg:text-xl border-2 sm:border-3 lg:border-4 border-white"
                >
                  Next Question! 🚀
                </button>
              ) : keysCollected >= 3 ? (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                  <button
                    onClick={() => {
                      onComplete();
                      onNavigate('gallery');
                    }}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-black py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 text-sm sm:text-lg lg:text-xl border-2 sm:border-3 lg:border-4 border-white animate-pulse flex-1"
                  >
                    📸 UNLOCK GALLERY! 🎊
                  </button>
                  <button
                    onClick={() => {
                      onComplete();
                      onNavigate('playlist');
                    }}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-black py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 text-sm sm:text-lg lg:text-xl border-2 sm:border-3 lg:border-4 border-white animate-pulse flex-1"
                  >
                    🎵 UNLOCK PLAYLIST! 🎊
                  </button>
                </div>
              ) : (
                <div className="w-full">
                  <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4 px-2">
                    You need {3 - keysCollected} more keys to unlock the surprises!
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-black py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 text-sm sm:text-lg lg:text-xl border-2 sm:border-3 lg:border-4 border-white w-full sm:w-auto"
                  >
                    Try Again! 🔄
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
