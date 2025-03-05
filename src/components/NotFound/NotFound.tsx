import { Link } from 'react-router-dom';
import { content } from '../../utils/content';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { i18n } = useTranslation();

    return (
        <div className='flex flex-col items-center justify-center h-[80vh] text-center'>
            <h1 className='text-4xl font-bold text-primary'>
                {i18n.t(content.notFound.title)}
            </h1>
            <p className='text-lg mt-2'>{i18n.t(content.notFound.message)}</p>
            <Link
                to='/'
                className='mt-4 px-4 py-2 bg-button text-primaryText rounded-lg'
            >
                {i18n.t(content.notFound.buttonText)}
            </Link>
        </div>
    );
};

export default NotFound;
