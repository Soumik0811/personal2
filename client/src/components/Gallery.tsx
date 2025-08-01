import React, { useState } from "react";
import { ArrowLeft, ExternalLink, Heart, Camera } from "lucide-react";

const galleryCategories = {
  "Goofy Pictures": [
    {
      id: "1kZNWHoj7mcgNrZvNVFf9GvLrwdd7gVi9",
      driveLink:
        "https://drive.google.com/file/d/1kZNWHoj7mcgNrZvNVFf9GvLrwdd7gVi9/view?usp=drive_link",
      caption: "Face care 😄",
    },
    {
      id: "1tTltuj1_h7Il4NSWoIpP0cGawOWWOk5w",
      driveLink:
        "https://drive.google.com/file/d/1tTltuj1_h7Il4NSWoIpP0cGawOWWOk5w/view?usp=drive_link",
      caption: "Fula Fula Muh 🤪",
    },
    {
      id: "1MnBrZlZhvUmFnj2ZHezqOlzK_wNlCuQw",
      driveLink:
        "https://drive.google.com/file/d/1MnBrZlZhvUmFnj2ZHezqOlzK_wNlCuQw/view?usp=drive_link",
      caption: "Can't stop laughing at this! 😂",
    },
  ],
  Together: [
    {
      id: "1B7VQ9bXP4ZdIXfluEO5xJ9_2etnhqH2T",
      driveLink:
        "https://drive.google.com/file/d/1B7VQ9bXP4ZdIXfluEO5xJ9_2etnhqH2T/view?usp=drive_link",
      caption: "Remember this? grabbed ur pichwara here 😏",
    },
    {
      id: "1zkqdqzVojR4WzoTkGHF0lyRoN232L9Xb",
      driveLink:
        "https://drive.google.com/file/d/1zkqdqzVojR4WzoTkGHF0lyRoN232L9Xb/view?usp=drive_link",
      caption: "Together forever 💕",
    },
  ],
};

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    id: string;
    driveLink: string;
    caption: string;
  } | null>(null);

  // Function to get direct Google Drive image URL
  const getDirectImageUrl = (fileId: string) => {
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Goofy Pictures":
        return "😂";
      case "Together":
        return "💕";
      default:
        return "📸";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-white mb-4 drop-shadow-lg">
            📸 Our Memory Gallery 📸
          </h1>
          <div className="text-4xl mb-6 animate-bounce">💖✨🌈✨💖</div>
          <p className="text-2xl text-white font-bold drop-shadow-md">
            🎊 Congratulations! You've unlocked our private moments! 🎊
          </p>
        </div>

        {!selectedCategory ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.keys(galleryCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 shadow-2xl border-8 border-yellow-400 transform hover:scale-105 hover:rotate-1 transition-all duration-300 group"
              >
                <div className="text-8xl mb-4 group-hover:animate-bounce">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-3xl font-black text-purple-800 mb-2">
                  {category}
                </h3>
                <p className="text-xl text-gray-600 font-semibold">
                  {
                    galleryCategories[
                      category as keyof typeof galleryCategories
                    ].length
                  }{" "}
                  precious memories
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-purple-600">
                  <Camera className="w-6 h-6" />
                  <span className="font-bold">Click to explore!</span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-5xl font-black text-white drop-shadow-lg flex items-center gap-4">
                <span className="text-6xl">
                  {getCategoryIcon(selectedCategory)}
                </span>
                {selectedCategory}
              </h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="bg-red-500 hover:bg-red-600 text-white font-black py-4 px-8 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 text-xl border-4 border-white flex items-center gap-2"
              >
                <ArrowLeft className="w-6 h-6" />
                Back
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryCategories[
                selectedCategory as keyof typeof galleryCategories
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-2xl border-8 border-pink-400 transform hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={getDirectImageUrl(item.id)}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover rounded-2xl group-hover:shadow-xl transition-all duration-300"
                        onError={(e) => {
                          // If direct URL fails, show placeholder
                          e.currentTarget.style.display = "none";
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const placeholder = parent.querySelector(
                              ".placeholder",
                            ) as HTMLElement;
                            if (placeholder) placeholder.style.display = "flex";
                          }
                        }}
                      />
                      <div className="placeholder absolute inset-0 hidden flex-col items-center justify-center text-gray-600">
                        <div className="text-6xl mb-2">📸</div>
                        <p className="text-center font-bold mb-4">
                          Image Preview
                        </p>
                        <a
                          href={item.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View on Drive
                        </a>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="bg-pink-100 rounded-xl p-3 flex-1 mr-2 border-2 border-pink-300">
                        <p className="text-gray-700 font-semibold italic">
                          {item.caption}
                        </p>
                      </div>
                      <a
                        href={item.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-lg"
                        title="View on Google Drive"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full bg-white rounded-2xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Our Memory
                </h3>
                <p className="text-gray-600 italic">{selectedImage.caption}</p>
              </div>
              <img
                src={getDirectImageUrl(selectedImage.id)}
                alt="Enlarged memory"
                className="max-w-full max-h-96 object-contain rounded-xl shadow-xl mx-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement("div");
                    fallback.className = "text-center py-8";
                    fallback.innerHTML = `
                      <div class="text-6xl mb-4">📸</div>
                      <p class="text-gray-600 mb-4">Unable to display image</p>
                      <a href="${selectedImage.driveLink}" target="_blank" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"></path></svg>
                        View on Google Drive
                      </a>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
              />
              <div className="text-center mt-4">
                <a
                  href={selectedImage.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Open in Google Drive
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-white/95 rounded-3xl p-8 shadow-xl border-8 border-green-400 max-w-3xl mx-auto">
            <div className="text-8xl mb-6 animate-pulse">💝</div>
            <p className="text-3xl font-bold text-purple-800 leading-relaxed mb-4">
              Every photo tells our story, and I can't wait to make a million
              more memories with you!
            </p>
            <p className="text-2xl text-pink-600 font-black flex items-center justify-center gap-2">
              <Heart className="w-8 h-8 fill-current animate-pulse" />
              You're my favorite adventure!
              <Heart className="w-8 h-8 fill-current animate-pulse" />
            </p>
            <div className="text-4xl mt-4">🌟✨💫✨🌟</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
