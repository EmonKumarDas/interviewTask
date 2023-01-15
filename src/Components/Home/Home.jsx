import React from 'react';

const Home = ({ personDetails }) => {

    return (
        <div className='grid grid-cols-2 w-[50vw] m-auto'>
            <div className=''>
                <h1 className='font-bold'>{personDetails?.ID}</h1>
                <p>person detected</p>
                <p>Name: {personDetails?.Name}</p>
                <p>Location: {personDetails?.Location}</p>
                <p>Date: {personDetails?.Date}</p>
                <p>Time: {personDetails?.Time}</p>
                <p>Description: {personDetails?.Name} at {personDetails?.Location} on {personDetails?.Date}</p>

            </div>

            {/* detected person profile */}
            <div>
                <p>{personDetails?.Gender}</p>
                <img src={personDetails.image} alt="" />
            </div>
        </div>
    );
};

export default Home;