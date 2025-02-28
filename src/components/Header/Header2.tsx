import { useState } from 'react';
import { content } from '../../utils/content';
import { Link } from 'react-router-dom';
import { IoSettingsSharp } from 'react-icons/io5';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const navItems = content.header.navItems;

    const handleNavClick = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    const navMenu = () => {
        return navItems.map((item, index) => (
            <li key={index} className='p-2 rounded-md cursor-pointer'>
                <Link
                    to={
                        item.toLowerCase() === 'home'
                            ? '/'
                            : `/${item.toLowerCase()}`
                    }
                    onClick={handleNavClick}
                    className={`relative text-primaryText text-lg font-medium
                        after:content-[""]
                        after:absolute after:left-0 after:bottom-[-2px]
                        after:w-0 after:h-[2px] after:bg-white
                        after:transition-all after:duration-300
                        dark:after:bg-[#bababa]
                        hover:after:w-full`}
                >
                    {item}
                </Link>
            </li>
        ));
    };

    return (
        <header className='flex justify-between items-center p-4 bg-primary text-primaryText border-b sticky top-0 z-50'>
            <Link
                to='/'
                className='text-xl font-bold font-logo text-primaryText'
            >
                {content.header.title}
            </Link>

            {/* Contenedor de botones en móvil */}
            <nav className='flex items-center gap-4 md:gap-6'>
                {/* Menú en escritorio */}
                <ul className='hidden md:flex gap-4'>{navMenu()}</ul>

                {/* Botón de menú en móviles */}
                <div className='md:hidden order-1'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-primaryText focus:outline-none text-2xl'
                    >
                        ☰
                    </button>
                </div>

                {/* Botón de ajustes (siempre a la derecha) */}
                <div className='relative order-2'>
                    <button
                        onClick={() => setSettingsOpen(!settingsOpen)}
                        className='text-xl md:text-2xl text-primaryText focus:outline-none pt-2'
                    >
                        <IoSettingsSharp />
                    </button>

                    {settingsOpen && (
                        <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md p-3'>
                            <button
                                id='theme-toggle'
                                className='flex justify-between items-center w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition'
                            >
                                <span>Modo Oscuro</span>
                                <div className='w-10 h-5 bg-gray-200 dark:bg-gray-600 rounded-full relative'>
                                    <div className='absolute left-1 top-1 w-4 h-4 bg-white dark:bg-gray-300 rounded-full shadow-md transition-transform duration-300 dark:translate-x-5'></div>
                                </div>
                            </button>
                        </div>
                    )}
                </div>

                {/* Menú móvil con animación */}
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.85)] z-40
                        transform ${
                            isOpen
                                ? 'scale-y-100 opacity-100'
                                : 'scale-y-0 opacity-0'
                        } 
                        transition-all duration-500 ease-out origin-top`}
                >
                    {isOpen && (
                        <>
                            <button
                                onClick={() => setIsOpen(false)}
                                className='absolute top-4 right-4 text-primaryText text-3xl'
                            >
                                &times;
                            </button>
                            <ul className='flex flex-col items-center justify-center h-full space-y-4'>
                                {navMenu()}
                            </ul>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
