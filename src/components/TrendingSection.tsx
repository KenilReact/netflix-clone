"use client";
import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const TrendingSection = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const movies = [
    {
      id: 1,
      title: "Devara",
      image: "/image1.webp",
    },
    {
      id: 2,
      title: "Do Patti",
      image: "/image2.webp",
    },
    {
      id: 3,
      title: "The Buckingham Murders",
      image: "/image3.webp",
    },
    {
      id: 4,
      title: "Mciyazhagan",
      image: "/image4.webp",
    },
    {
      id: 5,
      title: "Bhool Bhulaiyaa",
      image: "/image5.webp",
    },
    {
      id: 6,
      title: "Vijay69",
      image: "/image6.webp",
    },
    {
      id: 7,
      title: "Khel Khel Mein",
      image: "/image7.webp",
    },
  ];

  const scrollNext = () => {
    setScrollPosition((prev) => Math.min(prev + 1, movies.length - 4));
  };

  const scrollPrev = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative bg-black pt-16 pb-20">
      {/* Gradient overlay at the top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-pink-500/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h2 className="text-white text-2xl font-medium mb-4">Trending Now</h2>

          <div className="flex gap-4 mb-6">
            <div className="relative">
              <select className="appearance-none bg-transparent text-white border border-white/30 rounded px-4 py-1 pr-8">
                <option value="india">India</option>
              </select>
              <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
            </div>

            <div className="relative">
              <select className="appearance-none bg-transparent text-white border border-white/30 rounded px-4 py-1 pr-8">
                <option value="movies">Movies</option>
              </select>
              <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Movie cards container */}
          <div className="flex gap-14 overflow-hidden relative">
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="relative flex-none w-52 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${scrollPosition * 272}px)`,
                }}
              >
                {/* Top 10 Badge */}
                <div className="absolute -left-7 bottom-0 z-10">
                  <div className="relative">
                    <div className="text-8xl font-bold text-slate-800 opacity-90">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Movie Card */}
                <div className=" relative rounded-lg overflow-hidden ">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          {scrollPosition > 0 && (
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/80 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {scrollPosition < movies.length - 4 && (
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/80 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
