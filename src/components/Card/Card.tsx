import React from 'react';
import { getImageUrl } from '../../utils/helpers';
import { CardProps } from '../../interfaces/interfaces';
import CustomButton from '../Button/CustomButton';

const Card: React.FC<CardProps> = ({
    image,
    title,
    description,
    buttonText,
}) => {
    const imageUrl = getImageUrl(image);

    return (
        <div className='flex flex-col w-full max-w-xs mx-auto bg-white shadow-lg rounded-2xl overflow-hidden md:max-w-sm lg:max-w-md'>
            <img
                src={imageUrl}
                alt={title}
                className='w-full h-48 object-contain'
            />
            <div className='p-4 flex flex-col flex-grow text-center '>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <p className=' text-sm mt-2 flex-grow flex items-center justify-center '>
                    {description}
                </p>
                <CustomButton buttonText={buttonText} />
            </div>
        </div>
    );
};

export default Card;
