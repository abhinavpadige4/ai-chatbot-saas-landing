import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Powerful Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* 24/7 Availability */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Availability</h3>
              <p className="text-gray-400">Never miss a customer query.</p>
            </div>
          </div>
          
          {/* Multi-Language */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M9 15a5 5 0 109.999 0V12h-1a3 3 0 01-2.998 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Multi-Language</h3>
              <p className="text-gray-400">Support 50+ languages out of the box.</p>
            </div>
          </div>
          
          {/* Smart Responses */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Responses</h3>
              <p className="text-gray-400">AI learns from conversations to improve.</p>
            </div>
          </div>
          
          {/* Analytics Dashboard */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M3 3v18M9 12h6M9 9v3m0 0h3m-3-3h3M12 9v3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Analytics Dashboard</h3>
              <p className="text-gray-400">Track performance and satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;