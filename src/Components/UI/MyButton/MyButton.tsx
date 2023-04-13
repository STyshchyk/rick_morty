import React from 'react';
import styles from "./MyButton.module.scss"

interface IProps {
    children: string | JSX.Element | JSX.Element[],
    [props: string]: any;
}

const MyButton = ({children, props}: IProps)=> {
    return (
        <button
            {...props}
            className={styles.button1}
        >
            {children}
        </button>
    );
};

export default MyButton;