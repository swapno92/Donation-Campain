// import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Card = () => {
    const [card, setCard] = useState({})

    const { id } = useParams()
    const cards = useLoaderData()
    useEffect(() => {
        const findCard = cards?.find(card => card.id == id)
        setCard(findCard)
        // console.log(findCard);

    }, [id, cards])


    const handleAddCard = () => {

        const addDonationCardsArray = []

        const donationCards = JSON.parse(localStorage.getItem('donations'))

        if (!donationCards) {
            addDonationCardsArray.push(card)
            localStorage.setItem('donations', JSON.stringify(addDonationCardsArray))
            swal("Good job!", "Donation cards Add successfully", "success")
        }
        else {

            const isExits = donationCards.find(card => card.id == id)
            if (!isExits) {
                addDonationCardsArray.push(...donationCards, card)
                localStorage.setItem('donations', JSON.stringify(addDonationCardsArray))
                swal("Good job!", "Donation cards Add successfully", "success")
            }
            else{
                swal('Error', 'Cards is all ready add','error')
            }
        }
    }

    return (
        <div className="md:px-32 mt-12  mx-auto space-y-5 h-[80vh] w-[90%] ">
            <img src={card.img} alt="" className="w-full h-full rounded" />
            <div className="absolute bg-black lg:left-[100px] md:left-[9%] -left-[18%] lg:-bottom-[10px] md:-bottom-10 -bottom-[72px] lg:w-[71.2%] md:w-[57%] w-[90.5%] h-20 mx-24 opacity-50 flex items-center rounded-lg">
                <button onClick={handleAddCard} style={{ backgroundColor: card.color }} className=" ml-11 px-3 py-2 rounded">Donate ${card.price}</button>
            </div>
            <h2 className="md:text-4xl text-3xl font-bold">{card.title}</h2>
            <p className="text-base font-normal">{card.description}</p>
        </div>
    );
};

export default Card;