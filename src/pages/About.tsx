import { t } from 'i18next';
import HeroSection from '../components/HeroSection/HeroSection';
import Location from '../components/Location/Location';
import { content } from '../utils/content';

const About: React.FC = () => {
    return (
        <>
            <HeroSection
                image='location_image.png'
                title={t(content.about.title)}
                text={t(content.about.description)}
            />
            <Location />
        </>
    );
};

export default About;
