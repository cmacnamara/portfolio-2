// css
import styles from './Projects.module.css'

// components
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'SurveyBrain',
      description: '',
      tech: [],
      githubURL: '',
      liveURL: '',
      screenshot: {} 
    },
    {
      title: 'NewsLingo',
      description: '',
      tech: [],
      githubURL: '',
      liveURL: '',
      screenshot: {} 
    },
    {
      title: 'Bug Reflector',
      description: '',
      tech: [],
      githubURL: '',
      liveURL: '',
      screenshot: {} 
    },
    {
      title: 'Nordle',
      description: '',
      tech: [],
      githubURL: '',
      liveURL: '',
      screenshot: {} 
    },
  ]
  
  return ( 
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <div className={styles.projectList}>
        {projects.map((project,idx) => (
          <ProjectCard 
            key={idx}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;