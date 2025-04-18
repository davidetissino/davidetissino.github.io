import { motion } from "framer-motion";
import { Code2, Database, ChartBar, Laptop, BrainCircuit, Gem } from "lucide-react";

const skillCategories = [
  {
    title: "Data Science & Analytics",
    icon: "chart-line",
    skills: [
      { name: "Web Scraping", icon: "chart-line" },
      { name: "Data Cleaning & Analysis", icon: "database" },
      { name: "Data Visualization", icon: "chart-bar" },
      { name: "Data Applications", icon: "laptop-code" }
    ]
  },
  {
    title: "Business & Strategy",
    icon: "briefcase",
    skills: [
      { name: "Start-ups", icon: "rocket" },
      { name: "Sourcing", icon: "search" },
      { name: "Venture Capital", icon: "chart-pie" },
      { name: "Investment Decisions", icon: "balance-scale" },
      { name: "Business Planning", icon: "tasks" },
      { name: "MS Office", icon: "file-excel" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-gradient text-center flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Code2 className="w-8 h-8" /> Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="code-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 left-4 px-2 bg-background text-blue-400 text-sm">
                {category.title}.js
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center p-3 rounded-lg bg-blue-950/30 hover:bg-blue-950/40 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <i className={`fas fa-${skill.icon} mr-2 text-blue-400`}></i>
                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
