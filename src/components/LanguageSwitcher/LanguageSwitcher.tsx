import { useTranslation } from 'react-i18next';
import { content } from '../../utils/content';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('I18N_LANGUAGE', lng);
    };

    return (
        <div className='flex justify-between items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition'>
            <span className='mr-2'>{i18n.t(content.header.languageLabel)}</span>
            <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className='w-24 p-1 rounded-md bg-transparent text-sm'
            >
                <option value='en' className='text-primary'>
                    🇬🇧 {i18n.t(content.header.languages[0])}
                </option>
                <option value='es' className='text-primary'>
                    🇪🇸 {i18n.t(content.header.languages[1])}
                </option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
