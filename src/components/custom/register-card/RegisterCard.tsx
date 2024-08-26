// import React from 'react';
import {FaPlus} from 'react-icons/fa'; // Import FontAwesome for the plus icon


const RegisterCard = () => {
    return (
        <>
            <div
                className="max-w-xl p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="items-center justify-center flex flex-col">
                    <h5 className="text-xl font-semibold text-gray-800">Register Course</h5>
                    <FaPlus className="text-blue-500 mt-4 text-3xl"/>
                </div>
            </div>
        </>
    );
};

export default RegisterCard;
