import React from 'react';

interface INavigate {
    props: any[],
    children: string | JSX.Element | JSX.Element[],
}

const NavigateArrow = ({children, props}: INavigate) => {
    return (
        <span
            {...props}
        >
            {children}
        </span>
    );
};

export default NavigateArrow;