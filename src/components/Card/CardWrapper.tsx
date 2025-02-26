import { CardWrapperProps } from '../../interfaces/interfaces';
import Card from './Card';

const CardWrapper: React.FC<CardWrapperProps> = ({ data }) => {
    return (
        <div className='grid gap-4 p-4 md:grid-cols-3'>
            {data.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default CardWrapper;
