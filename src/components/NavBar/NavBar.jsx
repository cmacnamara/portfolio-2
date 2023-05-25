import styles from './NavBar.module.css'

const NavBar = () => {
  return ( 
    <nav className={styles.navContainer}>
      <div>Chris MacNamara</div>
      <div className={styles.btnGroup}>
        <button className="uniButton">About Me</button>
        <button className="uniButton">Projects</button>
        <button className="uniButton">Contact</button>
      </div>
    </nav>
  );
}

export default NavBar;