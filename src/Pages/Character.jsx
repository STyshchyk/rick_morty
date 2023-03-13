import React from 'react';
import {useParams} from "react-router-dom";
import {useGetItemQuery} from "../store/cardApi";
import {useNavigate} from "react-router-dom";
import arrowSvg from "../Assets/arrow_back_24px.svg"
import NavigateArrow from "../Components/NavigateArrow";
import ScrollBtn from "../Components/ScrollBtn";

const Character = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    const {id} = useParams();
    const {data, isLoading, isError} = useGetItemQuery(id);

    if (isLoading) return <h1>
        Character is loading</h1>

    if (isError) return <>
        <div>An error has occurred!
            <NavigateArrow
                className={"navigate"}
                onClick={handleClick}
            >
                <img src={arrowSvg} alt="char-img"/>
                Go back
            </NavigateArrow>
        </div>
    </>

    return (

        <div className={"char-page"}>
            <ScrollBtn/>
            <NavigateArrow
                className={"navigate"}
                onClick={handleClick}
            >
                <img src={arrowSvg} alt="char-img"/>
                Go back
            </NavigateArrow>
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