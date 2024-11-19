import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/netflix-bg.jpg"
          alt="Netflix Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Starts at ₹149. Cancel at any time.
          </p>
          <p className="text-lg md:text-xl mb-8">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          {/* Email Form */}
          <form className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full md:w-2/3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-4 text-white bg-black/40 border border-gray-600 rounded focus:outline-none focus:border-white placeholder-gray-400"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-auto bg-[#e50914] hover:bg-[#f6121d] text-white px-8 py-6 text-xl"
            >
              Get Started &gt;
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
