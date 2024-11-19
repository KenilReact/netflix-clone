import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="bg-[linear-gradient(149deg,_#192247_0%,_#210e17_96.86%)] rounded-lg p-8 flex flex-col h-full transition-transform">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-8 flex-grow">{description}</p>
      <div className="mt-auto">
        <div className="relative w-14 h-14 ms-auto">
          <Icon
            className="w-14 h-14 text-pink-500 opacity-90"
            strokeWidth={1.5}
          />
          <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
