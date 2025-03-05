import { t } from 'i18next';
import { content } from '../../utils/content';

const ThemeToggle: React.FC = () => {
    const handleThemeToggle = () => {
        const html = document.documentElement;
        const isDarkMode = html.classList.toggle('dark');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    };

    return (
        <button
            id='theme-toggle'
            onClick={handleThemeToggle}
            className='flex justify-between items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700  hover:bg-gray-200 dark:hover:bg-gray-600 transition'
        >
            <span>{t(content.header.darkMode)}</span>
            <div className='w-10 h-5 bg-red-600 dark:bg-green-600 rounded-full relative'>
                <div className='absolute left-0.25 top-0.5 w-4 h-4 bg-white dark:bg-gray-400 rounded-full shadow-md transition-transform duration-300 dark:translate-x-5'></div>
            </div>
        </button>
    );
};

export default ThemeToggle;
