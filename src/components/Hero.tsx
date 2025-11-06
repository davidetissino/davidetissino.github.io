
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <motion.div 
          className="glass-card p-8 rounded-lg space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Davide Tissino
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Data Science @ PoliMi | Data Analyst @ Levi's | Sports Analytics
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            PoliMi graduate student in Data Science, with a passion for entrepreneurship and programming. 
            <br/>
            Data Analyst background at Levi Strauss, developing data products for European and global markets. 
            <br/>
            Passionate about basketball, I'm trying to combine it with data to one day break into the sports analytics sector.
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            
            <Button
              variant="outline"
              className="glass-card hover:bg-white/10"
              asChild
            >
              <a href="https://www.linkedin.com/in/davidetissino/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              className="glass-card hover:bg-white/10"
              asChild
            >
              <a href="https://github.com/davidetissino" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              className="glass-card hover:bg-white/10"
              asChild
            >
              <a href="mailto:davidetissino2@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            
         <Button
              variant="outline"
              className="glass-card hover:bg-white/10"
              asChild
            >
              <a 
              href="/Davide_Tissino_CV.pdf" 
              target="_blank"
              className="text-sm px-4 py-2 rounded-md glass-card hover:bg-white/10 transition-colors"
            >
              Resume
            </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
