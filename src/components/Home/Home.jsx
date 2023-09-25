// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Donate from "../Donate/Donate";

const Home = () => {
    const donates = useLoaderData()
    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-6  mt-20 h-80 line">
                <h2 className="text-4xl font-bold text-center">I Grow By Helping People In Need</h2>
                <div>
                    <input type="text" name="" id="" placeholder="Search here..." className="border border-[rgba(11,11,11,0.40)] px-10 py-1 rounded-l" />
                    <button className="bg-[#FF444A] px-5 py-1 border border-[#ff444a] rounded-r">Search</button>
                </div>
            </div>
            <img src="/fc1f79e18cdc1a12320b9b10ec3e253d.jpg" alt="" className="h-[90vh] w-full absolute -top-32 opacity-20 " />

            <div className="absolute grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto w-full px-32 gap-4">

                {
                    donates.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
                }
            </div>
        </>
    );
};

export default Home;