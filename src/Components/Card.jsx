import React from 'react';
import {Link} from "react-router-dom";

const Card = (props) => {
    const {
        personImg,
        personName,
        personRace,
        id
    } = props;

    return (
        <div
            className={"card-item"}>
            <Link to={`card/${id}`}>
                <div className={"card-img"}>
                    <img src={personImg} alt="person img"/>
                </div>
                <div className={"card-text"}>
                    <p>{personName}</p>
                    <p>{personRace}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;