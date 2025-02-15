import React from 'react';
import './homePage.css';
import headShot from './content/linkedin-pic.png';
import linkedInIcon from './content/Linkedin-icon.jpg';
import githubIcon from './content/github.jpg';
import mailIcon from './content/mail-icon.jpg';

function homePage() {
  
    return (
      <div className='homePage'>
        <div className='homePageContainer'>
          <div className='title'>Hi I'm Mackenzie</div>
          <div className='sub-title'>I'm a 4th Year Engineering Student</div>
          <div className='description'>I am experienced in software development in industry and research settings, focusing on medical technology applications</div>
          <div className='link-cont'>
            <div className='item-cont'>
            <a href="https://www.linkedin.com/in/mackenzie-snyder-a92178220/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={linkedInIcon} alt="linkedIn Icon" href="https://www.linkedin.com/in/mackenzie-snyder-a92178220/">
              </img>
            </a>
            </div>
            <div className="item-cont">
              <a href="https://github.com/mackenziesnyder" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={githubIcon} alt="Github Icon"></img>
              </a>
            </div>
            <div className="item-cont">
              <a href="mailto:mackenziesnyder222@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="mail-icon" src={mailIcon} alt="Mail Icon"></img>
              </a>
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
  