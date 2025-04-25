// import "./App.css";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./compenents/NavBar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Footer from "./compenents/Footer";

// function App() {
//   return (
//     <HashRouter>
//       <div className="App">
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </HashRouter>
//   );
// }

// export default App;

import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Services from "./pages/Services";
import About from "./pages/About";
import BusinessCard from "./pages/BusinessCard";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/businessCard" element={<BusinessCard />} />
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="/services"
            element={
              <MainLayout>
                <Services />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

// Main layout including NavBar, Home page, and Footer
function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <FloatingLogo />
    </>
  );
}

// Floating WhatsApp logo
function FloatingLogo() {
  const whatsappURL =
    "https://wa.me/573113118867?text=Hola%20Biupoll,%20me%20gustaría%20agendar%20una%20cita";
  return (
    <div
      className="floating-logo"
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: "9999",
      }}
    >
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <i className="bx bxl-whatsapp-square"></i>
      </a>
    </div>
  );
}

export default App;
