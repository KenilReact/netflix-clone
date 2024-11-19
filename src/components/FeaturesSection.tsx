import FeatureCard from "./ui/FeatureCard";
import { Tv, Download, Laptop, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: Tv,
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favourites easily and always have something to watch.",
      icon: Download,
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: Laptop,
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: Users,
    },
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">
          More reasons to join
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeaturesSection;
