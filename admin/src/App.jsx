import Emails from "./components/Emails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center gap-24">
        <Options />
        {/* <Posts/> */}
        <Emails/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
