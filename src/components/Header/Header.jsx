import { NavLink } from "react-router-dom";
import './Header.css'

// import React from 'react';
const Header = () => {
    return (
        <>
            <nav className="md:flex justify-between px-32 items-center mt-8 md:space-y-0 space-y-3 line">
                <img src="/Logo.png" alt="" className="w-48" />
                <ul className="flex gap-10 font-normal text-lg">
                    <li>
                        <NavLink to='/' className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-[#ff444A] underline font-bold text-lg" : ""
                        }>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-[#ff444A] underline font-bold text-lg" : ""
                        }>Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-[#ff444A] underline font-bold text-lg" : ""
                        }>Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* <section className="absolute flex flex-col h-[65vh] justify-center items-center  line mx-auto w-[500px] line">

            </section> */}
            {/* <div className="flex flex-col justify-center items-center space-y-6  mt-20 h-80 line">
                <h2 className="text-4xl font-bold text-center">I Grow By Helping People In Need</h2>
                <div>
                    <input type="text" name="" id="" placeholder="Search here..." className="border border-[rgba(11,11,11,0.40)] px-10 py-1 rounded-l" />
                    <button className="bg-[#FF444A] px-5 py-1 border border-[#ff444a] rounded-r">Search</button>
                </div>
            </div>
            <img src="/fc1f79e18cdc1a12320b9b10ec3e253d.jpg" alt="" className="h-[90vh] w-full absolute -top-32 opacity-20 " /> */}
        </>
    );
};

export default Header;