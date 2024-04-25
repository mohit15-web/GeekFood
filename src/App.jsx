import Content from "./components/Content";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{overflow:"hidden"}}>
    <Navbar/>
    <Home/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;
