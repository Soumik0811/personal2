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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-white mb-4 drop-shadow-lg">
            🎵 Our Love Playlist 🎵
          </h1>
          <div className="text-4xl mb-6 animate-bounce">🎶💕🎶💕🎶</div>
          <p className="text-2xl text-white font-bold drop-shadow-md">
            Songs that tell our story, one beat at a time!
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-8 border-purple-400">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black py-4 px-8 rounded-full text-2xl border-4 border-white shadow-xl">
              <Music className="w-8 h-8 animate-pulse" />
              <span>4 Songs • Our Discord Night Memories</span>
              <Heart className="w-8 h-8 animate-pulse fill-current" />
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-400 bg-black/10">
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
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200 text-gray-800">
                    <div className="text-6xl mb-4">🎵</div>
                    <h3 className="text-2xl font-bold mb-2">{currentSong.title}</h3>
                    <p className="text-lg mb-4">{currentSong.artist}</p>
                    <a
                      href={currentSong.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-colors duration-200"
                    >
                      <Play className="w-5 h-5" />
                      Watch on YouTube
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="space-y-6">
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
                } rounded-2xl p-6 border-4 shadow-lg transform transition-all duration-300 hover:scale-102`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white bg-red-600 text-white text-xl font-bold">
                    🎧
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-2xl font-black text-gray-800">
                          {song.title}
                        </h3>
                        <p className="text-lg font-bold text-gray-600">
                          {song.artist}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-500 bg-white px-3 py-1 rounded-full border-2 border-gray-300">
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
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="bg-white/80 rounded-xl p-4 border-2 border-pink-300">
                      <p className="text-lg text-gray-700 font-semibold italic leading-relaxed">
                        {song.meaning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-3xl p-8 border-8 border-yellow-400 shadow-xl">
              <div className="text-6xl mb-4 animate-spin">💫</div>
              <p className="text-2xl font-black leading-relaxed">
                Remember that amazing night when we stayed up till 4-5 AM on Discord, just listening to these songs and talking?
                <br />
                <span className="text-4xl text-yellow-300 animate-pulse">
                  THESE ARE ONE OF THE GOOD MEMORIES WE HAD!!
                </span>
                <br />
                💖✨🌈✨💖
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 bg-white/50 rounded-lg p-3">
              💡 If videos don't load, click the YouTube links to open them directly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;