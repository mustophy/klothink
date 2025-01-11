export interface IButton {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    rightIcon?: React.ReactNode
}

export interface IProduct {
    name: string;
    image: string;
    price: string;
    desc: string;
}