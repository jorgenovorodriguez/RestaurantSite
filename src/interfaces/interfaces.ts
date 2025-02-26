export interface CardProps {
    image: string;
    title: string;
    description: string;
    buttonText: string;
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
  }