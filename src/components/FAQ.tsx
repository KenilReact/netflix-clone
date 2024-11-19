"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls to ensure a safe viewing experience for kids.",
    },
  ];

  return (
    <div className=" bg-black text-white py-16 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-[#2D2D2D] hover:bg-[#414141] transition-colors duration-300 px-8 py-6 flex justify-between items-center"
              >
                <span className="text-2xl text-left">{faq.question}</span>
                <Plus
                  className={`w-8 h-8 min-w-[32px] transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#2D2D2D] ${
                  openIndex === index ? "max-h-[500px] py-6" : "max-h-0"
                }`}
              >
                <div className="px-8 text-xl text-[#c3c3c3]">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl mb-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-4 bg-black/40 border border-[#454545] rounded text-white min-w-[300px] focus:outline-none focus:border-gray-300"
            />
            <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-8 py-4 rounded text-xl">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
