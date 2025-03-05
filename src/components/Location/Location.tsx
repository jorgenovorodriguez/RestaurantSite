import locationMock from '../../data/locationMock.json';
import { useEffect, useState } from 'react';
import { content } from '../../utils/content';
import { GoogleMap, Marker } from '@react-google-maps/api';
import useVisibilityOnScroll from '../../Hooks/useVisibilityOnScroll';
import {
    CoordinatesProps,
    LocationDataProps,
} from '../../interfaces/interfaces';
import { useTranslation } from 'react-i18next';

const Location: React.FC = () => {
    const { i18n } = useTranslation();

    const data: LocationDataProps = locationMock;
    const coordinates: CoordinatesProps = {
        lat: 39.2337,
        lng: -84.552,
    };
    const { isVisible, elementRef } = useVisibilityOnScroll();
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });
        return () => observer.disconnect();
    }, []);

    const mapDarkMode = [
        { elementType: 'geometry', stylers: [{ color: '#212121' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#383838' }],
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }],
        },
    ];

    return (
        <div
            ref={elementRef}
            className={`flex flex-col w-100% p-4 items-center justify-center transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className='text-center lg:w-1/2 p-[1rem]'>
                <h1 className='mb-[1rem] font-bold text-4xl '>
                    {i18n.t(content.location.title)}
                </h1>
            </div>
            <div className='bg-primary shadow-shadow shadow-xl rounded-lg overflow-hidden w-80 md:w-full'>
                <div className='lg:grid grid-cols-2'>
                    <div>
                        <GoogleMap
                            mapContainerStyle={{
                                width: '100%',
                                height: '400px',
                            }}
                            center={coordinates}
                            zoom={12}
                            options={{
                                styles: isDarkMode ? mapDarkMode : [],
                                disableDefaultUI: true,
                            }}
                        >
                            <Marker position={coordinates} />
                        </GoogleMap>
                    </div>
                    <div>
                        <div className='p-4 grid md:grid-cols-2 gap-4 '>
                            <div>
                                <h2 className='font-bold text-xl lg:text-2xl text-primaryText mt-4 md:mt-0'>
                                    {i18n.t(content.location.contactLabel)}
                                </h2>
                                <p className='mt-2 text-primaryText'>
                                    <strong>
                                        {i18n.t(content.location.addressLabel)}
                                    </strong>{' '}
                                    {data.address}
                                </p>
                                <p className='text-primaryText'>
                                    <strong>
                                        {i18n.t(content.location.phoneLabel)}
                                    </strong>{' '}
                                    {data.phone}
                                </p>
                                <p className='text-primaryText'>
                                    <strong>
                                        {i18n.t(content.location.emailLabel)}
                                    </strong>{' '}
                                    {data.email}
                                </p>
                            </div>
                            <div>
                                <h3 className='font-semibold text-lg lg:text-2xl text-primaryText mt-4 md:mt-0'>
                                    {i18n.t(content.location.scheduleLabel)}
                                </h3>
                                <ul className='mt-2 text-primaryText'>
                                    {data.schedule.map((item, index) => (
                                        <li
                                            key={index}
                                            className='grid grid-cols-[1fr_2fr] lg:pb-[1rem]'
                                        >
                                            <span className='font-bold'>
                                                {i18n.t(item.day)}:
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
