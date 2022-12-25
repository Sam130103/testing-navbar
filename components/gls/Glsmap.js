'use client';

import React, { useEffect } from 'react';
import { gls } from '../../utils/gls.js';
import Glscard from './Glscard';

const Glsmap = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.maxWidth = '900px';
    document.body.style.margin = '20px auto';
    document.body.style.padding = '20px';
  }, []);
  return (
    <div>
      <div>
        <div className="text-center  text-gray-100 py-20">
          <h3 className="text-base font-bold mb-8 uppercase">Technovanza vjti <span className="text-sky-500">presents</span></h3>
          <h1 className="text-5xl font-bold mt-0 mb-8"><span className="text-sky-500">Guest Lecture</span> Series</h1>
          <h3 className="text-justify leading-5 mx-2 font-semibold text-gray-600 ">The motto of VJTI is to steer the all-round development of its students, to create individuals of the highest caliber, who not only go on to have the valuable contribtions in their field of expertise, but also establish themselves as concerned citizens of the society. With a renowned line - up of Guest Lectures over the years, Technovanza has always been a prime platform where the flame of expertise has been effectively transferred to many more torches. As part of our continued efforts in this respect, we have a series of Guest Lectures throughout the academic year and also during the days of the fest.</h3>
          <a className="inline-block  mt-12 px-7 py-3 bg-blue-500 text-white font-bold  leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">GLS On Youtube</a>
        </div>
        {/* <h1 className='text-white font-bold'>Technovanza VJTI <span style={{ color: '#26A699' }}>Presents</span></h1> */}
      </div>
      <div className="p-14  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {gls.map((e) => (
          <Glscard
            imgSrc={e.imageSrc}
            nam={e.name}
            des={e.designation}
            ur={e.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Glsmap;
