import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {ICardProps} from "../store/cardApi";


const Card:FC<ICardProps> = ({personImg, personRace, personName, id}) => {
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