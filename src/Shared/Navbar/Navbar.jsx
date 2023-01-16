import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let [Female, setFemale] = useState("");
  let [male, setmale] = useState("");
  useEffect(() => {
    fetch("https://server-emonkumardas.vercel.app/female")
      .then(res => res.json())
      .then(result => setFemale(result.length))
  }, [])
  useEffect(() => {
    fetch("https://server-emonkumardas.vercel.app/male")
      .then(res => res.json())
      .then(result => setmale(result.length))
  }, [])
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl">SECQURAISE</Link>
      </div>
      <div className="flex-none gap-2">
       
        <div className="dropdown dropdown-end">
          <div className='flex gap-2'>
            <p className='bg-blue-700 text-white p-2 rounded'>Female{Female}</p>
            <p className='bg-blue-700 text-white p-2 rounded'>male{male}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;