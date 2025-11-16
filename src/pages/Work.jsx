function Work() {
  return (
    <div className="page">
      <section className="work-section">
        <div className="container">
          <div className="projects-list">
            {/* Header with PROJECTS title */}
            <div className="projects-header">
              <h3 className="projects-main-title">PROJECTS</h3>
            </div>

            {/* LanguageLink Project */}
            <div className="project-item">
              <div className="project-header">
                <h4 className="project-name">LanguageLink |</h4>
                <span className="project-tech">Full-stack JavaScript (React, Node.js, Vite)</span>
              </div>
              <ul className="project-bullets">
                <li>Led a team to architect and develop a full-stack language learning app using React, Javascript, Vite, CSS and HTML.</li>
                <li>Integrated Libre Translate API for real time multilingual communication.</li>
                <li>Implemented Firebase Authentication and Firestore for secure user data management.</li>
                <li>Developed interactive community features, allowing users to create posts, comment, and engage, fostering an immersive learning environment.</li>
                <li>Engineered real-time messaging and friend system features using Firestore, enhancing user connectivity and engagement.</li>
                <li>Created responsive login and signup pages with live database updates and client-side validation.</li>
              </ul>
            </div>

            {/* Peer-to-Peer Networks Project */}
            <div className="project-item">
              <div className="project-header">
                <h4 className="project-name">Peer-to-Peer Networks |</h4>
                <span className="project-tech">C++</span>
              </div>
              <ul className="project-bullets">
                <li>Developed a Docker-based file synchronization system for decentralized file sharing among multiple nodes.</li>
                <li>Built scalable architecture with C++ and Docker Compose to enable client-server functionality for each node.</li>
                <li>Automated file discovery and synchronization using multi-threaded TCP servers for real-time updates.</li>
                <li>Implemented dynamic node discovery, replacing hard-coded peers with flexible node communications.</li>
                <li>Optimized performance with asynchronous network requests and periodic synchronization cycles.</li>
                <li>Utilized Git for version control and Docker for containerization, enabling reproducible deployments and streamlined collaboration.</li>
              </ul>
            </div>

            {/* MongoDB Enrollment System Project */}
            <div className="project-item">
              <div className="project-header">
                <h4 className="project-name">MongoDB-Based Enrollment System |</h4>
                <span className="project-tech">Java</span>
              </div>
              <ul className="project-bullets">
                <li>Developed a MongoDB-based enrollment management system for student course registration and section assignments.</li>
                <li>Designed flexible data models for efficient enrollment management.</li>
                <li>Implemented functions for adding, listing, and unenrolling students with validation.</li>
                <li>Integrated dynamic selection prompts for administrators and supported multiple grading categories.</li>
                <li>Leveraged MongoDB's aggregation and query features for efficient data retrieval.</li>
              </ul>
            </div>

            {/* League of Legends Data Analytics Project */}
            <div className="project-item">
              <div className="project-header">
                <h4 className="project-name">League of Legends Data Analytics Platform |</h4>
                <span className="project-tech">Python</span>
              </div>
              <ul className="project-bullets">
                <li>Collaborated with a cross-functional team using Agile to architect and deploy a data-driven application leveraging the Riot Games League of Legends API.</li>
                <li>Engineered a scalable pipeline with Python, Pandas, and NumPy to transform and load real-time match data, such as win/loss ratios into a SQL database.</li>
                <li>Designed and implemented asynchronous API calls to incorporate error handling and caching strategies to optimize data retrieval and manage request rate limits.</li>
                <li>Developed interactive, dynamic visualizations using Plotly to transform complex data sets into intuitive dashboards for real-time performance analysis.</li>
                <li>Utilized git version control and CI/CD best practices to ensure code quality and streamline development workflows.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;