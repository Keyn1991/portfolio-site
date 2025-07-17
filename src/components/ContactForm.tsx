import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [form, setForm] = useState({ user_name: '', user_email: '', message: '' });
    const [errors, setErrors] = useState({ user_name: '', user_email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = { user_name: '', user_email: '', message: '' };
        let valid = true;

        if (!form.user_name.trim()) {
            newErrors.user_name = 'Imię jest wymagane';
            valid = false;
        }
        if (!form.user_email.includes('@')) {
            newErrors.user_email = 'Podaj poprawny email';
            valid = false;
        }
        if (!form.message.trim()) {
            newErrors.message = 'Wiadomość nie może być pusta';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        const publicKey = 'HJ3-0GHe4Q4UpjSkh';
        const serviceId = 'dmytro.potapchuk.dev';
        const templateId = 'template_1b46bj4';

        setLoading(true);

        try {
            await emailjs.send(serviceId, templateId, form, publicKey);
            alert('✅ Wiadomość wysłana!');
            setForm({ user_name: '', user_email: '', message: '' });
            setErrors({ user_name: '', user_email: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            alert('❌ Błąd wysyłania.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="user_name" className="block text-sm font-medium mb-1">Imię</label>
                <input
                    type="text"
                    name="user_name"
                    value={form.user_name}
                    onChange={handleChange}
                    placeholder="Twoje imię"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.user_name && <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>}
            </div>
            <div>
                <label htmlFor="user_email" className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    name="user_email"
                    value={form.user_email}
                    onChange={handleChange}
                    placeholder="Twój email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.user_email && <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>}
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Wiadomość</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Napisz wiadomość..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                {loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            </button>
        </form>
    );
};

export default ContactForm;
