// import React from 'react';

import { Link } from "react-router-dom";

const Donate = ({ donate }) => {
    const { id, card_background, title, category_name, img, color, category_background } = donate
    // console.log(text_color);
    return (
        <Link to={`/donate/${id}`}>
            <div style={{ backgroundColor: card_background, color: color }} >
                <div className='mx-auto w-[full] h-[155px]'>
                    <img src={img} className="w-full h-full" />
                </div>
                <button style={{ backgroundColor: category_background }} className='text-sm font-medium ml-3 px-3 py-1 mt-2 rounded '>{category_name}</button>
                <h2 className='text-xl font-semibold ml-3 mb-3 '>{title}</h2>
            </div >
        </Link>
    );
};

export default Donate;