import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center px-4 py-12"
    >
        <div className="w-full max-w-xl bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Kontakt</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                Masz pytania lub chcesz zamówić projekt? Wypełnij formularz, a odezwę się jak najszybciej.
            </p>
            <ContactForm />
        </div>
    </motion.div>
);

export default Contact;
