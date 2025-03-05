import { HeroProps } from '../../interfaces/interfaces';
import { getImageUrl } from '../../utils/helpers';
import { content } from '../../utils/content';
import { t } from 'i18next';

const Hero: React.FC<HeroProps> = ({ image }) => {
    const imageUrl = getImageUrl(image);

    return (
        <div className='text-center min-h-screen bg-primary pt-[2rem] 3xl:pt-[4rem]'>
            <div>
                <h1 className='font-bold p-[1rem] text-5xl md:text-6xl lg:text-8xl lg:px-[5rem] md:pt-[5rem] lg:pt-[0rem] text-primaryText'>
                    {t(content.hero.title)}
                </h1>
                <p className='text-primaryText font-bold text-xl'>
                    {t(content.hero.subTitle)}
                </p>
            </div>
            <img
                src={imageUrl}
                alt={content.hero.title}
                loading='lazy'
                className='w-full h-auto max-h-[60vh] object-contain p-[2rem]  px-[2rem]'
            />
        </div>
    );
};

export default Hero;
