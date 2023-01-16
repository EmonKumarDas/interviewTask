import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

const Modal = ({ filtter }) => {
    const [date, setDate] = useState("");
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const maleData = filtter.filter(({ data }) =>
        data.some(({ Gender }) => Gender === "Male")
    );
    let male = maleData[0]?.data[0].Gender;

    const femaleData = filtter.filter(({ data }) =>
        data.some(({ Gender }) => Gender === "Female")
    );
    let female = femaleData[0]?.data[0].Gender;

    const chLocation = filtter.filter(({ data }) =>
        data.some(({ Location }) => Location === "Chennai")
    );
    let chennai = chLocation[0]?.data[0].Location;

    const hbLocation = filtter.filter(({ data }) =>
        data.some(({ Location }) => Location === "Hyderabad")
    );
    let hyderabad = hbLocation[0]?.data[0].Location;

    const BgLocation = filtter.filter(({ data }) =>
        data.some(({ Location }) => Location === "Bangalore")
    );
    let Bangalore = BgLocation[0]?.data[0].Location;

    return (
        <div>
            {/* The button to open modal */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>Gender</option>
                            <option>{male}</option>
                            <option>{female}</option>
                        </select>

                        <select className="select select-bordered w-full max-w-xs mt-2">
                            <option selected>Location</option>
                            <option>{chennai}</option>
                            <option>{hyderabad}</option>
                            <option>{Bangalore}</option>
                        </select>
                        <input defaultValue={date.toString()} type="text" placeholder="Type here" className="input input-bordered mt-2 w-full max-w-xs" />
                
                        <div>
                            <button className='btn mt-3' onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
                                {isCalendarOpen ? '' : ''} Select Date
                            </button>
                            {isCalendarOpen && (
                                <Calendar
                                    onChange={setDate}
                                    value={date}
                                />
                            )}
                           
    
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;