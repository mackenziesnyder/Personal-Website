import React from 'react';
import './homePage.css';
import headShot from './content/linkedin-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGear, faCodeBranch, faBrain } from '@fortawesome/free-solid-svg-icons';

function homePage() {
  
    return (
      <div className='homePage'>
        <div className='homePageContainer'>
          <div className='title'>Hi I'm <span className='name-highlight'>Mackenzie</span>
              <FontAwesomeIcon icon={faGear} className='symbol-gear'/>
              <FontAwesomeIcon icon={faCodeBranch} className='symbol-code' />
              <FontAwesomeIcon icon={faBrain} className='symbol-brain' />
          </div>
          <div className='sub-title'>I'm a 4th Year Engineering Student</div>
          <div className='description'>I am experienced in software development in industry and research settings, focusing on medical technology applications</div>
          <div className='link-cont'>
            <div className='item-cont'>
              <a href="https://www.linkedin.com/in/mackenzie-snyder-a92178220/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon-style" />
              </a>
            </div>
            <div className="item-cont">
              <a href="https://github.com/mackenziesnyder" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon-style" />
              </a>
            </div>
            <div className="item-cont">
              <a href="mailto:mackenziesnyder222@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="icon-style" />
              </a>
            </div>
          </div>
          <div className='button-cont'>
              <a href="Resume.pdf" download="Resume.pdf">
              <button className='download-cv-button'>
                  Download CV
                </button>
              </a>
            </div>
        </div>
        <div className='image-container'>
            <img src={headShot} alt='head-shot' className='head-shot' />
        </div>
      </div>
    );
  }
  
  export default homePage;
  