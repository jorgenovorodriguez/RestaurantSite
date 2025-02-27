import CardWrapper from '../components/Card/CardWrapper';
import HeroSection from '../components/HeroTwo/HeroTwo';
import { content } from '../utils/content';
import menuMock from '../data/menuMock.json';
import React, { useState } from 'react';
import { MenuProps } from '../interfaces/interfaces';

const Menu: React.FC = () => {
    const [selectedProtein, setSelectedProtein] = useState<number | null>(null);

    const filteredData: MenuProps = selectedProtein
        ? menuMock.filter((item) => item.info.codProtein === selectedProtein)
        : menuMock;

    return (
        <>
            <HeroSection
                image='menu_image.png'
                title={content.menu.title}
                text={content.menu.description}
                buttonText={content.menu.buttonText}
            />

            <div className='flex flex-col items-center justify-center p-8'>
                <div className='flex gap-4 mb-6'>
                    {Object.entries(content.menu.filterItems).map(
                        ([key, value]) => {
                            const proteinValue = Number(key);
                            const isActive = selectedProtein === proteinValue;

                            return (
                                <button
                                    key={key}
                                    onClick={() =>
                                        setSelectedProtein(
                                            isActive ? null : proteinValue
                                        )
                                    }
                                    className='relative text-2xl font-medium transition-all duration-300 ease-in-out 
                                           after:content-[""] after:absolute after:left-0 after:bottom-0 
                                           after:w-0 after:h-[2px] after:bg-black after:transition-all 
                                           after:duration-300 after:ease-in-out 
                                           hover:after:w-full 
                                           focus:after:w-full 
                                           active:after:w-full'
                                >
                                    {value}
                                </button>
                            );
                        }
                    )}
                </div>

                <CardWrapper data={filteredData} />
            </div>
        </>
    );
};

export default Menu;
