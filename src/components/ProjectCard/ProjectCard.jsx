// css
import styles from './ProjectCard.module.css'

const ProjectCard = (props) => {
  return ( 
    <div className={styles.projectCard}>
      <h2>{props.project.title}</h2>
    </div>
  );
}

export default ProjectCard;