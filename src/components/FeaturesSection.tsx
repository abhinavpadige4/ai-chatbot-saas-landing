import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="ml-4 text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "24/7 Availability",
      description: "Never miss a customer query, day or night.",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
    },
    {
      title: "Multi-Language Support",
      description: "Communicate in over 50 languages automatically.",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M9 14a5.5 5.5 0 1011 0z"/></svg>
    },
    {
      title: "Smart Responses",
      description: "AI learns from conversations to improve accuracy.",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.768 0 3.42 3.42 0 001.946.806 3.42 3.42 0 014.768 0M3 10h18a3 3 0 010 6H3a3 3 0 010-6z"/></svg>
    },
    {
      title: "Analytics Dashboard",
      description: "Track performance, satisfaction, and conversion rates.",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 16h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          Powerful Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};