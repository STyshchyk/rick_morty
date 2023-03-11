import React from 'react';

const NavigateArrow = (props) => {
    return (
        <span
            {...props}
        >
            {props.children}
        </span>
    );
};

export default NavigateArrow;