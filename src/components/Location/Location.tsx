import locationMock from '../../data/locationMock.json';
import { content } from '../../utils/content';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import useVisibilityOnScroll from '../../Hooks/useVisibilityOnScroll';
import {
    CoordinatesProps,
    LocationDataProps,
} from '../../interfaces/interfaces';

const Location: React.FC = () => {
    const data: LocationDataProps = locationMock;
    const coordinates: CoordinatesProps = {
        lat: 40.748817,
        lng: -73.985428,
    };
    const apiKey: string = import.meta.env.VITE_MAPS_API_KEY;
    const { isVisible, elementRef } = useVisibilityOnScroll();

    return (
        <div
            ref={elementRef}
            className={`flex flex-col w-100% p-4 items-center justify-center transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className='text-center lg:w-1/2 p-[1rem]'>
                <h1 className='mb-[1rem] font-bold text-4xl text-primary'>
                    {content.location.title}
                </h1>
            </div>
            <div className='bg-primary shadow-primary shadow-xl rounded-lg overflow-hidden w-80 md:w-full'>
                <div className='lg:grid grid-cols-2'>
                    <div>
                        <LoadScript googleMapsApiKey={apiKey}>
                            <GoogleMap
                                mapContainerStyle={{
                                    width: '100%',
                                    height: '400px',
                                }}
                                center={coordinates}
                                zoom={12}
                            >
                                <Marker position={coordinates} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <div>
                        <div className='p-4 grid md:grid-cols-2 gap-4 '>
                            <div>
                                <h2 className='font-bold text-xl lg:text-2xl text-primary mt-4 md:mt-0'>
                                    {content.location.contactLabel}
                                </h2>
                                <p className='mt-2 text-primary'>
                                    <strong>
                                        {content.location.addressLabel}
                                    </strong>{' '}
                                    {data.address}
                                </p>
                                <p className='text-primary'>
                                    <strong>
                                        {content.location.phoneLabel}
                                    </strong>{' '}
                                    {data.phone}
                                </p>
                                <p className='text-primary'>
                                    <strong>
                                        {content.location.emailLabel}
                                    </strong>{' '}
                                    {data.email}
                                </p>
                            </div>
                            <div>
                                <h3 className='font-semibold text-lg lg:text-2xl text-primary mt-4 md:mt-0'>
                                    {content.location.scheduleLabel}
                                </h3>
                                <ul className='mt-2 text-primary'>
                                    {data.schedule.map((item, index) => (
                                        <li
                                            key={index}
                                            className='grid grid-cols-[1fr_2fr] lg:pb-[1rem]'
                                        >
                                            <span className='font-bold'>
                                                {item.day}:
                                            </span>
                                            <span>{item.hours}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
