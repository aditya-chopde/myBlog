import Navbar from "./components/Navbar";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import BlogPage from "./pages/BlogPage";
import Footer from "./pages/Footer";
import Subscribe from "./pages/Subscribe";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/post/:id" element={<BlogPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
