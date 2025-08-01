import React from 'react';

interface LandingPageProps {
  onNavigate: (page: 'quiz' | 'gallery' | 'playlist') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-8 border-yellow-400 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500">
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 mb-8 animate-pulse">
          HAPPY GF DAY!
        </h1>
        
        <div className="text-6xl mb-8 animate-bounce">
          💖✨🌈✨💖
        </div>
        
        <p className="text-3xl md:text-4xl font-bold text-purple-800 mb-8 leading-relaxed">
          Welcome to a day dedicated to <span className="text-pink-600 animate-pulse">US</span> 💖
        </p>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 font-semibold">
          Get ready for an interactive adventure filled with memories, music, and lots of love! 
          <br />
          <span className="text-rainbow text-2xl">🎉 Let's see how well you know me! 🎉</span>
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <button
            onClick={() => onNavigate('quiz')}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-black py-8 px-6 rounded-2xl shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 text-xl border-4 border-white"
          >
            🤔<br />Take the Quiz!<br />
            <span className="text-sm">Collect keys to unlock surprises!</span>
          </button>
          
          <button
            onClick={() => onNavigate('playlist')}
            className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-black py-8 px-6 rounded-2xl shadow-xl transform hover:scale-110 hover:-rotate-3 transition-all duration-300 text-xl border-4 border-white"
          >
            🎵<br />Our Playlist<br />
            <span className="text-sm">Songs that tell our story!</span>
          </button>
          
          <div className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-black py-8 px-6 rounded-2xl shadow-xl opacity-60 text-xl border-4 border-white relative">
            <div className="absolute top-2 right-2 text-3xl">🔒</div>
            📸<br />Photo Gallery<br />
            <span className="text-sm">Complete the quiz to unlock!</span>
          </div>
        </div>

        <div className="text-4xl animate-spin">
          🌟
        </div>
      </div>
    </div>
  );
};

export default LandingPage;