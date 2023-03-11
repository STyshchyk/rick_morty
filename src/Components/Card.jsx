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
        <Link to={`card/${id}`}>
            <div
                className={"card-item"}>
                <div className={"card-img"}>
                    <img src={personImg} alt="person img"/>
                </div>
                <div className={"card-text"}>
                    <p>{personName}</p>
                    <p>{personRace}</p>
                </div>

            </div>
        </Link>
    );
};

export default Card;