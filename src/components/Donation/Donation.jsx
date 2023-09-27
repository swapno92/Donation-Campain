// import React from 'react';

import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
    const [donation, setDonation] = useState([])
    const [notfound, setNotfound] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {

        const donationCards = JSON.parse(localStorage.getItem('donations'))

        if (donationCards) {
            setDonation(donationCards)
        }
        else {
            setNotfound('No Data Found')
        }
    }, [])


    return (
        <div className="md:px-32 px-3 space-y-5 ">
            {notfound ? <p className="h-[80vh] flex justify-center items-center">{notfound}</p>
                :
                <div>
                    <div className="grid md:grid-cols-2 grid-cols-1  mt-12 gap-4">
                        {
                            show ?
                                donation.map(card =>
                                    <DonationCard key={card.id} card={card}></DonationCard>)
                                :
                                donation.slice(0, 4).map(card =>
                                    <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                    </div>
                </div>
            }
            {donation.length > 4 && <div className={`flex justify-center items-center ${show?'hidden' : 'block'}`}>
                <button onClick={() => setShow(!show)} className="bg-[#009444] text-white px-3 py py-2 rounded-lg">See more</button>
            </div>}
        </div>
    );
};

export default Donation;