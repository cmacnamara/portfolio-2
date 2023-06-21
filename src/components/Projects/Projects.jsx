// assets
import bugReflectorSS from '../../assets/bugReflector-screenshot2.png'
import nordleSS from '../../assets/nordle-screenshot2.png'
import newsLingoSS from '../../assets/newsLingo-screenshot.png'
import surveyBrainSS from '../../assets/surveyBrain-screenshot.png'

// css
import styles from './Projects.module.css'

// components
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'SurveyBrain',
      description: 'A survey creation app that offers results analysis powered by Natural Language Processing (NLP) tools such as sentiment analysis and topic tagging',
      tech: ['TypeScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT'],
      githubURL: 'https://github.com/cmacnamara/survey-brain-front-end',
      liveURL: 'https://surveybrain.netlify.app/',
      screenshot: `${surveyBrainSS}` 
    },
    {
      title: 'NewsLingo',
      description: 'A language-learning app that provides daily news articles, word-to-word translations, and a personal dictionary',
      tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'CSS', 'JWT'],
      githubURL: 'https://github.com/cmacnamara/newsLingo-front-end',
      liveURL: 'https://news-lingo.netlify.app/',
      screenshot: `${newsLingoSS}` 
    },
    {
      title: 'Bug Reflector',
      description: 'A website for developers to reflect upon and share their skill growth through the lens of bug fixes',
      tech: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'EJS', 'CSS'],
      githubURL: 'https://github.com/cmacnamara/bug-reflector',
      liveURL: 'https://bug-reflector.fly.dev/',
      screenshot: `${bugReflectorSS}` 
    },
    {
      title: 'Nordle',
      description: 'A Norse-themed Wordle-style game that challenges users to guess 10+ consecutive words and stores progress locally',
      tech: ['JavaScript', 'HTML', 'CSS', 'Git'],
      githubURL: 'https://github.com/cmacnamara/wordle-js',
      liveURL: 'https://nordle-game.netlify.app/',
      screenshot: `${nordleSS}` 
    },
  ]
  
  return ( 
    <div className={styles.projectsContainer} id="projects">
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