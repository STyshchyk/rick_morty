import React from 'react';
import {useGetGoodsQuery} from "../store/cardApi";
import Card from "./Card";

const CardList = () => {
    const {data, isLoading} = useGetGoodsQuery()
    return (
        <div className={"card-wrapper"}>
            {
                !isLoading
                    ? data.results.map(elem => (
                        <Card
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