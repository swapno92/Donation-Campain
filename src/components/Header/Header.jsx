import { NavLink } from "react-router-dom";
import './Header.css'

// import React from 'react';
const Header = () => {
    return (
        <div className='w-full'>
            <div className="absolute z-10 w-full">
                <nav className="md:flex justify-between px-32 items-center mt-8 md:space-y-0 space-y-3">
                    <img src="../../../public/Logo.png" alt="" className="w-48" />
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
                <section className=" flex flex-col h-[65vh] justify-center items-center space-y-6">
                    <h2 className="text-4xl font-bold text-center">I Grow By Helping People In Need</h2>
                    <div>
                        <input type="text" name="" id="" placeholder="Search here..." className="border border-[rgba(11,11,11,0.40)] px-10 py-1 rounded-l" />
                        <button className="bg-[#FF444A] px-5 py-1 border border-[#ff444a] rounded-r">Search</button>
                    </div>
                </section>
            </div>
                <img src="../../../public/fc1f79e18cdc1a12320b9b10ec3e253d.jpg" alt="" className="h-[90vh] w-full absolute -top-32 opacity-20"/>

        </div>
    );
};

export default Header;