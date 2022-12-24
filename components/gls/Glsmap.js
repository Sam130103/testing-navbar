'use client';

// import { rgbToHex } from "@mui/material";

// import { NavbarCopy } from '../../components';
import { gls } from '../../utils/gls.js';
import Glscard from './Glscard';

const Glsmap = () => (
  <div>
    <section className="cards-wrapper">
      {gls.map((e) => (
        <Glscard imgSrc={e.imageSrc} nam={e.name} />
      ))}
    </section>
  </div>
);

export default Glsmap;
