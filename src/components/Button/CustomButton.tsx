import { CustomButtonProps } from '../../interfaces/interfaces';

const CustomButton: React.FC<CustomButtonProps> = ({
    buttonText,
    buttonTextColor = 'text-white',
    buttonColor = 'bg-blue-600',
    buttonColorHover = 'hover:bg-blue-700',
}) => {
    return (
        <button
            className={`mt-4 w-1/2 mx-auto py-2 rounded-lg transition ${buttonTextColor} ${buttonColor} ${buttonColorHover}`}
        >
            {buttonText}
        </button>
    );
};

export default CustomButton;
