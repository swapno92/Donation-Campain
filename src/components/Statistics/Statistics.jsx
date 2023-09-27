// import React from 'react';

import { useLoaderData } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const Statistics = () => {
    const categories = useLoaderData();

    const donationData = [
        {
            name: 'totalDonation',
            donation: categories?.length,
        },
        {
            name: 'yourDonation',
            donation: JSON.parse(localStorage.getItem('donations'))?.length,
        },
    ];
    return (
        <>
            <div className=" mx-3 flex justify-center items-center">
                <PieChart height={400} width={500}>
                    <Pie
                        data={donationData}
                        dataKey="donation"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        label={(val) => (val.percent * 100).toFixed(2) + '%'}>
                        <Cell key="donation" fill="#FF444A" />
                        <Cell key="donation" fill="#00C49F" />
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </>
    );
};

export default Statistics;