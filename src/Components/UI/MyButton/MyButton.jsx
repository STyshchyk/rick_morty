import React from 'react';
import styles from "./MyButton.module.scss"
const MyButton = (props) => {
    return (
        <button
            {...props}
            className={styles.button1}
        >
            {props.children}
        </button>
    );
};

export default MyButton;