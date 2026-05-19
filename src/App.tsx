import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      {/* Navbar sits outside Routes so it persists across all pages */}
      <Navbar />
      
      <main className="min-h-screen bg-background text-primary selection:bg-primary selection:text-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}