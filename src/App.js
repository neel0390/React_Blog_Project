import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import "./App.css";
import RouterFile from "./Components/RouterFile";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home/> */}
      <RouterFile />
      <Footer />
    </div>
  );
}

export default App;
