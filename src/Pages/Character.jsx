import React from 'react';
import {useParams} from "react-router-dom";
import {useGetItemQuery} from "../store/cardApi";

const Character = () => {
    const {id} = useParams();
    const {data, isLoading} = useGetItemQuery(3)
    if (isLoading) return <h1>Loading</h1>
    return (
        <div className={"char-card"}>
            <div className="char-img">
                <img src={data.img} alt="char-img"/>
            </div>
            <h2>{data.name}</h2>
            <h4>Informations</h4>
            <div className={"char-info"}>
                <p>{data.gender}</p>
            </div>
        </div>
    );
};

export default Character;