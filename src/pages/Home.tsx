import CardWrapper from '../components/Card/CardWrapper';
import Hero from '../components/Hero/Hero';
import Location from '../components/Location/Location';
import specialitiesMock from '../data/specialitiesMock.json';
import { content } from '../utils/content';

const Home: React.FC = () => {
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
                <CardWrapper data={specialitiesMock} />
                <Location />
            </div>
        </>
    );
};

export default Home;
