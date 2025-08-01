import React from 'react';

interface LandingPageProps {
  onNavigate: (page: 'quiz' | 'gallery' | 'playlist') => void;
  quizCompleted: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, quizCompleted }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 text-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-4 sm:border-6 lg:border-8 border-yellow-400 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500 w-full">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 mb-4 sm:mb-6 lg:mb-8 animate-pulse leading-tight">
          HAPPY GF DAY!
        </h1>
        
        <div className="text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6 lg:mb-8 animate-bounce">
          💖✨🌈✨💖
        </div>
        
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-800 mb-4 sm:mb-6 lg:mb-8 leading-relaxed px-2">
          Welcome to a day dedicated to <span className="text-pink-600 animate-pulse">US</span> 💖
        </p>
        
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 lg:mb-12 font-semibold px-2 leading-relaxed">
          Get ready for an interactive adventure filled with memories, music, and lots of love! 
          <br className="hidden sm:block" />
          <span className="text-rainbow text-base sm:text-xl lg:text-2xl block sm:inline mt-2 sm:mt-0">🎉 Let's see how well you know me! 🎉</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <button
            onClick={() => onNavigate('quiz')}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-black py-4 sm:py-6 lg:py-8 px-4 sm:px-5 lg:px-6 rounded-xl sm:rounded-2xl shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 text-sm sm:text-lg lg:text-xl border-2 sm:border-3 lg:border-4 border-white w-full"
          >
            🤔<br />Take the Quiz!<br />
            <span className="text-xs sm:text-sm">Collect keys to unlock surprises!</span>
          </button>
          
          {quizCompleted ? (
            <button
              onClick={() => onNavigate('playlist')}
              className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-black py-4 sm:py-6 lg:py-8 px-4 sm:px-5 lg:px-6 rounded-xl sm:rounded-2xl shadow-xl transform hover:scale-110 hover:-rotate-3 transition-all duration-300 text-sm sm:text-lg lg:text-xl border-2 sm:border-3 lg:border-4 border-white w-full"
            >
              🎵<br />Our Playlist<br />
              <span className="text-xs sm:text-sm">Songs that tell our story!</span>
            </button>
          ) : (
            <div className="bg-gradient-to-r from-gray-400 to-gray-500 text-white font-black py-4 sm:py-6 lg:py-8 px-4 sm:px-5 lg:px-6 rounded-xl sm:rounded-2xl shadow-xl opacity-60 text-sm sm:text-lg lg:text-xl border-2 sm:border-3 lg:border-4 border-white relative w-full">
              <div className="absolute top-1 right-1 sm:top-2 sm:right-2 text-xl sm:text-2xl lg:text-3xl">🔒</div>
              🎵<br />Our Playlist<br />
              <span className="text-xs sm:text-sm">Complete the quiz to unlock!</span>
            </div>
          )}
          
          <div className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-black py-4 sm:py-6 lg:py-8 px-4 sm:px-5 lg:px-6 rounded-xl sm:rounded-2xl shadow-xl opacity-60 text-sm sm:text-lg lg:text-xl border-2 sm:border-3 lg:border-4 border-white relative w-full lg:col-span-1">
            <div className="absolute top-1 right-1 sm:top-2 sm:right-2 text-xl sm:text-2xl lg:text-3xl">🔒</div>
            📸<br />Photo Gallery<br />
            <span className="text-xs sm:text-sm">Complete the quiz to unlock!</span>
          </div>
        </div>

        <div className="text-2xl sm:text-3xl lg:text-4xl animate-spin">
          🌟
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
