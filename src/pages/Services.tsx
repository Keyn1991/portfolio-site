import { motion } from 'framer-motion';

const services = [
    {
        title: 'Tworzenie stron internetowych',
        description:
            'Projektuję nowoczesne, responsywne strony internetowe dopasowane do potrzeb klienta — od prostych landing page po rozbudowane serwisy firmowe. Używam React, Next.js i Tailwind CSS.',
        icon: '🌐',
    },
    {
        title: 'Rozwój aplikacji webowych',
        description:
            'Tworzę aplikacje webowe typu SPA i PWA z wykorzystaniem React, TypeScript, NestJS i .NET. Integruję backend z frontendem, zapewniam bezpieczeństwo i skalowalność.',
        icon: '⚙️',
    },
    {
        title: 'Aplikacje desktopowe',
        description:
            'Buduję aplikacje desktopowe w Electron oraz .NET WPF — idealne do fakturowania, zarządzania danymi czy pracy offline. Obsługuję eksport PDF, lokalne bazy danych i integracje z API.',
        icon: '🖥️',
    },
    {
        title: 'Integracje z API i systemami zewnętrznymi',
        description:
            'Łączę aplikacje z zewnętrznymi usługami: płatnościami, systemami CRM, bazami danych, Telegram Bot API, NBP API i innymi. Tworzę bezpieczne i wydajne REST API.',
        icon: '🔗',
    },
    {
        title: 'Optymalizacja i modernizacja projektów',
        description:
            'Refaktoryzuję istniejący kod, poprawiam wydajność, wdrażam nowoczesne technologie i aktualizuję interfejsy. Pomagam w migracji do TypeScript, React 18+ czy NestJS.',
        icon: '🚀',
    },
    {
        title: 'Bazy danych i wdrażanie aplikacji',
        description:
            'Projektuję struktury baz danych i integruję je z backendem. Pracuję z MySQL, PostgreSQL, MongoDB i SQLite. Wdrażam aplikacje na serwery VPS, platformy chmurowe (np. AWS, Railway, Vercel) oraz konfiguruję Docker i CI/CD.',
        icon: '🗄️',
    },
];

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-8 flex flex-col items-center"
        >
            <h1 className="text-4xl font-bold mb-10 text-blue-700 dark:text-blue-400">Usługi</h1>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                            <span>{service.icon}</span> {service.title}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Services;
