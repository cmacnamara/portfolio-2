// assets
import githubLogo from '../../assets/github.png'
import linkedinLogo from '../../assets/linkedin.png'
import resumeLogo from '../../assets/resume.png'
import emailLogo from '../../assets/email.png'

// css
import styles from './Contact.module.css'

const Contact = () => {
  return ( 
    <div className={styles.contactContainer} id="contact">
      <h1>Contact</h1>
      <h3>Let's get in touch.</h3>
      <div className={styles.contactLinks}>
        <a className={styles.linkAndImage} href="mailto:cpmacnamara@gmail.com"><img src={emailLogo} alt="Email Logo" />cpmacnamara@gmail.com</a>
        <a className={styles.linkAndImage} href="https://www.linkedin.com/in/christopher-macnamara/"><img src={linkedinLogo} alt="Linkedin Logo" />christopher-macnamara</a>
        <a className={styles.linkAndImage} href="https://github.com/cmacnamara"><img src={githubLogo} alt="Github logo" />cmacnamara</a>
        <a className={styles.linkAndImage} href=""><img src={resumeLogo} alt="Resume Logo" />Download Resume</a>
      </div>
    </div>
  );
}

export default Contact;