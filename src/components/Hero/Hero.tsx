import { HeroProps } from '../../interfaces/interfaces';
import { getImageUrl } from '../../utils/helpers';
import { content } from '../../utils/content';

const Hero: React.FC<HeroProps> = ({ image }) => {
    const imageUrl = getImageUrl(image);

    return (
        <div className='text-center min-h-screen bg-primary  pt-[2rem] 3xl:pt-[8rem]'>
            <div>
                <h1 className='font-bold p-[1rem] text-5xl md:text-6xl lg:text-8xl lg:px-[5rem] md:pt-[5rem] lg:pt-[0rem] text-primary'>
                    {content.hero.title}
                </h1>
                <p className='text-primary font-bold text-xl'>
                    {content.hero.subTitle}
                </p>
            </div>
            <img
                src={imageUrl}
                alt={content.hero.title}
                className='w-full h-auto max-h-[60vh] object-contain p-[2rem]  px-[2rem]'
            />
        </div>
    );
};

export default Hero;
