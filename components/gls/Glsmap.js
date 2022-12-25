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
        <div className="text-center  text-gray-100 py-20 px-6">
          <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
          <h3 className="text-3xl font-bold mb-8">Subeading</h3>
          <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
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
