import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Simple & Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the plan that fits your business needs. All plans include 24/7 support and continuous AI improvements.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {/* Starter Plan */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-white mb-4">Starter</h3>
            <p className="text-5xl font-bold text-indigo-400 mb-6">
              $29<span className="text-lg font-normal">/mo</span>
            </p>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                1 Chatbot
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                1,000 Messages/mo
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Basic Analytics
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Email Support
              </li>
            </ul>
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-t from-indigo-900/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Pro</h3>
              <span className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded text-sm">Most Popular</span>
            </div>
            <p className="text-5xl font-bold text-indigo-400 mb-6">
              $79<span className="text-lg font-normal">/mo</span>
            </p>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                3 Chatbots
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                10,000 Messages/mo
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Advanced Analytics
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Branding Removal
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Priority Support
              </li>
            </ul>
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Choose Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-white mb-4">Enterprise</h3>
            <p className="text-5xl font-bold text-indigo-400 mb-6">
              Custom<span className="text-lg font-normal">/mo</span>
            </p>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited Chatbots
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited Messages
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Account Manager
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Custom SLA
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                On-premise Deployment
              </li>
            </ul>
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;