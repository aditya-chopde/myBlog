import Create from "./components/Create";
import Emails from "./components/Emails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import Posts from "./components/Posts";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center gap-16">
        <Router>
          <Routes>
            <Route path="/" element={
              <>
              <Options />
              <Posts />
              </>
            } />
            <Route path="/email" element={<>
              <Options />
              <Emails />
              </>} />
            <Route path="/create" element={<>
              <Options />
              <Create />
              </>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
      
    </>
  );
}

export default App;
