import React, { ReactNode } from "react";

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children: ReactNode; 
}

const Button = ({ children, className, onClick }:ButtonProps) => {
    return (
        <button
            type="button"
            className={`rounded-full py-2 px-3 bg-white text-black flex items-center justify-center text-xs ${className || ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
