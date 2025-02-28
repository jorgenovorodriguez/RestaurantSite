import { Link } from 'react-router-dom';
import { content } from '../../utils/content';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[80vh] text-center'>
            <h1 className='text-4xl font-bold text-primaryText'>
                {content.notFound.title}
            </h1>
            <p className='text-lg mt-2'>{content.notFound.message}</p>
            <Link
                to='/'
                className='mt-4 px-4 py-2 bg-button text-primaryText rounded-lg'
            >
                {content.notFound.buttonText}
            </Link>
        </div>
    );
};

export default NotFound;
