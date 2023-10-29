import React from 'react';

type ButtonPropsType = {
    children: React.ReactNode
    onClick: () => void
}

export const Button:React.FC<ButtonPropsType> = ({children, onClick}) => {

    const onClickHandler = () => onClick()

    return (
        <button onClick={onClickHandler}>
            {children}
        </button>
    );
};

