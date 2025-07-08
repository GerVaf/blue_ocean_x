/* eslint-disable react/prop-types */
// import logo from "../../assets/ChatGPT Image Jul 7, 2025, 06_13_17 PM.png";

import ShinyText from "./ShinnyText";

const Player = () => {
  return (
    <div className="relative w-full aspect-video overflow-hidden ">
      {/* Embedded YouTube Video */}
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/tWU8CXFLOgk?si=5PGg8_ZQIvWod2iA&autoplay=1&mute=1&controls=1&rel=0&loop=1&playlist=tWU8CXFLOgk"
        title="Blue Ocean X Highlight"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Overlay Text & Logo */}
      <div className="absolute inset-0  flex flex-col items-center justify-center bg-black/30 text-white text-center px-4">
        <div className="text-3xl font-bold drop-shadow-md">
          <ShinyText
            text="BLUE OCEAN X"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>
        <div className="text-lg drop-shadow-md">
          <ShinyText
            text="The Best Service You'll Ever Get"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
