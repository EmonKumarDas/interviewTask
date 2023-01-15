import React from 'react';

const UserData = ({ personData, setPersonDetail }) => {
    let Data = personData.data;

    let handlePersonData = (person) => {
        setPersonDetail(person)
    }

    return (
        Data.map(person =>
            <div onClick={() => handlePersonData(person)} className='bg-slate-600 cursor-pointer p-2 rounded m-auto my-3'>
                <div className='flex justify-between'>
                    <p>EVT0050:{person.Location}</p>
                    <p>{person.Time} {person.Date}</p>
                </div>
                <p>person detected</p>
            </div>)
    );
};

export default UserData;