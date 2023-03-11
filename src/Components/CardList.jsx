import React from 'react';
import Card from "./Card";

const CardList = (props) => {
    const {
        data = [],
        isLoading = true
    } = props;
    return (
        <div className={"card-wrapper"}>
            {
                !isLoading
                    ? data.results.map(elem => (
                        <Card
                            key={elem.id}
                            personImg={elem.image}
                            personName={elem.name}
                            personRace={elem.species}
                        />
                    ))
                    : <h1>Data is loading</h1>
            }
        </div>
    );
};

export default CardList;