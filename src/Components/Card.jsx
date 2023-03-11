import React from 'react';

const Card = ({personImg, personName,personRace}) => {
    return (
        <div className={"card-item"}>
          <div className={"card-img"}>
              <img src={personImg} alt="person img"/>
          </div>
            <div className={"card-text"}>
                <p>{personName}</p>
                <p>{personRace}</p>
            </div>
        </div>
    );
};

export default Card;