import React, { useState } from 'react';

interface QuizProps {
  onComplete: () => void;
  onAddKey: () => void;
  keysCollected: number;
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

const Quiz: React.FC<QuizProps> = ({ onComplete, onAddKey, keysCollected }) => {
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
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-8 border-rainbow max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-purple-800 mb-4">
            🤔 How Well Do You Know Me? 🤔
          </h1>
          
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-orange-600">
              Keys Collected: {keysCollected} 🗝️
            </span>
            <div className="flex gap-2">
              {Array.from({ length: keysCollected }, (_, i) => (
                <span key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                  🗝️
                </span>
              ))}
            </div>
          </div>

          <div className="bg-yellow-300 rounded-full p-4 inline-block mb-6">
            <span className="text-2xl font-bold text-purple-800">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
        </div>

        {!showResult ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
              {question.question}
            </h2>
            
            <div className="grid gap-4 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-xl border-4 border-white hover:border-yellow-300"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className={`text-8xl mb-6 animate-bounce ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? '🎉' : '😅'}
            </div>
            
            <h3 className={`text-4xl font-black mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? 'YOU GOT THE KEY! 🗝️' : 'Oops! No key this time!'}
            </h3>
            
            <p className="text-2xl text-gray-700 mb-6 font-semibold">
              {question.explanation}
            </p>
            
            <div className="flex justify-center gap-4">
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-black py-4 px-8 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 text-xl border-4 border-white"
                >
                  Next Question! 🚀
                </button>
              ) : keysCollected >= 3 ? (
                <button
                  onClick={onComplete}
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-black py-4 px-8 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 text-xl border-4 border-white animate-pulse"
                >
                  🎊 UNLOCK GALLERY! 🎊
                </button>
              ) : (
                <div>
                  <p className="text-xl text-gray-600 mb-4">
                    You need {3 - keysCollected} more keys to unlock the gallery!
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-black py-4 px-8 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 text-xl border-4 border-white"
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