import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-blue-900 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white flex items-center justify-center"
        >
            <div className="text-center px-6 max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Cześć! 👋</h1>
                <p className="text-xl mb-6 leading-relaxed">
                    Nazywam się <strong>Dmytro Potapchuk</strong> i jestem Fullstack Developerem z Warszawy.
                    Tworzę aplikacje w <span className="text-blue-600 dark:text-blue-400">React</span>, <span className="text-blue-600 dark:text-blue-400">TypeScript</span>, <span className="text-blue-600 dark:text-blue-400">NestJS</span>, <span className="text-blue-600 dark:text-blue-400">.NET</span> i <span className="text-blue-600 dark:text-blue-400">MySQL</span>.
                </p>
                <Link
                    to="/kontakt"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                    Skontaktuj się ze mną
                </Link>
            </div>
        </motion.div>
    );
};

export default Home;
