import React from 'react';
import Card from "./Card";
// @ts-ignore
import {useGetGoodsQuery} from "../store/cardApi";
// @ts-ignore
import MyCardLoader from "./MyCardLoader";
import MyButton from "./UI/MyButton/MyButton";
// @ts-ignore
import ScrollBtn from "./ScrollBtn";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import {setPage} from "../store/slices/pageSlice";

interface ICardListProps {
    filterQuery: string;
}
interface IGetGoods{
    data: any[],
    isLoading: boolean,
    isError: boolean
}
const CardList = ({filterQuery}: ICardListProps) => {
    // const [page, setPage] = React.useState(1);
    const getPage = useSelector((state: any) => state.page.value)
    const {data = [], isLoading, isError} = useGetGoodsQuery<IGetGoods>(`?page=${getPage}`)
    const dispatch = useDispatch();

    function sortItems() {
        if (isLoading || filterQuery === "") return data;
        return data.filter((elem: any) => {
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
                        ? sortedItems.map((elem: any) => (
                            <Card
                                key={elem.name + "" + elem.id}
                                personImg={elem.image}
                                personName={elem.name}
                                personRace={elem.species}
                                id={elem.id}
                            />
                        ))
                        : [...Array(16).keys()].map((elem: number) => <MyCardLoader key={elem}/>)
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