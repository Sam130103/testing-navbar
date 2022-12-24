// import { parserOptions } from 'eslint-config-next';
'use client';
import React from 'react'

const Glscard=({ imgSrc, nam }) =>(
        <div className="card-grid-space">
            <a className="card" style={{ backgroundImage: `url('${imgSrc}')` }}>
                {console.log(nam)}
                <div style={{ marginTop: "130px" }}>
                    <div style={{ marginRight: '100px' }}>
                        <h2 style={{ color: 'black' }}>{nam}</h2>
                    </div>
                </div>
            </a>
        </div >
);

export default Glscard;