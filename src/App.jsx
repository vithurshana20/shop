
import Navbar from './component/Navbar.jsx';
import Home from './page/Home.jsx';
import Contact from './page/Contact.jsx';
import Footer from './component/Footer.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
   </>
  );
}

export default App;