import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import Gallery from './components/Gallery';
import Playlist from './components/Playlist';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'quiz' | 'gallery' | 'playlist'>('landing');
  const [keysCollected, setKeysCollected] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setCurrentPage('gallery');
  };

  const addKey = () => {
    setKeysCollected(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">💖</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-spin">🌈</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-bounce">💕</div>
        <div className="absolute top-1/2 left-1/4 text-2xl animate-ping">⭐</div>
        <div className="absolute top-1/3 right-1/3 text-4xl animate-pulse">🎵</div>
      </div>

      {/* Navigation */}
      {currentPage !== 'landing' && (
        <nav className="relative z-10 p-2 sm:p-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            <button
              onClick={() => setCurrentPage('landing')}
              className="bg-yellow-400 hover:bg-yellow-300 text-purple-800 font-black px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:rotate-3 text-sm sm:text-base lg:text-lg border-2 sm:border-3 lg:border-4 border-purple-800"
            >
              🏠 <span className="hidden sm:inline">Home</span>
            </button>
            <button
              onClick={() => setCurrentPage('quiz')}
              className="bg-green-400 hover:bg-green-300 text-purple-800 font-black px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:-rotate-3 text-sm sm:text-base lg:text-lg border-2 sm:border-3 lg:border-4 border-purple-800"
            >
              🤔 <span className="hidden sm:inline">Quiz</span> ({keysCollected}<span className="hidden sm:inline"> keys</span>)
            </button>
            <button
              onClick={() => setCurrentPage('gallery')}
              disabled={!quizCompleted}
              className={`${
                quizCompleted 
                  ? 'bg-blue-400 hover:bg-blue-300 cursor-pointer' 
                  : 'bg-gray-400 cursor-not-allowed opacity-50'
              } text-purple-800 font-black px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:rotate-3 text-sm sm:text-base lg:text-lg border-2 sm:border-3 lg:border-4 border-purple-800`}
            >
              📸 <span className="hidden sm:inline">Gallery</span> {!quizCompleted && '🔒'}
            </button>
            <button
              onClick={() => setCurrentPage('playlist')}
              disabled={!quizCompleted}
              className={`${
                quizCompleted 
                  ? 'bg-red-400 hover:bg-red-300 cursor-pointer' 
                  : 'bg-gray-400 cursor-not-allowed opacity-50'
              } text-purple-800 font-black px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:-rotate-3 text-sm sm:text-base lg:text-lg border-2 sm:border-3 lg:border-4 border-purple-800`}
            >
              🎵 <span className="hidden sm:inline">Playlist</span> {!quizCompleted && '🔒'}
            </button>
          </div>
        </nav>
      )}

      {/* Page Content */}
      <div className="relative z-10">
        {currentPage === 'landing' && (
          <LandingPage onNavigate={setCurrentPage} quizCompleted={quizCompleted} />
        )}
        {currentPage === 'quiz' && (
          <Quiz 
            onComplete={handleQuizComplete}
            onAddKey={addKey}
            keysCollected={keysCollected}
          />
        )}
        {currentPage === 'gallery' && (
          <Gallery />
        )}
        {currentPage === 'playlist' && (
          <Playlist />
        )}
      </div>
    </div>
  );
}
export default App;
