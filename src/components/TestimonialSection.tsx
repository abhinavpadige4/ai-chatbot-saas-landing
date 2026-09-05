import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "The AI chatbot reduced our support tickets by 40%.",
    author: "Alex",
    role: "SaaS Founder",
  },
  {
    id: 2,
    text: "Setup was easy and the multilingual support is amazing.",
    author: "Maria",
    role: "E-commerce Manager",
  },
  {
    id: 3,
    text: "Analytics helped us improve response quality.",
    author: "James",
    role: "Tech Lead",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          What Our Customers Say
        </h2>
        <div className="relative">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="w-64 h-1 bg-gray-800 rounded-full relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full w-[calc(100%/3)] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
                style={{ transform: `translateX(${currentIndex * 100}%)` }}
              ></div>
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 -z-10"></div>
            <blockquote className="text-lg text-gray-200 mb-6 italic relative z-10">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">{testimonials[currentIndex].author}</h3>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;