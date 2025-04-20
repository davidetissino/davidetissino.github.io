
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gradient">Davide Tissino</Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors"> About</a>
            <a href="#experience" className="text-sm text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="text-sm text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors">Projects</a>
            <a 
              href="./docs/Davide_Tissino_CV.pdf" 
              target="_blank"
              className="text-sm px-4 py-2 rounded-md glass-card hover:bg-white/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
