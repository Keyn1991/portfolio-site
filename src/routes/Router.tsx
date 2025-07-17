import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Navbar from '..//components/Navbar';
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import Technologies from "../pages/Technologies";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/o-mnie" element={<About />} />
                <Route path="/technologie" element={<Technologies />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/uslugi" element={<Services />} />
                <Route path="/kontakt" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

const AppRouter = () => (
    <Router>
        <Navbar
        />
        <ThemeToggle />
        <div className="pt-20 bg-white dark:bg-gray-900">
            <AnimatedRoutes />
        </div>
        <Footer/>
    </Router>
);

export default AppRouter;
