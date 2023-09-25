// import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
    const [card, setCard] = useState({})

    const { id } = useParams()
    const cards = useLoaderData()
    useEffect(() => {
        const findCard = cards?.find(card => card.id == id)
        setCard(findCard)
        // console.log(findCard);

    }, [id, cards])

    return (
        <div className="px-32 mt-12  mx-auto space-y-5 ">
            <img src={card.img} alt="" className="w-full h-full rounded" />
            <div className="absolute bg-black left-0 -bottom-[530px] w-[81.3%] h-20 mx-32 opacity-50 flex items-center ">
                <button style={{backgroundColor:card.color}} className=" ml-11 px-3 py-2 rounded">Donate ${card.price}</button>
            </div>
            <h2 className="text-4xl font-bold">{card.title}</h2>
            <p className="text-base font-normal">{card.description}</p>
        </div>
    );
};

export default Card;