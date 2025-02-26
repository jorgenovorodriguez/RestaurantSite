import { getImageUrl } from '../../utils/helpers';
import locationMock from '../../data/locationMock.json';
import { content } from '../../utils/content';

const Location: React.FC = () => {
    const image = getImageUrl('map_image.png');
    const data = locationMock;
    const schedule = data.schedule;

    return (
        <div className='flex flex-col p-4 items-center justify-center'>
            <div className='text-center lg:w-1/2 p-[1rem]'>
                <h1 className='mb-[1rem] font-bold text-4xl'>
                    {content.location.title}
                </h1>
            </div>
            <div className='bg-white shadow-lg rounded-lg overflow-hidden w-80 md:w-full'>
                <div className='lg:flex'>
                    <img
                        src={image}
                        alt='Card Image'
                        className='w-full h-48 object-cover lg:w-1/2 lg:h-auto'
                    />

                    <div className='p-4 grid md:grid-cols-2 gap-4 lg:w-1/2'>
                        <div>
                            <h2 className='font-bold text-xl text-gray-900 mt-4 md:mt-0'>
                                {content.location.contactLabel}
                            </h2>
                            <p className='mt-2 text-gray-700'>
                                <strong>{content.location.addressLabel}</strong>
                                {data.address}
                            </p>
                            <p className='text-gray-700'>
                                <strong>{content.location.phoneLabel}</strong>
                                {data.phone}
                            </p>
                            <p className='text-gray-700'>
                                <strong>{content.location.emailLabel}</strong>
                                {data.email}
                            </p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-lg text-gray-900 mt-4 md:mt-0'>
                                {content.location.scheduleLabel}
                            </h3>
                            <ul className='mt-2 text-gray-700'>
                                {schedule.map((item, index) => (
                                    <li key={index}>
                                        <span className='font-medium'>
                                            {item.day}:{' '}
                                        </span>
                                        {item.hours}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
