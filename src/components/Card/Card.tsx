import React from 'react';
import { getAssetImageUrl } from '../../utils/helpers';
import { CardProps } from '../../interfaces/interfaces';
import CustomButton from '../Button/CustomButton';
import { content } from '../../utils/content';
import useVisibilityOnScroll from '../../Hooks/useVisibilityOnScroll';
import { useTranslation } from 'react-i18next';

const Card: React.FC<CardProps> = ({
    image,
    title,
    description,
    buttonText,
    price,
    available,
}) => {
    const { i18n } = useTranslation();
    const { isVisible, elementRef } = useVisibilityOnScroll();

    const imageUrl = getAssetImageUrl(image);

    const cardOpacity = isVisible
        ? !available
            ? 'opacity-50 pointer-events-none'
            : 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10';
    return (
        <div
            ref={elementRef}
            className={`flex flex-col w-full max-w-xs mx-auto bg-card shadow-shadow shadow-xl rounded-2xl overflow-hidden md:max-w-sm lg:max-w-md transform transition-all duration-700 ease-in-out
                ${cardOpacity}
            `}
        >
            <img
                src={imageUrl}
                alt={title}
                className='w-full h-48 object-contain'
                loading='lazy'
            />
            <div className='p-4 flex flex-col flex-grow text-center'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-lg font-semibold'>{`${title}. ${price}€`}</h2>
                </div>
                <p className='text-sm mt-2 flex-grow flex items-center justify-center'>
                    {i18n.t(description)}
                </p>
                <CustomButton
                    buttonText={
                        available
                            ? i18n.t(buttonText)
                            : i18n.t(content.menu.availabilityLabel)
                    }
                    disabled={!available}
                />
            </div>
        </div>
    );
};

export default Card;
