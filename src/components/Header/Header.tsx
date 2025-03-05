import { useState } from 'react';
import { content } from '../../utils/content';
import { Link } from 'react-router-dom';
import { IoSettingsSharp } from 'react-icons/io5';
import ThemeToggle from '../ThemeToggle/ThemeToogle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { i18n } = useTranslation();

    const [dropdownType, setDropdownType] = useState<
        'menu' | 'settings' | null
    >(null);

    const navItems = content.header.navItems;

    const handleNavClick = () => {
        setDropdownType(null);
        window.scrollTo(0, 0);
    };

    const navMenu = () => {
        return navItems.map((item, index) => (
            <li key={index} className='p-2 rounded-md  cursor-pointer'>
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
                    {i18n.t(item)}
                </Link>
            </li>
        ));
    };

    const toggleDropdown = (type: 'menu' | 'settings') => {
        if (dropdownType === type) {
            setDropdownType(null);
        } else {
            setDropdownType(type);
        }
    };

    return (
        <header className='flex justify-between items-center p-4 bg-primary text-primaryText border-b sticky top-0 z-50'>
            <Link
                to='/'
                className='text-xl font-bold font-logo text-primaryText'
            >
                {content.header.title}
            </Link>

            <nav className='flex items-center gap-4 md:gap-6'>
                <ul className='hidden md:flex gap-4'>{navMenu()}</ul>

                <div className='md:hidden order-1'>
                    <button
                        onClick={() => toggleDropdown('menu')}
                        className='text-primaryText focus:outline-none text-2xl'
                    >
                        ☰
                    </button>
                </div>

                <div className='relative order-2'>
                    <button
                        onClick={() => toggleDropdown('settings')}
                        className='text-xl md:text-2xl text-primaryText focus:outline-none pt-1 md:pt-2'
                    >
                        <IoSettingsSharp />
                    </button>
                </div>

                <div
                    className={`fixed top-0 right-0 w-full md:w-1/4 h-full bg-[rgba(0,0,0,0.9)] md:bg-[rgba(0,0,0,0.7)] z-40
                        transform ${
                            dropdownType
                                ? 'scale-y-100 opacity-100'
                                : 'scale-y-0 opacity-0'
                        } 
                        transition-all duration-500 ease-out origin-top`}
                >
                    {dropdownType && (
                        <>
                            <button
                                onClick={() => setDropdownType(null)}
                                className='absolute top-4 right-4 text-primaryText text-6xl'
                            >
                                &times;
                            </button>
                            {dropdownType === 'menu' ? (
                                <ul className='flex flex-col items-center justify-center h-full space-y-4'>
                                    {navMenu()}
                                </ul>
                            ) : (
                                <div className='flex items-center justify-center h-full w-full'>
                                    <div className='w-70 grid gap-6'>
                                        <ThemeToggle />
                                        <LanguageSwitcher />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
