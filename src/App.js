import logo from './logo.svg';
import projectsDataBase from "./additional-comps/ProjectsDB.js"
import './App.css';
import { BrowserRouter as 
        Router, Switch,
        Route,
        Routes
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Header from './additional-comps/Header';
import Footer from './additional-comps/Footer';
import NavModal from './additional-comps/NavModal';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="routes-container">
        
        <Router>
        <Routes>
          <Route path="about" element={<About />} />
            
          <Route path="/:projectName" element={<Project />} />
          <Route path="/NavModal" element={<NavModal/>} />

          <Route path="/" element={<Home projects={projectsDataBase}/>} />

        </Routes>
      </Router>
      {/* <ProjectIcon /> */}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
