
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass-card rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="/img/fotoseria.png"
                alt="Davide Tissino"
                className="rounded-lg w-full object-cover glass-card"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 rounded-lg space-y-4">
                <h2 className="text-2xl font-bold text-gradient">Hi, I'm Davide!👋</h2>
                <div className="space-y-4 text-gray-300">
                <p className="font-mono">
                  <span className="text-green-400">const</span>{" "}
                  <span className="text-purple-400">interests</span>{" "}
                   ={" "}
                  <span className="text-yellow-300">
                     "data analytics & science, entrepreneurship, basketball";
                  </span>
                </p>

                  <p>
                    I recently graduated from Bocconi University, in Milan 🇮🇹. During my academic journey, 
                    I was exposed to foundations of computer science and data analytics, primarily through 
                    programming languages R and Python.
                  </p>
                  <p>
                    This fostered my interest for data analytics and data science, and subsequently led me 
                    to pursue an internship as <span className="text-cyan-400">Data Analyst</span>, working for 
                    Levi Strauss & Co.
                  </p>
                  <p>
                    I am interested by the Start-ups and Venture Capital sectors, and have thus taken on a 
                    role as a <span className="text-cyan-400">Venture Analyst</span> at Innovis VC.
                  </p>
                  <p>
                    Being an avid basketball enthusiast, in my free time I enjoy creating data visualizations 
                    and web applications focusing on <span className="text-cyan-400">NBA basketball</span> 🏀.
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="glass-card hover:bg-white/10 mt-4"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ArrowDown className="mr-2 h-4 w-4" />
                  Check out my projects below
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
