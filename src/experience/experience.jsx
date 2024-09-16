import React from "react";
import './experience.css';
import xklogo from './content/xklogo.jpg';
import unityHealthLogo from './content/unityHealthLogo.jpg';
import i4iLogo from './content/i4iLogo.png';
import watolinkPic from './content/watolink.png';
import waterloopPic from './content/waterloop.png';
import medTechPic from './content/medtech.png';
import rateITPic from './content/rateIT.png';
import pArmPic from './content/pArm.png';
import karmm from './content/karmm.png';
import hotDog from './content/hotdog.png';
import sySTEM from './content/sySTEM.png';
import blank from './content/blank.png';
import sirrl from './content/sirrl.png';
import food4kids from './content/food4kids.png';
import snnPic from './content/snnPic.png';

function Experience() {
    return (
        <div className="ex">
            <div className="ex-cont">
                <h1 className="ex_title">Experience</h1>
                <div className="ex_navbar">
                    <li className="exli">
                       <button className="but">
                        <a className="resButton" href="#internship">Internships</a>
                       </button>
                       <button className="but">
                        <a className="resButton" href="#sdt">Research and Student Design Teams</a>
                       </button> 
                       <button className="but">
                        <a className="resButton" href="#projects">Projects</a>
                       </button>  
                    </li>
                </div>

                <div className="ex_body">
                    <h2 className="header" id="internship">Internships</h2>
                    <div className="body_section">
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">IoT Implementation Intern</div>
                                <p className="item_company">Xandar Kardian Inc. | May 2024 - August 2024</p>
                                <p className="skills">Skills and Tools: Python, RestAPI, Selenium, Figma, Git</p> 
                                <p className="describe">
                                    Engineered an operation tool utilizing Python and Selenium for the automation of FDA compatible installation tracking for vital sensor devices. 
                                    Reduced task duration from 3 hours to 2 minutes, achieving a 98.89% efficiency improvement and significantly enhancing resource allocation and error detection.
                                    Created a Python-based GUI automation system to streamline documentation processes and email dispatch for new client product deployments. 
                                    The solution included intuitive control interfaces, reducing a 2 hour data implementation task to under a minute. 
                                </p>
                            </div>
                             <img className="picture" src={xklogo} alt="Xandar Kardian Inc."></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Software Engineering Intern</div>
                                <p className="item_company">Unity Health Toronto | January 2023 - April 2023 and September 2023 - December 2023</p>
                                <p className="skills">Skills and Tools: Typescript, React.js, Java, Python, MS SQL, PostrgeSQL, AWS, Android Studio, Figma, Git</p> 
                                <p className="describe">
                                    Updated and refactored code in Typescript and Javascript codebase to meet new industry standards 
                                    for an Electronic Asthma Management System. Conducted comprehensive testing, including edge cases, to validate the 
                                    functionality of the updated product. Troubleshooted and debugged code written in Python in a timely manner to meet 
                                    production deadlines for a Smoking Cessation Infographic project, which personalizes a visual representation of a 
                                    patient's quality of life due to smoking. Created interactive wireframes in Figma for a healthcare provider portal 
                                    to link patient responses from an asthmatic symptoms questionnaire to a proper asthma treatment plan, to increase 
                                    accuracy in correct asthma medication prescriptions. 
                                </p>
                            </div>
                             <img className="picture" src={unityHealthLogo} alt="Unity Health Logo"></img>
                        </div>
                        <div className="item">
                        <div className="item_text">
                            <div className="item_header">Software Quality Analysis Intern</div>
                                <p className="item_company">Infrastructures for Information (i4i) | May 2022 - September 2022</p>
                                <p className="skills">Skills and Tools: Quality Assurance, Test Documentation, Python, XML/XMLT</p>
                                <p className="describe">
                                    Tested i4i FDA approved pharmaceutical labeling templates, completed assigned test cases 
                                    and professionally documented errors/faults in the software. Worked in collaboration with a team to develop a conversion 
                                    tool that extracts data from an Excel spreadsheet and translates it to an i4i FDA approved labeling template. Processed and debugged 
                                    code written in Python, XML, and XSLT, implementing changes to the GUI using Figma to draft the design, and developed the display
                                    using tkinter library.
                                </p>
                            </div>
                            <img className="picture" src={i4iLogo} alt="i4i Logo"></img>
                        </div>
                    </div>

                    <h2 className="header" id="sdt">Research and Student Design Teams</h2>
                    <div className="body_section">
                    <div className="item">
                            <div className="item_text">
                                <div className="item_header">Undergraduate Research Assistant</div>
                                <p className="item_company">Social and Intelligent Robotics Research Labratory | January 2023 - Present</p>
                                <p className="skills">Skills and Tools: Python, React.js, Kotlin, Furhat Social Robot SDK</p> 
                                <p className="describe">
                                    Developed a real-time computer-vision based object detection algorithm for autonomous pick-and-place robotic applications utilizing Python and OpenCV. Enabled precise identification and localization of common grocery store objects within a dynamic environment.                              
                                    <br></br>
                                    <br></br>
                                    Utilized Kotlin Skill API and Furhat SDK to develop an interactive robotic game aimed at educating children about bullying and fostering a positive learning environment with the Furhat social robot. 
                                    Developed a web application using React.js and Kotlin, integrating functionalities for sensory applications and user-interactions while leveraging Google Cloud API.
                                </p>
                            </div>
                             <img className="picture" src={sirrl} alt="SIRRL Logo"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">BCI Wheelchair Lead</div>
                                <p className="item_company">Watolink | January 2023 - Present</p>
                                <p className="skills">Skills and Tools: Python, ML, SolidWorks, CAD, Market Research, User Research</p>
                                <p className="describe">
                                    Engineered an advanced system using Python to orchestrate the seamless integration of neural data collection 
                                    with an LED control script, employing socket communication. Established a connection between data acquisition and a ML model, 
                                    harnessing SSVEP and motor imagery techniques to decode personalized brain signals. 
                                    This solution translated these signals into precise wheelchair movements, ensuring both efficiency and reliability in the transfer of crucial information.
                                    <br></br>
                                    <br />
                                    Participated in collaborative research and design initiatives within a multidisciplinary team,
                                    harnessing Solidworks expertise to meticulously craft 3D models of wheelchair components, facilitating
                                    the transformation of conventional wheelchairs into BCI-controlled mechanical systems. Conducted extensive 
                                    research into batteries, motors, and integrated systems to seamlessly merge Brain-Computer Interface (BCI) 
                                    technology with wheelchair infrastructure. Evaluated various power sources, motor types, and control systems 
                                    to optimize the interface, ensuring a robust and efficient integration that enhances mobility and accessibility 
                                    for users.
                                </p>
                            </div>
                            <img className="picture" src={watolinkPic} alt="Watolink SolidWorks"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Infrastructure Team Lead</div>
                                <p className="item_company">Waterloop | January 2022 - August 2023</p>
                                <p className="skills">Skills and Tools: Project Management, Leadership, SolidWorks, CAD, FEA, Field Construction</p>
                                <p className="describe">
                                    Assisted with on-site physical construction of the Hyperloop test track, performing  quality checks on track materials,
                                    delivering the materials to the track site, and communicating with those who manage the site where the test track is built.
                                    Utilized SolidWorks CAD software to meticulously conceptualize and model design ideas for an airlock system. Developed 
                                    individual components with precision, employing advanced SolidWorks mates to seamlessly assemble them. Designed and executed 
                                    the modeling of a first-iteration physical tube track for a Hyperloop system, incorporating complex geometries and specifications.
                                    Conducted comprehensive Finite Element Analysis (FEA) to evaluate structural integrity, resulting in valuable insights that informed
                                    subsequent design refinements and enhanced system efficiency.
                                </p>
                            </div>
                            <img className="picture" src={waterloopPic} alt="Waterloop Solidworks"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Frontend Software Team Member</div>
                                <p className="item_company">UW Med Tech Resolve | August 2022 - January 2023</p>
                                <p className="skills">Skills and Tools: React.js, Bootstrap, Redux, Git</p>
                                <p className="describe">
                                    Worked on front-end development features of the UW Med Tech Resolve public website using React and Bootstrap to improve 
                                    the existing UI, and using Redux as a state management tool. Collaborated with team members to conceptually design an 
                                    internal public relations and human resource management website to improve organization and communication between sub-teams.
                                </p>
                            </div>
                            <img className="picture" src={medTechPic} alt="Med Tech Logo"></img>
                        </div>
                    </div>
                    <h2 className="header" id="projects">Projects</h2>
                    <div className="body_section">
                    <div className="item">
                            <div className="item_text">
                                <div className="item_header">Spiking Neural Network (SNN) Model for Sign-Language Recognition</div>
                                <p className="item_company">Software Project</p>
                                <p className="skills">Skills and Tools: Python, PyTorch, SNNTorch</p>
                                <p className="describe">
                                Engineered and deployed a cutting-edge SNN using the PyTorch and SNNTorch libraries to accurately recognize American Sign Language (ASL) gestures. Leveraged the ChicagoFSWild ASL video dataset, performing intricate frame extraction, data preprocessing, and tensor transformation to optimize training and testing pipelines. 
                                Conducted rigorous model evaluation, analyzing loss metrics and accuracy to refine performance and enhance recognition capabilities.
                                </p>
                            </div>
                            <img className="picture" src={snnPic} alt="SNN diagram pic"></img>
                        </div>
                        
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Rate-IT</div>
                                <p className="item_company">Software Project</p>
                                <p className="skills">Skills and Tools: React.js, Next.js, MySQL, Figma, Git</p>
                                <p className="describe">
                                    Designed and developed 'Rate-it,' an innovative application enabling users to organize personalized items within customizable 
                                    folders for easy rating. Leveraged React JS, Node JS, and MySQL to bring this project to life.
                                </p>
                            </div>
                            <img className="picture" src={rateITPic} alt="RateIT home page"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header"> Prosthetic Hand Phone Grip</div>
                                <p className="item_company">Interdisciplinary Project</p>
                                <p className="skills">Skills and Tools: SolidWorks, CAD, 3D Printing, Rapid Prototyping, EMG Signal Processing, Arduino IDE, Circuit Design</p>
                                <p className="describe">
                                    Designed and engineered an interdisciplinary mechanical and electrical prosthetic hand phone grip system, integrating EMG (Electromyography) 
                                    signal control technology to provide seamless and intuitive functionality, enhancing the user's quality of life and independence. Used 
                                    technologies such are Arduino IDE, Solidworks design and FEA, and servo motors.
                                </p>
                            </div>
                            <img className="picture" src={pArmPic} alt="Project Display"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">KARMM's Wheelchair Arm</div>
                                <p className="item_company">Product Design Project</p>
                                <p className="skills">Skills and Tools: Engineering Drawings, Product Design, Iterative Design, User Rersearch</p>
                                <p className="describe">
                                    Collaborated within a cross-functional team to engineer a specialized vacuum attachment for a wheelchair, 
                                    meticulously adhering to stringent design constraints. Led the development process, creating user personas, 
                                    generating innovative conceptual designs, and producing high-quality sketches. Presented the final concept 
                                    to a professional audience, effectively showcasing our solution's ingenuity and functionality.
                                </p>
                            </div>
                            <img className="picture" src={karmm} alt="Karmm Wheelchair Arm"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Meal Matchmakers</div>
                                <p className="item_company">Fall 2023 WiE Hackathon Submission - Partnered with Food4Kids Waterloo</p>
                                <p className="skills">Skills and Tools: Python, Figma, Product Design, Responsive Design, User Flows and Wireframing</p>
                                <p className="describe">
                                    Developed a strategic initiative to enhance community engagement and donor participation in the Food4Kids program. 
                                    Devised and implemented a Python-based algorithm that optimizes the matching process between children with dietary 
                                    restrictions and local donors, significantly reducing the travel requirements for Food4Kids delivery personnel. 
                                    Additionally, crafted a user-friendly teacher portal prototype using Figma, empowering educators to register 
                                    students for the program while providing valuable resources on recognizing signs of child hunger.
                                </p>
                            </div>
                            <img className="picture" src={food4kids} alt="Food4Kids Teacher Portal Student Registration"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">SySTEM</div>
                                <p className="item_company">Fall 2022 WiE Hackathon Submission</p>
                                <p className="skills">Skills and Tools: Product Design, Responsive Design, User Flows and Wireframing</p>
                                <p className="describe">
                                    Designed and prototyped an intuitive mobile app interface in Figma that incorporates a daily question generator to engage and guide high school students towards 
                                    potential STEM career paths. The interactive design encourages exploration and self-assessment, fostering a greater understanding of diverse STEM fields and inspiring 
                                    informed career choices.
                                </p>
                            </div>
                            <img className="picture" src={sySTEM} alt="sySTEM Wireframes"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Hot Dog Cart</div>
                                <p className="item_company">Computer Aided Design Project</p>
                                <p className="skills">Skills and Tools: Onshape, CAD, 3D Modelling, Creative Thinking</p>
                                <p className="describe">Designed a hot dog cart using Onshape, encompassing 3D modeling, assembly, and detailed technical 
                                drawings to ensure precision and visual detail.</p>
                            </div>
                            <img className="picture" src={hotDog} alt="Hot Dog Cart Drawing"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Robot Voice Generator</div>
                                <p className="item_company">Software Project</p>
                                <p className="skills">Skills and Tools: Python, Discrete Signal Processing, Audio Signal Analysis</p>
                                <p className="describe">
                                    Developed a voice signal processing algorithm in Python to transform standard audio recordings into a distinctive robotic voice with precision and clarity. 
                                    This project involved extensive signal analysis, discrete signal processing using filters, and waveform manipulation, resulting in an engaging and unique auditory 
                                    experience for various applications, including voiceovers and entertainment.
                                </p>
                            </div>
                            <img className="pictureBlank" src={blank} alt="blank"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Instagram Follower Project</div>
                                <p className="item_company">Software Project</p>
                                <p className="skills">Skills and Tools: Typescript, Git</p>
                                <p className="describe">
                                    Developed a Typescript script to analyze Instagram follower data stored in JSON files, automating the extraction of information such as 
                                    follower usernames and following usernames.This project facilitated the efficient comparison of followers vs following and displays 
                                    the differences between the extracted information
                                </p>
                            </div>
                            <img className="pictureBlank" src={blank} alt="blank"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Othello</div>
                                <p className="item_company">Software Project</p>
                                <p className="skills">Skills and Tools: C#, Object-Oriented Programming</p>
                                <p className="describe">
                                    Designed and implemented a fully functional two-player Othello game using C#, demonstrating strong algorithm proficiency by 
                                    creating method functions and incorporating key game features.
                                </p>
                            </div>
                            <img className="pictureBlank" src={blank} alt="blank"></img>
                        </div>
                        <div className="item">
                            <div className="item_text">
                                <div className="item_header">Preventative Measures Proposal</div>
                                <p className="item_company">Spring 2023 Univerity of Waterloo Engineering Competition Submission - Awarded 2nd Place in the Bioengineering Category</p>
                                <p className="skills">Skills and Tools: Problem Solving, Critical Thinking</p>
                                <p className="describe">
                                    Competed in the Spring 2022 Waterloo Engineering Competition in the Bioengineering category placing 2nd overall. Worked with a partner to produce a 7-page report and 
                                    presentation on a solution to promote the research and funding of artificial blood substitutes while under a time limit. 
                                </p>
                            </div>
                            <img className="pictureBlank" src={blank} alt="blank"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;