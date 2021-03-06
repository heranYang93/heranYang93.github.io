import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { NavbarBurgerProvider } from "./providers/NavbarBurger";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// import Modal from "./pages/Modal";
import Resume from "./pages/Resume";

// import { useGlobalContext } from "./providers/GlobalStateProvider";

function App() {
  // const [page, setPage] = useState('home');
  // const { isModalOpen } = useGlobalContext();
  return (
    <NavbarBurgerProvider>
      <Router>
        <ErrorBoundary>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </NavbarBurgerProvider>
  );
}

export default App;
