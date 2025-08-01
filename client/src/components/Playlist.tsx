import React, { useState } from 'react';
import { Heart, Music, ExternalLink, Play } from 'lucide-react';

const playlist = [
  {
    title: "Tumhare Aane Se",
    artist: "Ashu Shukla",
    meaning: "This song takes me back to that night jab saath mei sune the 🌙",
    duration: "3:45",
    videoId: "FzjorhJJwuA",
    youtubeUrl: "https://www.youtube.com/watch?v=FzjorhJJwuA"
  },
  {
    title: "Pyaar Mein Tere",
    artist: "From 'Date with College Senior'",
    meaning: "This was another song which I didn't like at first then accha lagne laga💕",
    duration: "4:12",
    videoId: "mU7ht2SQ1FY",
    youtubeUrl: "https://www.youtube.com/watch?v=mU7ht2SQ1FY"
  },
  {
    title: "FAASLE",
    artist: "Aditya Rikhari",
    meaning: "This one's vibes were just perfect! ✨",
    duration: "3:28",
    videoId: "EiiOYwqk3A0",
    youtubeUrl: "https://www.youtube.com/watch?v=EiiOYwqk3A0"
  },
  {
    title: "Tu Aake Dekhle",
    artist: "King (The Carnival)",
    meaning: "Ye toh apna mutual artist jo pasand aaya tha",
    duration: "3:56",
    videoId: "A66TYFdz8YA",
    youtubeUrl: "https://www.youtube.com/watch?v=A66TYFdz8YA"
  }
];

const Playlist: React.FC = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(0);
  const [embedError, setEmbedError] = useState<boolean>(false);

  const handleIframeError = () => {
    setEmbedError(true);
  };

  const currentSong = currentPlaying !== null ? playlist[currentPlaying] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 drop-shadow-lg leading-tight">
            🎵 Our Love Playlist 🎵
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 animate-bounce">🎶💕🎶💕🎶</div>
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-bold drop-shadow-md px-2">
            Songs that tell our story, one beat at a time!
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border-4 sm:border-6 lg:border-8 border-purple-400">
          <div className="mb-6 sm:mb-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-full text-sm sm:text-lg lg:text-2xl border-2 sm:border-3 lg:border-4 border-white shadow-xl">
              <Music className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 animate-pulse" />
              <span className="text-center">4 Songs • Our Discord Night Memories</span>
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 animate-pulse fill-current" />
            </div>
          </div>

          <div className="aspect-video w-full mb-8 sm:mb-10 lg:mb-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 sm:border-3 lg:border-4 border-yellow-400 bg-black/10">
            {currentSong && (
              <>
                {!embedError ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${currentSong.videoId}?autoplay=0&rel=0&modestbranding=1`}
                    title={`${currentSong.title} - ${currentSong.artist}`}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    onError={handleIframeError}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200 text-gray-800 p-4">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🎵</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center">{currentSong.title}</h3>
                    <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-center">{currentSong.artist}</p>
                    <a
                      href={currentSong.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center gap-2 transition-colors duration-200 text-sm sm:text-base"
                    >
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Watch on </span>YouTube
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="space-y-4 sm:space-y-6">
            {playlist.map((song, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentPlaying(index);
                  setEmbedError(false);
                }}
                className={`cursor-pointer bg-gradient-to-r ${
                  currentPlaying === index
                    ? 'from-yellow-300 to-orange-400 border-red-500 scale-105'
                    : 'from-blue-100 to-purple-100 border-blue-400'
                } rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 sm:border-3 lg:border-4 shadow-lg transform transition-all duration-300 hover:scale-102`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-3 lg:border-4 border-white bg-red-600 text-white text-lg sm:text-xl font-bold mx-auto sm:mx-0">
                    🎧
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-2">
                      <div className="text-center sm:text-left mb-2 sm:mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-800">
                          {song.title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-600">
                          {song.artist}
                        </p>
                      </div>
                      <div className="flex items-center justify-center sm:justify-end gap-2">
                        <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-500 bg-white px-2 sm:px-3 py-1 rounded-full border-2 border-gray-300">
                          {song.duration}
                        </span>
                        <a
                          href={song.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200"
                          title="Open in YouTube"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="bg-white/80 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-pink-300">
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold italic leading-relaxed text-center sm:text-left">
                        {song.meaning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
            <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-4 sm:border-6 lg:border-8 border-yellow-400 shadow-xl">
              <div className="text-3xl sm:text-4xl lg:text-6xl mb-3 sm:mb-4 animate-spin">💫</div>
              <p className="text-sm sm:text-lg lg:text-2xl font-black leading-relaxed px-2">
                Remember that amazing night when we stayed up till 4-5 AM on Discord, just listening to these songs and talking?
                <br className="hidden sm:block" />
                <span className="text-lg sm:text-2xl lg:text-4xl text-yellow-300 animate-pulse block mt-2 sm:mt-0">
                  THESE ARE ONE OF THE GOOD MEMORIES WE HAD!!
                </span>
                <br className="hidden sm:block" />
                <span className="block mt-2 sm:mt-0">💖✨🌈✨💖</span>
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-600 bg-white/50 rounded-lg p-3">
              💡 If videos don't load, click the YouTube links to open them directly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
