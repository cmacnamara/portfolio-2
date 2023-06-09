// css
import styles from './About.module.css'

// npm packages
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return ( 
    <div className={styles.aboutContainer} id="about-me">
      <Fade><h1>About Me</h1></Fade>
      <Fade><p className={styles.aboutMeDescription}>I am a Fullstack Software Engineer living the in Boston area who loves working on creative and technically challenging projects. My passions for self-expression, empathetic understanding, and continual growth and learning have led me to wear many hats over the years, from Computer Science student to musician/audio engineer to high school Spanish and Computer Science Teacher, and many more! Take a look at the timeline below to get a better sense of my journey so far!</p></Fade>

      <Fade>
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="rgba(255, 255, 255, 0.87)"
        >
          May 2013
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Graduated
          </Typography>
          <Typography>Ithaca College, B.A. Computer Science</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="rgba(255, 255, 255, 0.87)"
        >
          April 2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Graduated
          </Typography>
          <Typography>Ithaca College, M.A.T. Secondary Education</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="rgba(255, 255, 255, 0.87)"
        >
          July 2015 - July 2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <PublicIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Teacher
          </Typography>
          <Typography>Promise Academy II, Harlem NYC</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="rgba(255, 255, 255, 0.87)"
        >
          August 2017 - June 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <PublicIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Teacher
          </Typography>
          <Typography>Boston Collegiate Charter School, Dorchester, MA</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="rgba(255, 255, 255, 0.87)"
        >
          June 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Graduated
          </Typography>
          <Typography>General Assembly Software Engineering Immersive</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Fade>
    </div>
  );
}

export default About;