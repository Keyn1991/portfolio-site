import { motion } from 'framer-motion';

const Technologies = () => {
    const tech = {
        frontend: [
            { name: 'React', link: 'https://react.dev/' },
            { name: 'TypeScript', link: 'https://www.typescriptlang.org/docs/' },
            { name: 'Redux Toolkit', link: 'https://redux-toolkit.js.org/' },
            { name: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { name: 'Bootstrap', link: 'https://getbootstrap.com/docs/' },
        ],
        backend: [
            { name: 'Node.js', link: 'https://nodejs.org/en/docs/' },
            { name: 'NestJS', link: 'https://docs.nestjs.com/' },
            { name: '.NET Core', link: 'https://learn.microsoft.com/en-us/dotnet/core/' },
            { name: 'Express', link: 'https://expressjs.com/' },
            { name: 'MongoDB', link: 'https://www.mongodb.com/docs/' },
            { name: 'MySQL', link: 'https://dev.mysql.com/doc/' },
        ],
        tools: [
            { name: 'Docker', link: 'https://docs.docker.com/' },
            { name: 'AWS', link: 'https://docs.aws.amazon.com/' },
            { name: 'Git', link: 'https://git-scm.com/doc' },
            { name: 'GitHub', link: 'https://docs.github.com/' },
        ],
    };

    const icons: Record<string, string> = {
        frontend: '🖥️',
        backend: '🧠',
        tools: '🧰',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8 flex flex-col items-center"
        >
            <h1 className="text-4xl font-bold mb-10 text-blue-700 dark:text-blue-400">Technologie</h1>
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
                {Object.entries(tech).map(([category, items]) => (
                    <div
                        key={category}
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 transition hover:shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                            <span>{icons[category]}</span>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>
                        <ul className="space-y-2">
                            {items.map(({ name, link }) => (
                                <li key={name}>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-600 transition text-sm font-medium text-blue-700 dark:text-blue-300 hover:underline"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Technologies;
