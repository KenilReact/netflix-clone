import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="container mx-auto flex justify-between items-center py-6 px-4">
        <div className="relative w-40 h-16">
          <Image
            src="/Netflix_Logo.png"
            alt="Netflix"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex items-center gap-4">
          <select
            className="bg-black/30 text-white border border-white/30 rounded px-4 py-1 text-sm hover:bg-black/40 transition"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
          <Button
            variant="destructive"
            className="bg-[#e50914] hover:bg-[#f6121d] text-white px-4 py-1"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
