import logo from './logo.svg';
import productDataBase from "./additional-comps/Products.js"
import './App.css';
import { BrowserRouter as 
        Router, Switch,
        Route,
        Routes
} from "react-router-dom";
import About from './pages/About';
import AllProjects from './pages/AllProjects';
import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './additional-comps/Header';
import Footer from './additional-comps/Footer';
import ProjectIcon from './additional-comps/ProjectIcon';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="routes-container">
        
        <Router>
        <Routes>
          <Route path="about" element={<About />} />
            
          <Route path="/projects" element={<AllProjects/>} />

          <Route path="/:projectName" element={<Project />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/" element={<Home products={productDataBase}/>} />

        </Routes>
      </Router>
      {/* <ProjectIcon /> */}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
