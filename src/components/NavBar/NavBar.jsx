// css
import styles from './NavBar.module.css'

// npm packages
import { Link } from "react-scroll";

const NavBar = () => {
  return ( 
    <nav className={styles.navContainer}>
      <div className={styles.name}>Chris <span>MacNamara</span></div>
      <div className={styles.btnGroup}>
        <Link 
          activeClass='active'
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.navLink}
        >
          Projects
        </Link>
        <Link 
          activeClass='active'
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.navLink}
        >
          Skills
        </Link>
        <Link 
          activeClass='active'
          to="about-me"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.navLink}
        >
          About Me
        </Link>
        <Link 
          activeClass='active'
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.navLink}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;