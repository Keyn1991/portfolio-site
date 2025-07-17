import { motion } from 'framer-motion';

const About = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8 flex items-center justify-center"
    >
        <div className="max-w-4xl w-full space-y-6">
            <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400">O mnie</h1>
            <div className="space-y-4 text-lg leading-relaxed">
                <p>
                    Nazywam się <strong>Dmytro Potapchuk</strong> i jestem Full-Stack Developerem z tytułem inżyniera informatyki. Od 2022 roku pracuję jako freelancer, realizując projekty dla klientów indywidualnych i firm z różnych branż.
                </p>
                <p>
                    Specjalizuję się w tworzeniu aplikacji webowych i desktopowych, automatyzacji procesów biznesowych oraz integracjach z systemami zewnętrznymi. Posiadam praktyczne doświadczenie w budowie sklepów internetowych z częściami samochodowymi, systemach płatności, panelach administracyjnych i zarządzaniu produktami.
                </p>
                <p>
                    W pracy wykorzystuję technologie takie jak <span className="text-blue-600 dark:text-blue-400">React</span>, <span className="text-blue-600 dark:text-blue-400">TypeScript</span>, <span className="text-blue-600 dark:text-blue-400">NestJS</span>, <span className="text-blue-600 dark:text-blue-400">.NET</span> oraz <strong>Docker</strong> i <strong>AWS</strong> do wdrażania aplikacji.
                </p>
                <p>
                    Mam doświadczenie w pracy z bazami danych <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong> i <strong>SQLite</strong>. Tworzę wydajne REST API, wdrażam CI/CD i optymalizuję backend pod kątem skalowalności.
                </p>
                <p>
                    Ukończyłem wiele kursów technicznych (JavaScript, React, C++, .NET) oraz zaawansowane szkolenie w Okten School. Obecnie kontynuuję studia informatyczne w Akademii Ekonomiczno-Humanistycznej w Warszawie.
                </p>
                <p>
                    Komunikuję się płynnie w językach: 🇺🇦 ukraińskim (ojczysty), 🇵🇱 polskim (C2), 🇷🇺 rosyjskim (C1), 🇬🇧 angielskim (B1).
                </p>
                <p>
                    Więcej o moich projektach znajdziesz na&nbsp;
                    <a
                        href="https://github.com/Keyn1991"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                        GitHubie →
                    </a>
                </p>
            </div>
        </div>
    </motion.div>
);

export default About;
