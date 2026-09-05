```tsx
import React from "react";
import { motion } from "framer-motion";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "#changelog" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Community", href: "#community" },
    { label: "Status", href: "#status" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR", href: "#gdpr" },
  ],
};

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const FooterLink: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => (
  <motion.a
    href={href}
    whileHover={{ x: 4 }}
    className="text-sm text-slate-400 hover:text-indigo-300 transition-colors duration-200"
  >
    {label}
  </motion.a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <a href="#" className="inline-flex items-center gap-3 group">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center w-full h-full">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                        stroke="white"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M8 14s1.5 2 4 2 4-2 4-2"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="8.5" cy="10" r="1" fill="white" />
                      <circle cx="15.5" cy="10" r="1" fill="white" />
                      <path
                        d="M9 4v2M15 4v2"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  AI<span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Chat</span>Bot
                </span>
              </a>
            </motion.div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Intelligent customer support powered by AI. Deploy chatbots that
              work 24/7, speak multiple languages, and learn from every
              interaction.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-400 bg-white/[0.03] hover:bg-indigo-500/10 border border-slate-700/30 hover:border-indigo-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterLink label={link.label} href={link.href} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-8 border-t border-slate-800/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Stay updated</h4>
              <p className="text-slate-400 text-sm">
                Get the latest product updates and AI insights delivered to your
                inbox.
              </p>
            </div>
            <form className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-72 px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-500 bg-white/[0.05] border border-slate-700/30 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm">
            © {currentYear} AIChatBot SaaS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="#cookies"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
              Cookies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </footer>
  );
};

export default Footer;
