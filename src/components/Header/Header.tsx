import { useState } from 'react';
import { content } from '../../utils/content';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedNavItem, setSelectedNavItem] = useState<string | null>(null);
    const navItems = content.header.navItems;

    const handleNavClick = (item: string) => {
        setSelectedNavItem(item);
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    const navMenu = () => {
        return navItems.map((item, index) => {
            const isActive = selectedNavItem === item;

            return (
                <li key={index} className='p-2 rounded-md cursor-pointer'>
                    <Link
                        to={
                            item.toLowerCase() === 'home'
                                ? '/'
                                : `/${item.toLowerCase()}`
                        }
                        onClick={() => handleNavClick(item)}
                        className={`relative text-white text-lg font-medium
                            after:content-[""]
                            after:absolute after:left-0 after:bottom-[-2px]
                            after:w-0 after:h-[2px] after:bg-white
                            after:transition-all after:duration-300
                            ${
                                isActive ? 'after:w-full' : 'hover:after:w-full'
                            }`}
                    >
                        {item}
                    </Link>
                </li>
            );
        });
    };

    return (
        <header className='flex justify-between items-center p-4 bg-[#1a4d2e] text-white border-b sticky top-0 z-50'>
            <h1 className='text-xl font-bold font-logo'>
                {content.header.title}
            </h1>
            <nav>
                <div className='md:hidden'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-white focus:outline-none'
                    >
                        ☰
                    </button>
                    <div
                        className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.85)] z-40
                            transform ${
                                isOpen
                                    ? 'scale-y-100 opacity-100'
                                    : 'scale-y-0 opacity-0'
                            } 
                            transition-all duration-500 ease-out`}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className='absolute top-4 right-4 text-white text-3xl'
                        >
                            &times;
                        </button>
                        <ul className='flex flex-col items-center justify-center h-full space-y-4'>
                            {navMenu()}
                        </ul>
                    </div>
                </div>
                <ul className='hidden md:flex gap-4'>{navMenu()}</ul>
            </nav>
        </header>
    );
};

export default Header;
