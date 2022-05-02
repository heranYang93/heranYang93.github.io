import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Portfolio from "./pages/Projects";
// import Modal from "./pages/Modal";
// import Resume from "./pages/Resume";
// import Footer from "./components/Footer";

// import { useGlobalContext } from "./providers/GlobalStateProvider";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const [page, setPage] = useState('home');
  // const { isModalOpen } = useGlobalContext();
  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/projects" element={<Portfolio />} /> */}
          {/* <Route path="/resume" element={<Resume />} /> */}
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
