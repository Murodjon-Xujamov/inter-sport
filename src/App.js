import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './layout/footer/Footer';
import Navbar from './layout/navbar/Navbar';
import NotFound from './layout/notFound/NotFound';
import ScrollToTop from './layout/navbar/ScrollTop';
import Banner from './layout/banner/Banner';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Goal from './pages/Goal';
import Media from './pages/Media';
import News from './pages/News';
import Team from './pages/Team';
import back2 from "./assets/images/Frame 9824 (2).svg";
import back1 from "./assets/images/Frame 9825 (2).svg";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Banner />
        <img
          style={{ position: "fixed", opacity: "0.4", left: "0", top: "0" }}
          src={back1}
          alt=""
        />
        <img
          style={{
            position: "fixed",
            opacity: "0.4",
            right: "0",
            bottom: "0",
          }}
          src={back2}
          alt=""
        />
        <Routes path="/">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/media" element={<Media />} />
          <Route path="/news" element={<News />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
