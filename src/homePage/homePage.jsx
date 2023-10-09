import React from 'react';
import './homePage.css';
import headShot from './content/head-shot.png';
import linkedInIcon from './content/Linkedin-icon.jpg';
import githubIcon from './content/github.jpg';
import mailIcon from './content/mail-icon.jpg';

function homePage() {
  
    return (
      <div className='homePage'>
        <div className='homePageContainer'>
          <div className='title'>Mackenzie Snyder</div>
          <p className='description'>Biomedical Engineering Student with a Passion to Technologically Advance Healthcare</p>
          <div className='link-cont'>
            <div className='item-cont'>
              <img className="icon" src={linkedInIcon} alt="linkedIn Icon"></img>
              <div className="link">
                  <a  href="https://www.linkedin.com/in/mackenzie-snyder-a92178220/" target="_blank" rel="noopener noreferrer">
                      Linkedin
                  </a>
              </div>
            </div>
            <div className="item-cont">
              <img className="icon" src={githubIcon} alt="Github Icon"></img>
              <div className="link">
                  <a  href="https://github.com/mackenziesnyder" target="_blank" rel="noopener noreferrer">
                      GitHub
                  </a>
              </div>
            </div>
            <div className="item-cont">
              <img className="mail-icon" src={mailIcon} alt="Mail Icon"></img>
              <div className="link">
                  <a  href="mailto:mackenziesnyder222@gmail.com" target="_blank" rel="noopener noreferrer">
                      Mail
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className='image-container'>
            <img src={headShot} alt='head-shot' className='head-shot' />
        </div>
      </div>
    );
  }
  
  export default homePage;
  