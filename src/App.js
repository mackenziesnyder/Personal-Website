import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homePage/homePage';
import Layout from './layout/layout';
import AboutMe from './aboutMe/aboutMe';
import Experience from './experience/experience'; 
import Resume from './Resume/resume';
import ResumePDF from './ResumePDF/resumePDF';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/Personal-Website/" element={<HomePage />}/>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/resumePDF" element={<ResumePDF />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

