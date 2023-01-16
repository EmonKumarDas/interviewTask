import React from 'react';

const Home = ({ personDetails }) => {

    return (
        <div className='grid lg:grid-cols-2 lg:gap-0 gap-7 w-50vw m-auto place-items-center'>
            <div className="lg:text-left text-center">
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
                <p className='text-center font-bold text-xl'>{personDetails?.Gender}</p>
                <img height="200" width="300" src={personDetails.image} alt="" />
            </div>
        </div>
    );
};

export default Home;