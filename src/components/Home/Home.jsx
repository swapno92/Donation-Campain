// import React from 'react';
import './Home.css'

import { useLoaderData } from "react-router-dom";
import Donate from "../Donate/Donate";
import { useState } from 'react';

const Home = () => {
    const donates = useLoaderData()
    const [searchItem, setSearchItem] = useState('')
    // const [showCards, setShowCards] = useState([])
    const filterData = donates?.filter((item)=>{
        if(item && item.category_name){
            return item.category_name.toLowerCase().includes(searchItem.toLowerCase())
        }
        return false
    })
    
    const handleSearch = () => {
        const searchValue = document.getElementById('searchInput').value
        setSearchItem(searchValue)
    }

    return (
        <>
            <div className="md:mx-0 mx-2 banner flex flex-col justify-center items-center space-y-6  mt-2  ">
                <h2 className="text-4xl font-bold text-center">I Grow By Helping People In Need</h2>
                <div className='div'>
                    <input type="text" name="" id="searchInput" placeholder="Search here..." className="border border-[rgba(11,11,11,0.40)] px-10 py-1 rounded-l" />
                    <button onClick={handleSearch} className="bg-[#FF444A] px-5 py-1 border border-[#ff444a] rounded-r">Search</button>
                </div>
            </div>
            {/* <img src="/fc1f79e18cdc1a12320b9b10ec3e253d.jpg" alt="" className="h-[90vh] w-full  -top-32 opacity-20 " /> */}

            <div className="absolute grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto w-full md:px-32 px-2 gap-4">

                {
                    filterData.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
                }
            </div>
        </>
    );
};

export default Home;