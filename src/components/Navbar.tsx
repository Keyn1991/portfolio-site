import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newTheme);
        setIsDark(!isDark);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    ByteCraft.dev
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                    <Link to="/o-mnie" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">O mnie</Link>
                    <Link to="/technologie" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Technologie</Link>
                    <Link to="/portfolio" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Portfolio</Link>
                    <Link to="/uslugi" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Usługi</Link>
                    <Link to="/kontakt" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Kontakt</Link>
                    <button
                        onClick={toggleTheme}
                        className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        {isDark ? '☀️ Jasny' : '🌙 Ciemny'}
                    </button>
                </div>

                {/* Mobile burger */}
                <div className="md:hidden flex items-center space-x-2">
                    <button
                        onClick={toggleTheme}
                        className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        {isDark ? '☀️' : '🌙'}
                    </button>
                    <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 focus:outline-none">
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
                    <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                    <Link to="/o-mnie" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">O mnie</Link>
                    <Link to="/technologie" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Technologie</Link>
                    <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Portfolio</Link>
                    <Link to="/uslugi" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Usługi</Link>
                    <Link to="/kontakt" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Kontakt</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
