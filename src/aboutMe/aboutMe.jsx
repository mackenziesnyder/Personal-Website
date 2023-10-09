import React from "react";
import './aboutMe.css';
import linkedInPic from './linkedIn_pic.png';

function AboutMe () {
    return (
        <div className="aboutMe">
            <h1 className="about_title">About Me!</h1>
            <div className="image-cont">
                <img src={linkedInPic} alt='linkedIn_Picture' className='linkedIn_Picture' />
            </div>
            <p className="text">
                Hi I’m Mackenzie! I am a dedicated biomedical engineering student currently 
                pursuing my education at the esteemed University of Waterloo in Waterloo, Ontario. 
                I am originally from the picturesque small town of Simcoe in southern Ontario, 
                and was raised in a dynamic and sports-centered household where I enthusiastically 
                embraced a wide range of athletic pursuits, including hockey, soccer, and volleyball.
            </p>
            <p className="text">
                As I stand on the threshold of my third year of studies, I'm excited to further specialize 
                my learning and focus on my interests across future classes and projects. My academic 
                journey has led me to declare a specialization in Sports Engineering, while concurrently 
                pursuing a minor in computing. My true passion lies in the transformative potential of 
                technology within the medical industry, and I am deeply committed to using my skills to
                elevate the standard of care.
            </p>
            <p className="text">
                One of my greatest joys is collaborating on interdisciplinary projects, where the fusion 
                of diverse perspectives fuels innovation and drives positive change.
            </p>
        </div>
    );
}

export default AboutMe;