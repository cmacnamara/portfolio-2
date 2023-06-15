// assets
import githubLogo from '../../assets/github.png'

// css
import styles from './Contact.module.css'

const Contact = () => {
  return ( 
    <div className={styles.contactContainer}>
      <h1>Contact</h1>
      <h3>Let's get in touch.</h3>
      <div className={styles.contactLinks}>
        <a href="mailto:cpmacnamara@gmail.com">cpmacnamara@gmail.com</a>
        <a href="https://www.linkedin.com/in/christopher-macnamara/">LinkedIn</a>
        <a href="https://github.com/cmacnamara"><img src={githubLogo} alt="Github logo" />GitHub</a>
        <a href="">Portfolio</a>
      </div>
    </div>
  );
}

export default Contact;