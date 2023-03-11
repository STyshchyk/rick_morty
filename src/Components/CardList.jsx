import React from 'react';
import Card from "./Card";
import {useGetGoodsQuery} from "../store/cardApi";

const CardList = ({filterQuery}) => {
    const {data, isLoading} = useGetGoodsQuery()

    function sortItems() {
        if (isLoading || filterQuery === "") return data;
        return data.filter(elem => {
            return elem.name.toLowerCase().includes(filterQuery.toLowerCase())
        });

    }

    const sortedItems = sortItems();

    return (
        <div className={"card-wrapper"}>
            {
                !isLoading
                    ? sortedItems.map(elem => (
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