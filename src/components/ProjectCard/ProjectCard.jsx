// css
import styles from './ProjectCard.module.css'

const ProjectCard = (props) => {
  return ( 
    <div className={styles.projectCard}>
      <h2 className={styles.projectTitle}>{props.project.title}</h2>
      <img 
        src={props.project.screenshot} 
        alt={`${props.project.title} Screenshot`} 
        className={styles.cardImage}
      />
      <div className={styles.overlay}>
        <h2 className={styles.projectTitle}>{props.project.title}</h2>
        <p className={styles.description}>{props.project.description}</p>
        <p className={styles.techList}>Technologies: 
          {
            props.project.tech.map((technology,idx) => (
              <span key={idx}> {technology} | </span>
            ))
          }
        </p>
        <div className={styles.projectLinks}>
          <a className={styles.projectLink} href={props.project.githubURL} target="_blank" rel="noreferrer">GitHub</a>
          <a className={styles.projectLink} href={props.project.liveURL} target="_blank" rel="noreferrer">Live Project</a>
          <a className={styles.projectLink} href={props.project.demoURL} target="_blank" rel="noreferrer">Demo Video</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;