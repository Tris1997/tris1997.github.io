function Education() {
  return (
    <div className="page">
      <section className="education-section">
        <div className="container">
          <div className="education-content">
            {/* Header with EDUCATION and Resume link */}
            <div className="education-header">
              <h3 className="education-main-title">EDUCATION</h3>
              <a href="/resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </div>

            <div className="education-item">
              <h4 className="education-title">Bachelor's Degree</h4>
              <p className="education-subtitle"><li>B.S. in Computer Science - California State University, Long Beach</li></p>
              <p className="education-year"></p>
              <p className="education-description"></p>
            </div>

            <div className="education-item certifications">
              <h4 className="education-title">Certifications</h4>
              <ul className="education-list">
                <li>CompTIA Security+ | In Progress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;