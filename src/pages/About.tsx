import HeroSection from '../components/HeroSection/HeroSection';
import Location from '../components/Location/Location';
import { content } from '../utils/content';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
    const { i18n } = useTranslation();
    return (
        <>
            <HeroSection
                image='location_image.png'
                title={i18n.t(content.about.title)}
                text={i18n.t(content.about.description)}
            />
            <Location />
        </>
    );
};

export default About;
