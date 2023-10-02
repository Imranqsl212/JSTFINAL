import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ToTop";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
