import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext,
} from 'react';
import { FilterContextProps } from '../interfaces/interfaces';

interface FilterProviderProps {
    children: ReactNode;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: FilterProviderProps) => {
    const [selectedProtein, setSelectedProtein] = useState<number | null>(null);

    useEffect(() => {
        const savedSelectedProtein = sessionStorage.getItem('selectedProtein');
        if (savedSelectedProtein) {
            setSelectedProtein(Number(savedSelectedProtein));
        }
    }, []);

    const updateSelectedProtein = (protein: number | null) => {
        setSelectedProtein(protein);
        sessionStorage.setItem('selectedProtein', protein?.toString() || '');
    };

    return (
        <FilterContext.Provider
            value={{
                selectedProtein,
                setSelectedProtein: updateSelectedProtein,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = (): FilterContextProps => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};
