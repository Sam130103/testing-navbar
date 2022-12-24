'use client';

// import { rgbToHex } from "@mui/material";

// import { NavbarCopy } from '../../components';
import  glsdata  from '../../utils/glsdata.js'
import  Glscard  from '../Glscards/Glscard'
const Glsmap = () => (
    <div>
        <section className="cards-wrapper">
            {glsdata.map((e) => (
                
                <div>
                {console.log(e.imageSrc)}
                </div>
            ))}
        </section>
    </div>
);

export default Glsmap;
