import React from "react";
import myResume from './Resume.pdf';

function ResumePDF() {
    return (
        <div className="resume">
            <iframe
                src={myResume}
                width="100%"
                height="900px" 
                title="Resume"
            ></iframe>
        </div>
    )
}

export default ResumePDF;