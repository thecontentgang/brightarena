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
import ProjectDetailsPage from "./pages/ProjectsPage/ProjectDetailsPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ServiceDetailsPage from "./pages/ServicesPage/ServiceDetailsPage";
import DesignPage from "./pages/DesignPage/DesignPage";
import DesignDetailsPage from "./pages/DesignPage/DesignDetailsPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import BlogDetailsPage from "./pages/BlogPage/BlogDetailPage";

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

          <Route path="/services"
            element={<ServicesPage />}
          />

          <Route
            path="/services/:slug"
            element={<ServiceDetailsPage />}
          />
          <Route
            path="/blogs"
            element={<BlogPage />}
          />
          <Route
            path="/blogs/:slug"
            element={<BlogDetailsPage />}
          />

          <Route path="/designs" element={<DesignPage />} />
          <Route path="/designs/:slug" element={<DesignDetailsPage />} />
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