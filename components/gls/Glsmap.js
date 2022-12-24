'use client';

// import { rgbToHex } from "@mui/material";

// import { NavbarCopy } from '../../components';
import {glsdata} from '../../utils/glsdata.js';
import Glscard from './Glscard';

const Glsmap = () => (
  <div>
    <section className="cards-wrapper">
      {glsdata.map((e) => (
        <Glscard imgSrc={e.imageSrc} nam={e.name} />
      ))}
    </section>
  </div>
);

export default Glsmap;
