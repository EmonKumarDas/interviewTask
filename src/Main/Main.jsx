import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Home/Home';
// import Home from '../Components/Home/Home';
import LeftSidebar from '../Shared/leftSidebar/LeftSidebar';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideBar from '../Shared/RightSidebar/RightSideBar';

const Main = () => {
    const [personDetails, setPersonDetails] = useState("");
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='grid grid-cols-8'>
                <div className='col-span-1 h-[90vh]'><LeftSidebar></LeftSidebar></div>
                <div className='col-span-5'><Home personDetails={personDetails}></Home></div>
                <div className='col-span-2 h-[90vh]'><RightSideBar setPersonDetails={setPersonDetails}></RightSideBar></div>
            </div>
        </div>
    );
};

export default Main;