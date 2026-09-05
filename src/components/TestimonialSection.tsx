import React from 'react';

const testimonials = [
  {
    quote: "The AI chatbot reduced our support tickets by 40%.",
    author: "Alex, SaaS Founder"
  },
  {
    quote: "Setup was easy and the multilingual support is amazing.",
    author: "Maria, E-commerce Manager"
  },
  {
    quote: "Analytics helped us improve response quality.",
    author: "James, Tech Lead"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <p className="text-lg text-gray-200 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.split(' ')[0][0]}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">{testimonial.author}</h3>
                  <p className="text-sm text-gray-400">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;