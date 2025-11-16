function Home() {
const scrollToAbout = () => {
  const aboutSection = document.querySelector('.about-section');
  if (aboutSection) {
    const yOffset = 50;
    const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
};

  return (
    <div className="page">
      <section className="home-section">
        <div className="container">
          <div className="hero-content">
            <div className="profile-image">
              <img
                src={`${import.meta.env.BASE_URL}picgif.gif`}
                alt="Profile"
              />
            </div>
            
            <h2 className="hero-title">Tristan Clayman</h2>
            <p className="hero-subtitle">
              Software Engineer | Data Enthusiast | Problem Solver 
            </p>
            <div className="scroll-arrow" onClick={scrollToAbout}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#b47bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            {/* Header with About Me title */}
            <div className="about-header">
              <h3 className="about-main-title">About Me</h3>
            </div>

            <p>
              Hello, my name is <span className="highlight-name">Tristan Clayman</span>! I'm a Computer Science graduate from California State University, Long Beach, 
              and the creator of this website, which I built using JavaScript, React, and Vite.
            </p>
            <p>
              I'm an aspiring data scientist with a strong interest in data, numbers, and statistical analysis. I enjoy building systems that use logic, patterns, and data driven insights. 
              Through my projects I've gained experience across full-stack development, databases, data analysis and distributed systems, 
              continually pushing myself to grow both technically and professionally.
            </p>
            <p>
              I'm always excited to connect with others and explore opportunities where I can contribute and keep developing my craft!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;