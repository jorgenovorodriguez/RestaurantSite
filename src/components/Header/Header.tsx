import { useState } from 'react';
import { content } from '../../utils/content';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = content.header.navItems;

    const navMenu = () => {
        return navItems.map((item, index) => (
            <li
                key={index}
                className='p-2 hover:bg-terciary rounded-md cursor-pointer'
            >
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
        ));
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
                    {isOpen && (
                        <ul className='absolute right-4 top-12 bg-gray-800 p-2 rounded-lg shadow-lg'>
                            {navMenu()}
                        </ul>
                    )}
                </div>
                <ul className='hidden md:flex gap-4'>{navMenu()}</ul>
            </nav>
        </header>
    );
};

export default Header;
