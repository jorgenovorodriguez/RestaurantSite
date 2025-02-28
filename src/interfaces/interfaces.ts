export interface CardProps {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    price: number;
    available: boolean;
}

export interface CardWrapperProps {
    data: CardProps[];
}

export interface HeroProps {
    image: string;
}

export interface CustomButtonProps {
    buttonText: string;
    buttonTextColor?: string;
    buttonColor?: string;
    buttonColorHover?: string;
    disabled: boolean;
  }

export interface ScheduleItemProps{
    day: string;
    hours: string;
}

export interface LocationDataProps {
    address: string;
    phone: string;
    email: string;
    schedule: ScheduleItemProps[];
}

export interface CoordinatesProps {
    lat: number;
    lng: number;
}

export interface ProteinInfo {
    codProtein: number;
    protein: string;
}

export interface MenuItem {
    id: number;
    image: string;
    title: string;
    description: string;
    buttonText: string;
    speciality: boolean;
    info: ProteinInfo;
    price: number;
    available: boolean;
}

export type MenuProps = MenuItem[];

export interface FilterContextProps {
    selectedProtein: number | null;
    setSelectedProtein: (protein: number | null) => void;
}

export interface HeroSectionProps {
    image: string;
    title?: string;
    text: string;
}

