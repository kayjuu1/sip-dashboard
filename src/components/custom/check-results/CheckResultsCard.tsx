// import React from 'react';
// import {FaPlus} from 'react-icons/fa';
import {FaBook, FaReceipt} from "react-icons/fa6"; // Import FontAwesome for the plus icon


const CheckResultsCard = () => {
    return (
        <>
            <div
                className="max-w-xl p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="items-center justify-center flex flex-col">
                    <h5 className="text-xl font-semibold text-gray-800">Check Results</h5>
                    <FaReceipt className="text-blue-500 mt-4 text-3xl"/>
                </div>
            </div>
        </>
    );
};

export default CheckResultsCard;
