import React from "react";
import { Link } from 'react-router-dom';
import './resume.css';
import myRes from './resume_screenshot.png';

function Resume() {
    return (
        <div className="resume">
            <div className="resume-cont">
                <h1 className="resume_title">Resume</h1>
                <div className="downloadButton">
                    <Link to="/resumePDF" className="download">Download PDF</Link>
                </div>
            </div>
            <img src={myRes} alt="resSrceenshot" className="myRes"></img>
        </div>
    )
}

export default Resume;