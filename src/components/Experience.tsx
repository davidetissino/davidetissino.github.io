
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "Levi Strauss & Co.",
    role: "Data Analyst",
    period: "September 2024 - Present",
    description: "Developing data products for internal use at European and global level.",
    achievements: [
      "Project Blue: own and maintain PowerBI dashboards tracking key business metrics of Levi's X Beyonce's 'REIIMAGINE' campaign",
      "Launch Tracker: work with BigQuery and Looker Studio to develop reporting tool tracking Franchise Partners' allocation status for upcoming seasons amid major logistic distruptions and DC transition at European level",
      "LEVI.COM: develop tracking tool focusing on Levi's DTC performance at European level"
    ], 
    logo: "./img/LEVIS.jpeg",
    link: "https://www.levistrauss.com"
  },
  {
    company: "Innovis VC",
    role: "Venture Analyst",
    period: "September 2022 - Present",
    description: "Analyzing European startups and helping connect them with potential investors.",
    achievements: [
      "Performing due diligence and market research for investment opportunities",
      "Evaluating startups across various sectors and stages",
      "Building relationships with founders and investors"
    ],
    logo: "./assets/img/Innovis.png",
    link: "https://www.innovis.vc"
  },
  {
    company: "Silicon Valley Fellowship",
    role: "Fellow",
    period: "June 2022 - August 2022",
    description: "Participated in a selective program connecting students with Silicon Valley startups.",
    achievements: [
      "Networked with industry professionals and founders",
      "Gained insights into the startup ecosystem"
    ],
    logo: "./assets/img/SVF.png",
    link: "https://www.siliconvalleyfellowship.com"
  },
  {
    company: "BSVC",
    role: "Member",
    period: "January 2021 - May 2022",
    description: "Participated in student-led venture capital activities.",
    achievements: [
      "Analyzed potential investment opportunities",
      "Contributed to investment decision-making processes"
    ],
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
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg"
            >
              <div className="flex items-start gap-6">
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    className="w-16 h-16 rounded-lg object-contain glass-card p-2"
                  />
                </a>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-gradient">{exp.role}</h3>
                    <p className="text-cyan-400">{exp.company}</p>
                    {exp.period && (
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    )}
                  </div>
                  
                  {exp.description && <p className="text-gray-300">{exp.description}</p>}
                  
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                          <span className="text-cyan-400 mr-2">›</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
