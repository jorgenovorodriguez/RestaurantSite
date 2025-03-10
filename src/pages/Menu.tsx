import React from 'react';
import { content } from '../utils/content';
import menuMock from '../data/menuMock.json';
import { useFilter } from '../context/FilterContext';
import { MenuProps } from '../interfaces/interfaces';
import CardWrapper from '../components/Card/CardWrapper';
import HeroSection from '../components/HeroSection/HeroSection';
import { useTranslation } from 'react-i18next';

const Menu: React.FC = () => {
    const { selectedProtein, setSelectedProtein } = useFilter();
    const { i18n } = useTranslation();

    const filteredData: MenuProps = selectedProtein
        ? menuMock.filter((item) => item.info.codProtein === selectedProtein)
        : menuMock;

    return (
        <>
            <HeroSection
                image='menu_image.png'
                title={i18n.t(content.menu.title)}
                text={i18n.t(content.menu.description)}
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
                                    className={`relative text-2xl font-medium transition-all duration-300 ease-in-out 
                                        after:content-[""] after:absolute after:left-0 after:bottom-0 
                                        after:w-0 after:h-[2px] after:bg-primary  dark:after:bg-[#bababa] 
                                        after:transition-all after:duration-300 after:ease-in-out 
                                        hover:after:w-full focus:after:w-full active:after:w-full 
                                        text-secondaryText ${
                                            isActive ? 'after:w-full' : ''
                                        }`}
                                >
                                    {i18n.t(value)}
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
