
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1 
          className="text-6xl font-bold mb-4 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Davide Tissino
        </motion.h1>
        <motion.h2 
          className="text-xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Data Analyst @ Levi Strauss, Basketball Analyst
        </motion.h2>
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLink href="https://www.linkedin.com/in/davidetissino/" icon="linkedin" />
          <SocialLink href="https://twitter.com/davidetissi" icon="twitter" />
          <SocialLink href="https://github.com/davidetissino" icon="github" />
          <SocialLink href="mailto:davidetissino2@gmail.com" icon="envelope" />
        </motion.div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <i className={`fa fa-${icon} text-2xl`} />
  </a>
);

export default Hero;
