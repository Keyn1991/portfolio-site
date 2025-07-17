const projects = [
    {
        title: 'Sklep z częściami samochodowymi',
        description: 'NestJS + React + TypeScript + MySQL. E-commerce z filtrowaniem, panelem admina i płatnościami.',
        link: 'https://github.com/Keyn1991/shop-parts',
    },
    {
        title: 'Aplikacja bankowa',
        description: '.NET Core + React + TypeScript + MySQL. System transakcji, logowania i wykresów finansowych.',
        link: 'https://github.com/Keyn1991/CurrencyTransferAPI',
    },
    {
        title: 'Desktopowa aplikacja do faktur',
        description: '.NET WPF. Generowanie faktur PDF, zarządzanie klientami i archiwum dokumentów.',
        link: 'https://github.com/Keyn1991/invoice-desktop',
    },
    {
        title: 'Movie App 2023',
        description: 'Nowoczesna aplikacja filmowa w React 2023 z filtrowaniem i API.',
        link: 'https://github.com/Keyn1991/app-movie-react-2023',
    },
    {
        title: 'Cine Synth',
        description: 'Aplikacja filmowa z interfejsem w React + TypeScript. Obsługa listy filmów i stylizacja.',
        link: 'https://github.com/Keyn1991/cine-synth',
    },
    {
        title: 'Cine Synth for Redux',
        description: 'Wersja Cine Synth z integracją Redux Toolkit. Zarządzanie stanem aplikacji.',
        link: 'https://github.com/Keyn1991/cine-synth-for-redux',
    },
    {
        title: 'Telegram Bot Interface',
        description: 'React + TypeScript. Panel zarządzania użytkownikami Telegrama.',
        link: 'https://github.com/Keyn1991/telegram-bot-ui',
    },
    {
        title: 'Solargen.pl',
        description: 'Interaktywna ankieta dla klienta. React + NestJS + Bootstrap.',
        link: 'https://github.com/Keyn1991/solar-gen-backend',
    },
    {
        title: 'Final Project Interface',
        description: 'Frontend platformy edukacyjnej. React + TypeScript + Bootstrap.',
        link: 'https://github.com/Keyn1991/okten-final-project-interface',
    },
    {
        title: 'Final Project Backend',
        description: 'Backend platformy edukacyjnej. NestJS + MongoDB + Role + Walidacja.',
        link: 'https://github.com/Keyn1991/okten-final-project-backend-nestjs',
    },
    {
        title: 'AEH Proekt',
        description: 'Projekt akademicki w Javie. Struktura modułu i baza danych SQLite.',
        link: 'https://github.com/Keyn1991/AEH_Proekt',
    },
    {
        title: 'DareDrop Spotlight Program',
        description: 'Integracja z platformą DareDrop dla streamerów. Projekt testowy lub proof-of-concept z wykorzystaniem API DareDrop i React.',
        link: 'https://github.com/Keyn1991/dare-drop-streame-spotlight-program',
    }
];

const Portfolio = () => (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
        <h1 className="text-4xl font-bold mb-10 text-blue-700 dark:text-blue-400">Portfolio</h1>
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                    <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                        Zobacz projekt →
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default Portfolio;
