
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Levi Strauss & Co.",
    role: "Data Analyst",
    logo: "./assets/img/LEVIS.jpeg",
    link: "https://www.levistrauss.com"
  },
  {
    company: "Innovis VC",
    role: "Venture Analyst",
    logo: "./assets/img/Innovis.png",
    link: "https://www.innovis.vc"
  },
  {
    company: "Silicon Valley Fellowship",
    logo: "./assets/img/SVF.png",
    link: "https://www.siliconvalleyfellowship.com"
  },
  {
    company: "BSVC",
    logo: "./assets/img/BSVC.png",
    link: "https://www.bsvc.club"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-gradient text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <motion.a
              key={exp.company}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-card p-6 rounded-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={exp.logo} 
                alt={exp.company}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
              {exp.role && (
                <p className="text-sm text-gray-400 mt-2">{exp.role}</p>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
