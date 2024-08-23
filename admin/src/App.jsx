import Emails from "./components/Emails";
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
    </>
  );
}

export default App;
