import React from 'react';
import {useParams} from "react-router-dom";
import {useGetItemQuery} from "../store/cardApi";

const Character = () => {
    const {id} = useParams();
    const {data, isLoading} = useGetItemQuery(3)
    if (isLoading) return <h1>Loading</h1>
    return (<div className={"char-page"}>
        <div className="char-img">
            <img src={data.image} alt="char-img"/>
        </div>
        <h2>{data.name}</h2>
        <h4>Informations</h4>
        <div className={"char-info"}>
            <p>
                <span>Gender</span>
                <span>{data.gender}</span>
            </p>
            <p>
                <span>Status</span>
                <span>{data.status}</span>
            </p>
            <p>
                <span>Specie</span>
                <span>{data.species}</span>
            </p>
            <p>
                <span>Origin</span>
                <span>{data.origin.name}</span>
            </p>
            <p>
                <span>Type</span>
                <span>{data?.type === "" ? "Unkwown" : data?.type}</span>
            </p>
        </div>
    </div>);
};

export default Character;