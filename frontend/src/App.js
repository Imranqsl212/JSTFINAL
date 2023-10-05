import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ToTop";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Leave from "./Pages/LeaveMessage/Leave";
import Hotels from './Pages/Hotels/Hotels.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'





function App() {
  useEffect(() => {
    console.log(1);
    AOS.init({duration:1000});
  }, []);
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feedback" element={<Leave />} />
            <Route path="/feedback" element={<Hotels />} />
            <Route path="*" element={<NotFound />} />

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
