import { useEffect } from 'react';

const ThemeToggle = () => {
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || !savedTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 z-50"
        >
            🌗 Zmień motyw
        </button>
    );
};

export default ThemeToggle;
