// css
import styles from './ProjectCard.module.css'

const ProjectCard = (props) => {
  console.log("Props", props);
  return ( 
    <div className={styles.projectCard}>
      
      <img 
        src={props.project.screenshot} 
        alt={`${props.project.title} Screenshot`} 
        className={styles.cardImage}
      />
      <div className={styles.overlay}>
        <p>{props.project.description}</p>
        <div className={styles.projectLinks}>
          <a className={styles.projectLink} href={props.project.githubURL} target="_blank" rel="noreferrer">GitHub</a>
          <a className={styles.projectLink} href={props.project.liveURL} target="_blank" rel="noreferrer">Live Project</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;