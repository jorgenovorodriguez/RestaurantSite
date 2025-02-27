import HeroSection from '../components/HeroTwo/HeroTwo';
import Location from '../components/Location/Location';
import { content } from '../utils/content';

const About: React.FC = () => {
    return (
        <>
            <HeroSection
                image='location_image.png'
                text={content.about.description}
            />
            <Location />
        </>
    );
};

export default About;
