// assets
import headshot from '../../assets/headshot.jpeg'

// css
import styles from './Hero.module.css'

const Hero = () => {
  return ( 
    <section className={styles.heroContainer}>
      <div className={styles.heroInternalContainer}>
        <img 
          src={headshot} 
          alt="A picture of Chris MacNamara"
          className={styles.headshot} 
        />
        <div className={styles.heroDescription}>
          <h1>Chris MacNamara</h1>
          <h2>Full Stack Software Engineer</h2>
          <p>Hi there! My name is Chris. Thanks for checking out my portfolio. Keep scrolling to see some of my recent projects and to learn about me.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;