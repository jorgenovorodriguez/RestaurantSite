import React from 'react';
import { getImageUrl } from '../../utils/helpers';
import { HeroSectionProps } from '../../interfaces/interfaces';

const HeroSection: React.FC<HeroSectionProps> = ({ image, title, text }) => {
    const imageUrl = getImageUrl(image);

    return (
        <section className='flex flex-col lg:flex-row items-center justify-center min-h-[95vh] px-6 bg-primary gap-8 lg:gap-20'>
            <div className='w-full max-w-[40vh] lg:max-w-[70vh] p-4 '>
                <img
                    src={imageUrl}
                    alt='Menu'
                    className='w-full h-auto object-cover rounded-lg'
                    loading='lazy'
                />
            </div>

            <div className='w-full max-w-[600px] text-center flex flex-col items-center'>
                <h2 className='text-4xl md:text-6xl lg:text-9xl font-bold text-primaryText'>
                    {title}
                </h2>
                <p className='text-base md:text-2xl text-primaryText mt-4'>
                    {text}
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
