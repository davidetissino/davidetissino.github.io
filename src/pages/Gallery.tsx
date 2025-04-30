
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Add scroll event listener for the top button visibility
    const handleScroll = () => {
      const topButton = document.getElementById("top-button");
      if (!topButton) return;
      
      const secondRow = document.getElementById("second-row");
      if (!secondRow) return;
      
      const os = secondRow.offsetTop;
      if (window.scrollY < os) {
        topButton.classList.remove("visible");
      } else {
        topButton.classList.add("visible");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background/95 min-h-screen pb-16">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-gradient">Davide Tissino</Link>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
              <a 
                href="/Davide_Tissino_CV.pdf" 
                target="_blank"
                className="text-sm px-4 py-2 rounded-md glass-card hover:bg-white/10 transition-colors"
              >
                Resume
              </a>
              <div className="hidden md:flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/davidetissino/" target="_blank" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/davidetissino" target="_blank" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://twitter.com/dvdtssn" target="_blank" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="mailto:davidetissino2@gmail.com" target="_blank" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <section className="pt-24 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Data Visualization Gallery</h1>
          <h3 className="text-xl text-gray-400 mb-6">
            Collection of the NBA data visualizations I created in my free time.
            <strong className="text-blue-500"> Click on an image</strong> to view it on Twitter
          </h3>
        </div>
        
        <div className="gallery-row max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="second-row">
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">MVP on-off Differential</p>
            <a href="https://twitter.com/dvdtssn/status/1728116264223088850/photo/1" target="_blank" className="block">
              <img src="public/img/graphs/MVP on-off.png" alt="MVP on-off Differential" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">Scoring By Zone for PPG Leaders</p>
            <a href="https://twitter.com/dvdtssn/status/1731441317681541209/photo/1" target="_blank" className="block">
              <img src="/img/graphs/FGM by zone for Top15 PPG.png" alt="Scoring By Zone for PPG Leaders" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">Most Improved Scorers</p>
            <a href="https://twitter.com/dvdtssn/status/1740145755627884836/photo/1" target="_blank" className="block">
              <img src="/img/graphs/Leaders in PPG increase.png" alt="Most Improved Scorers" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">Teams Relative Ratings</p>
            <a href="https://twitter.com/dvdtssn/status/1745584868866621806/photo/1" target="_blank" className="block">
              <img src="/img/graphs/Relative Ratings 1.11.png" alt="Teams Relative Ratings" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">Points in a Game Leaderboard</p>
            <a href="https://twitter.com/dvdtssn/status/1751298349104312764/photo/1" target="_blank" className="block">
              <img src="/img/graphs/Most points in NBA history.png" alt="Points in a Game Leaderboard" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">Shooting Attempts Distribution</p>
            <a href="https://twitter.com/dvdtssn/status/1730723506889924791/photo/1" target="_blank" className="block">
              <img src="/img/graphs/Top PPG shooting trend.png" alt="Shooting Attempts Distribution" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">Chris Paul Scorigami</p>
            <a href="https://twitter.com/dvdtssn/status/1741219428262355430/photo/1" target="_blank" className="block">
              <img src="/img/graphs/CP3 Scorigami.png" alt="Chris Paul Scorigami" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">Biggest Drops in PPG</p>
            <a href="https://twitter.com/dvdtssn/status/1740164363275936151/photo/1" target="_blank" className="block">
              <img src="/img/graphs/Leaders in PPG drop.png" alt="Biggest Drops in PPG" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">NBA Teams Ratings</p>
            <a href="https://twitter.com/dvdtssn/status/1723833329064018116/photo/1" target="_blank" className="block">
              <img src="/img/graphs/Team ratings + logos.PNG" alt="NBA Teams Ratings" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">NBA Teams Shotcharts</p>
            <a href="https://twitter.com/dvdtssn/status/1725690099256398190/photo/1" target="_blank" className="block">
              <img src="/img/graphs/Teams shooting habits.png" alt="NBA Teams Shotcharts" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">NBA Teams Net Ratings</p>
            <a href="https://twitter.com/dvdtssn/status/1724788962739564972/photo/1" target="_blank" className="block">
              <img src="/img/graphs/Net ratings.png" alt="NBA Teams Net Ratings" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
          
          <div className="gallery-column bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <p className="text-center p-4 text-lg">NBA Free Throws Leaders</p>
            <a href="https://twitter.com/dvdtssn/status/1739816622032835041/photo/1" target="_blank" className="block">
              <img src="/img/graphs/FT analysis.png" alt="NBA Free Throws Leaders" className="w-full h-auto" />
              <p className="text-center py-3 bg-blue-900/30 text-blue-400">View on Twitter</p>
            </a>
          </div>
        </div>
      </section>
      
      <div id="top-button" className="fixed bottom-8 right-8 opacity-0 transition-opacity duration-300">
        <a 
          className="bg-blue-600 hover:bg-blue-700 transition-colors w-10 h-10 rounded-full flex items-center justify-center text-white" 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </a>
      </div>

      <style jsx>{`
        #top-button.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
