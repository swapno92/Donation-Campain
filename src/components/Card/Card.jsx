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
        <div className="md:px-32 mt-12  mx-auto space-y-5 h-[100vh] w-[90%] ">
            <img src={card.img} alt="" className="w-full h-full rounded" />
            <div className="absolute bg-black lg:left-[100px] md:left-[9%] -left-[18%] -bottom-[135px]  lg:w-[71.2%] md:w-[57%] w-[90.5%] h-20 mx-24 opacity-50 flex items-center rounded-lg">
                <button style={{backgroundColor:card.color}} className=" ml-11 px-3 py-2 rounded">Donate ${card.price}</button>
            </div>
            <h2 className="md:text-4xl text-3xl font-bold">{card.title}</h2>
            <p className="text-base font-normal">{card.description}</p>
        </div>
    );
};

export default Card;