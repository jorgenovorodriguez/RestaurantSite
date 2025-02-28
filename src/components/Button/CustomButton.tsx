import { CustomButtonProps } from '../../interfaces/interfaces';

const CustomButton: React.FC<CustomButtonProps> = ({
    buttonText,
    buttonTextColor = 'text-primaryText',
    buttonColor = 'bg-button',
    buttonColorHover = 'hover:bg-blue-700 dark:hover:bg-blue-900',
    disabled = false,
}) => {
    return (
        <button
            className={`mt-4 w-1/2 mx-auto py-2 rounded-lg transition ${buttonTextColor} ${buttonColor} ${buttonColorHover} `}
            disabled={disabled}
        >
            {buttonText}
        </button>
    );
};

export default CustomButton;
