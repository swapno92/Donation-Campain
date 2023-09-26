import { NavLink } from "react-router-dom";
import './Header.css'

// import React from 'react';
const Header = () => {
    return (
        <>
            <nav className="md:flex justify-between  text-center px-32 items-center mt-8 md:space-y-0 space-y-3 ">
                <img src="/Logo.png" alt="" className="w-48  flex text-center" />
                <ul className="flex gap-10 font-normal text-lg justify-center ">
                    <li>
                        <NavLink to='/' className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-[#ff444A] underline font-bold text-lg" : ""
                        }>Home</NavLink>


                    </li>
                    <li>
                        <NavLink to='/donation' className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-[#ff444A] underline font-bold text-lg" : ""
                        } >Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/static' className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-[#ff444A] underline font-bold text-lg" : ""
                        } >Statistics</NavLink>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default Header;