import React from "react";
import { Link } from 'react-router-dom';
import './resume.css';
import myRes from './resume_screenshot.png';

function Resume() {
    return (
        <div className="resume">
            <div className="resume-cont">
                <div className="resume_title">Resume</div>
                <div className="button-cont-resume">
                    <button className="download-pdf-button">
                        <Link to="/resumePDF" className="download">Download PDF</Link>
                    </button>
                </div>
            </div>
            <img src={myRes} alt="resSrceenshot" className="myRes"></img>
        </div>
    )
}

export default Resume;