
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "Levi Strauss & Co.",
    role: "Data Analyst Intern",
    period: "September 2024 - Present",
    description: "Developing data products for internal use at European and global level.",
    achievements: [
      "Project Blue: own and maintain dashboard tracking Levi's 'REIIMAGINE' partnership with Beyoncé. Built end-to-end pipeline from BigQuery SQL extraction to PowerBI visual",
      "Launch Tracker: automated franchisee order/shipment tracking by integrating SQL data into weekly-updated PowerBI dashboard. Ensured logistics transparency amid supply chain distruptions due to DC transition at European level",
      "LEVI.COM: own and maintain fully automated internal reporting tool for Levi's European e-commerce business, replacing legacy Excel reports"
    ], 
    logo: "./img/LEVIS.jpeg",
    link: "https://www.levistrauss.com"
  },
  {
    company: "Innovis VC",
    role: "Venture Analyst",
    period: "March 2024 - October 2024",
    description: "Association operating at the intersection of startups, students and investors.",
    achievements: [
      "Weekly startup sourcing and due diligence to identify target investment opportunities for association's partners",
      "Startup pitching and presentation to other members, interacting with founders",
    ],
    logo: "./img/Innovis.png",
    link: "https://www.innovis.vc"
  },
  {
    company: "Silicon Valley Fellowship",
    role: "Fellow",
    period: "February 2024",
    description: "Selective tech-focused bootcamp in Silicon Valley, California",
    achievements: [
      "Networked with industry-leading professionals and founders",
      "Gained insights into the Startup and Venture Capital ecosystem", 
      "Visited world-class tech companies like Google, Tesla and other relevant startups"
    ],
    logo: "./img/SVF.png",
    link: "https://www.siliconvalleyfellowship.com"
  },
  {
    company: "Bocconi Students for Venture Capital",
    role: "Member",
    period: "June 2023 - March 2024",
    description: "Participated in student-led venture capital activities.",
    achievements: [
      "Analysis of the current state of VC, current trends and developments"
    ],
    logo: "./img/BSVC.png",
    link: "https://www.bsvc.club"
  },
  {
    company: "Camera di Commercio di Pordenone - Udine",
    role: "Analyst Intern",
    period: "January 2020",
    description: "Analyses of local Small-Medium Enterprises (SMEs) in the region",
    achievements: [
      "Collected data on several local enterprises looking to qualify for funding opportunities", 
      "Reporting of primary insights through Microsoft Excel"
    ],
    logo: "./img/cameracommercio.jpeg",
    link: "https://pnud.camcom.it"
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
