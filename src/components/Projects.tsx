import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "NBA Box Scores Query",
    description: "Developed a Shiny App using R to display all NBA Regular Season and Playoffs box scores, scraped starting from the 1946-47 season. Includes player filter and text filter for custom sorting.",
    image: "/img/boxscores.png",
    link: "https://davidetissino.shinyapps.io/NBA_Boxscores_Query/",
    icon: "📊"
  },
  {
    title: "Data Visualization Gallery",
    description: "A collection of NBA data visualizations created using R with packages like rvest, httr, tidyverse, and ggplot. Each visualization is linked to corresponding tweets.",
    image: "/img/gallery.png",
    link: "/gallery",
    icon: "🎨"
  },
  {
    title: "Shot Chart Analyzer",
    description: "Working on a Shiny App to showcase NBA players' shot charts with various visualization options, including efficiency comparisons and career period analysis.",
    image: "/img/progress.jpg",
    icon: "🔥",
    inProgress: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-gradient text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* === LOGIC START === */}
              {/* IF LINK IS '/gallery', USE LINK COMPONENT (No Refresh) */}
              {project.link === "/gallery" ? (
                <Link
                  to={project.link}
                  className={`block h-full glass-card hover-card rounded-lg overflow-hidden ${project.inProgress ? 'cursor-default' : ''}`}
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.inProgress && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/50">
                          In Progress
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <span>{project.icon}</span>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                </Link>
              ) : (
                /* ELSE USE NORMAL ANCHOR TAG (New Tab) */
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block h-full glass-card hover-card rounded-lg overflow-hidden ${project.inProgress ? 'cursor-default' : ''}`}
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.inProgress && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/50">
                          In Progress
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <span>{project.icon}</span>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                </a>
              )}
              {/* === LOGIC END === */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;