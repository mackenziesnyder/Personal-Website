import React from "react";
import './resume.css';
import myRes from './newest_resume.png';

function Resume() {
    return (
        <div className="resume">
            <div className="resume-cont">
                <div className="resume_title">Resume</div>
                <div className="button-cont-resume">
                <a href="Resume.pdf" download="Resume.pdf">
                    <button className="download-pdf-button">
                        Download PDF
                    </button>
                </a>
                </div>
            </div>
            <img src={myRes} alt="resSrceenshot" className="myRes"></img>
        </div>
    )
}

export default Resume;