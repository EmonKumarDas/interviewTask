import React from 'react';

const LeftSidebar = () => {
    return (
        <div className=''>
            <div className="flex bg-gray-800 flex-col h-screen">
                <div className="p-4 bg-gray-200">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Home</button>
                </div>
                <div className="h-full"></div>
                <div className="p-4 bg-gray-200">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Exit</button>
                </div>
            </div>



        </div>

    );
};

export default LeftSidebar;