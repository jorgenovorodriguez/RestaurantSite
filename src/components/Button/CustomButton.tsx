import { CustomButtonProps } from '../../interfaces/interfaces';
import { useTranslation } from 'react-i18next';

const CustomButton: React.FC<CustomButtonProps> = ({
    buttonText,
    buttonTextColor = 'text-primaryText',
    buttonColor = 'bg-button',
    buttonColorHover = 'hover:bg-blue-700 dark:hover:bg-blue-900',
    disabled = false,
}) => {
    const { i18n } = useTranslation();

    return (
        <button
            className={`mt-4 w-1/2 mx-auto py-2 rounded-lg transition ${buttonTextColor} ${buttonColor} ${buttonColorHover} `}
            disabled={disabled}
        >
            {i18n.t(buttonText)}
        </button>
    );
};

export default CustomButton;
