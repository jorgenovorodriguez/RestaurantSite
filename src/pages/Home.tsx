import CardWrapper from '../components/Card/CardWrapper';
import Hero from '../components/Hero/Hero';
import Location from '../components/Location/Location';
import menuMock from '../data/menuMock.json';
import { MenuProps } from '../interfaces/interfaces';
import { content } from '../utils/content';

const Home: React.FC = () => {
    const specialities: MenuProps = menuMock.filter((item) => item.speciality);

    return (
        <>
            <Hero image='home_image.png' />
            <div className='flex flex-col items-center justify-center'>
                <div className='text-center lg:w-1/2 p-[1rem]'>
                    <h1 className='mb-[1rem] font-bold md:text-4xl'>
                        {content.specialities.title}
                    </h1>
                    <p className='text-xs md:text-xl'>
                        {content.specialities.description}
                    </p>
                </div>
                <CardWrapper data={specialities} />
                <Location />
            </div>
        </>
    );
};

export default Home;
