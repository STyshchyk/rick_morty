import React from 'react';
import Card from "./Card";
import {useGetGoodsQuery} from "../store/cardApi";
import MyCardLoader from "./MyCardLoader";
import MyButton from "./UI/MyButton/MyButton";
import ScrollBtn from "./ScrollBtn";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../store/slices/pageSlice";

const CardList = ({filterQuery}) => {
    // const [page, setPage] = React.useState(1);
    const  getPage = useSelector(state => state.page.value)
    const {data = [], isLoading, isError} = useGetGoodsQuery(`?page=${getPage}` , {
        selectFromResult: ({ data= [] }) => ({
            data: [...data].sort((a, b) => a.name.localeCompare(b.name)),
        }),
    })
    const dispatch = useDispatch();
    function sortItems() {
        if (isLoading || filterQuery === "") return data;
        return data.filter(elem => {
            return elem.name.toLowerCase().includes(filterQuery.toLowerCase())
        });

    }

    const sortedItems = sortItems();
    if (isError) return <div>An error has occurred!</div>
    return (
        <>
            <div className={"card-wrapper"}>
                {
                    !isLoading
                        ? sortedItems.map(elem => (
                            <Card
                                key={elem.name+""+elem.id}
                                personImg={elem.image}
                                personName={elem.name}
                                personRace={elem.species}
                                id={elem.id}
                            />
                        ))
                        : [...Array(16).keys()].map(elem => <MyCardLoader key={elem}/>)
                }

            </div>
            <ScrollBtn/>
            <MyButton
                onClick={() => dispatch(setPage(getPage + 1))}
            >
                Load More Characters
            </MyButton>
        </>
    );
};

export default CardList;