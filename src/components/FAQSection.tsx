import { motion } from "framer-motion";

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              How does the AI learn?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              It uses reinforcement learning from each conversation, improving over time by analyzing successful interactions and user feedback to refine response accuracy and relevance.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              Can I integrate with my existing CRM?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Yes, we offer native integrations with Salesforce, HubSpot, Zoho, and custom webhooks. Our API-first approach ensures seamless connection with most business systems.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              Is my data secure?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              All data is encrypted AES-256 at rest and in transit. We comply with GDPR, SOC 2, and ISO 27001 standards, with regular third-party security audits.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              What languages are supported?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our AI supports over 50 languages with automatic detection and real-time translation, including right-to-left scripts like Arabic and Hebrew.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              How much does it cost?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We offer flexible pricing starting at $29/month for the Starter plan. Visit our pricing page for detailed plan comparisons and enterprise options.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};