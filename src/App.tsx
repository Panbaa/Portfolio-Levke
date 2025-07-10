import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { HashRouter, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects';
import ProjectDetail from './pages/Projects/[id]';
import About from './pages/About';
import Kontakt from './pages/Kontakt';
import SeiteNichtGefunden from './pages/SeiteNichtGefunden';
import NavbarElements from './components/Navbar/utils/NavbarElements';

function App() {
  return (
    <div className='bg-neutral-50 w-full h-full min-h-screen flex flex-col'>
      <HashRouter>
        <Navbar elements={NavbarElements} />
        <div id="bodyContainer" className='flex-grow bg-neutral-50'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/projekte" element={<Projects />} />
            <Route path="/projekte/:id" element={<ProjectDetail />} />
            <Route path="/ueber-mich" element={<About />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<SeiteNichtGefunden />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
