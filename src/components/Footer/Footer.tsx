import {
    FaInstagram,
    FaLinkedin,
    FaTiktok,
    FaFacebook,
    FaTwitter,
} from 'react-icons/fa';
import { content } from '../../utils/content';

const socialLinks = [
    {
        href: 'https://www.instagram.com/',
        icon: <FaInstagram />,
        color: 'hover:text-pink-600',
    },
    {
        href: 'https://www.linkedin.com/',
        icon: <FaLinkedin />,
        color: 'hover:text-blue-600',
    },
    {
        href: 'https://www.tiktok.com/',
        icon: <FaTiktok />,
        color: 'hover:text-black',
    },
    {
        href: 'https://www.facebook.com/',
        icon: <FaFacebook />,
        color: 'hover:text-blue-500',
    },
    {
        href: 'https://twitter.com/',
        icon: <FaTwitter />,
        color: 'hover:text-blue-400',
    },
];

const Footer: React.FC = () => {
    return (
        <footer className='bg-[#1a4d2e] text-white py-6'>
            <div className='container mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-2'>
                <p className='pt-2 text-xs md:text-base'>
                    &copy;{content.footer.companyLabel}
                </p>

                <div className='flex justify-center space-x-6'>
                    {socialLinks.map(({ href, icon, color }, index) => (
                        <a
                            key={index}
                            href={href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={`text-xl ${color} transition duration-200`}
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
