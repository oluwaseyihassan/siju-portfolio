import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Portfolio category pages
import SiteProjects from "./pages/Site";
import CadProjects from "./pages/Cad";
import ArchitecturalDrawings from "./pages/Drawings";

// Individual project pages
import ProjectDetail from "./pages/ProjectDetail";

// 404 Page
import NotFound from "./pages/NotFound";

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Portfolio />
    <Services />
    <Experience />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/site" element={<SiteProjects />} />
          <Route path="/portfolio/cad" element={<CadProjects />} />
          <Route
            path="/portfolio/drawings"
            element={<ArchitecturalDrawings />}
          />
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
