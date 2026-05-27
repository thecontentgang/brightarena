import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>

      {/* AUTO SCROLL TOP */}
      <ScrollToTop />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="min-h-screen bg-background text-primary selection:bg-primary selection:text-background">

        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetailsPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

        </Routes>

      </main>

      {/* FOOTER */}
      <Footer />

    </>
  );
}