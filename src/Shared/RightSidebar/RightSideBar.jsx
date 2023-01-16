import React, { useEffect, useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import UserData from './UserData';

const RightSideBar = ({ setPersonDetails }) => {
    let [person, setPerson] = useState([]);
    let[filtter,setFiltter] = useState([]);
    useEffect(() => {
        fetch("https://server-nine-topaz.vercel.app/get")
            .then(res => res.json())
            .then(result => setPerson(result))
    }, [])

    const handleFilter = () => {
        setFiltter(person);
    }

    return (
        <div className="flex flex-col h-full lg:mx-0 mx-16 my-2 p-3 overflow-y-auto dark:bg-gray-900 dark:text-gray-100">
            <div className="space-y-3">
                <div className="flex items-center justify-between dark:bg-gray-900">
                    <h2>Events</h2>
                    <button className="p-2">

                        <label onClick={handleFilter} htmlFor="my-modal-6" className="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-100">
                                <rect width="352" height="32" x="80" y="96"></rect>
                                <rect width="352" height="32" x="80" y="240"></rect>
                                <rect width="352" height="32" x="80" y="384"></rect>
                            </svg>
                        </label>
                        <Modal filtter={filtter}></Modal>
                    </button>
                </div>
                <div className=''>

                    {
                        person.map(getPersonData => <UserData
                            personData={getPersonData}
                            setPersonDetail={setPersonDetails}
                        ></UserData>)
                    }
                </div>
            </div>

        </div>
    );
};

export default RightSideBar;