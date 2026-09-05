import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: '"The AI chatbot reduced our response time by 70%. Our customers are happier and our support team can focus on complex issues."',
    author: 'Alex Rodriguez',
    title: 'SaaS Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    text: '"Multi-language support helped us expand globally. We now serve customers in 15+ languages without hiring additional support staff."',
    author: 'Maria Chen',
    title: 'E-commerce Manager',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    text: '"The analytics dashboard gave us insights we never had before. We reduced support costs by 40% while improving satisfaction scores."',
    author: 'James Wilson',
    title: 'Customer Support Director',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a48e?w=100&h=100&fit=crop&crop=face'
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400">
            Real results from businesses using our AI chatbot
          </p>
        </div>
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-10 text-center min-h-[300px]">
            <p className="text-lg text-gray-200 italic mb-8">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center justify-center space-x-6">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-16 h-16 rounded-full border-4 border-purple-600/50 object-cover"
              />
              <div className="text-left">
                <h3 className="font-semibold text-white">{testimonials[currentIndex].author}</h3>
                <p className="text-sm text-gray-400">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-3 -mb-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8'
                    : 'bg-gray-600/50 hover:bg-gray-500'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;