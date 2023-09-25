// import React from 'react';

const DonationCard = ({ card }) => {
    const { id, card_background, title, category_name, img, color, category_background, price } = card
    return (
        <div style={{ backgroundColor: card_background }} className="flex ">
            <div className=" w-40 h-40">
                <img src={img} alt="" className="w-full h-full"/>
            </div>
            <div className="pl-3 pt-6">
                <button style={{ backgroundColor: category_background, color: color }} className='text-sm font-medium px-3 py-1  rounded '>{category_name}</button>
                <h2 className='text-2xl font-semibold '>{title}</h2>
                <p style={{ color: color }}>${price}.00</p>
                <button style={{ backgroundColor: color }} className="text-white  px-3 py-2 rounded">View Details</button>
            </div>
        </div>
    );
};

export default DonationCard;