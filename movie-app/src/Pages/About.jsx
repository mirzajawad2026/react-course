import React from "react";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side */}
        <div className="flex-1 flex justify-center">
          <img
            src={logo}
            alt="CineVault Logo"
            className="w-72 hover:scale-110 transition-all duration-500 drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]"
          />
        </div>

        {/* Right Side */}
        <div className="flex-1">

          <span className="bg-yellow-500 text-black px-4 py-1 rounded-full font-semibold">
            About CineVault
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight">
            Your Ultimate
            <span className="text-yellow-400"> Movie </span>
            Destination
          </h1>

          <p className="mt-6 text-zinc-300 leading-8 text-lg">
            Welcome to <span className="text-yellow-400 font-semibold">CineVault</span>,
            your personal gateway to the world of movies. Discover trending films,
            top-rated classics, exciting upcoming releases, and detailed movie
            information—all in one beautifully designed platform.
          </p>

          <p className="mt-5 text-zinc-400 leading-8">
            CineVault is built using modern web technologies like
            <span className="text-yellow-400"> React.js</span>,
            <span className="text-yellow-400"> Tailwind CSS</span>, and
            <span className="text-yellow-400"> TMDB API</span> to deliver a
            fast, responsive, and engaging movie browsing experience. Whether
            you're searching for your next favorite film or exploring timeless
            classics, CineVault helps you discover amazing entertainment with
            ease.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-zinc-900 p-5 rounded-2xl hover:bg-yellow-500 hover:text-black transition duration-300">
              <h3 className="text-xl font-bold">🎬 Trending Movies</h3>
              <p className="text-sm mt-2">
                Explore the latest trending movies worldwide.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 rounded-2xl hover:bg-yellow-500 hover:text-black transition duration-300">
              <h3 className="text-xl font-bold">⭐ Top Rated</h3>
              <p className="text-sm mt-2">
                Browse the highest-rated movies of all time.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 rounded-2xl hover:bg-yellow-500 hover:text-black transition duration-300">
              <h3 className="text-xl font-bold">🚀 Upcoming</h3>
              <p className="text-sm mt-2">
                Stay updated with upcoming movie releases.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 rounded-2xl hover:bg-yellow-500 hover:text-black transition duration-300">
              <h3 className="text-xl font-bold">❤️ Easy to Use</h3>
              <p className="text-sm mt-2">
                Clean design with a smooth browsing experience.
              </p>
            </div>

          </div>

        

        </div>

      </div>
    </section>
  );
};

export default About;