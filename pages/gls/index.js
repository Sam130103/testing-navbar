'use client';

// import { rgbToHex } from "@mui/material";

// import { NavbarCopy } from '../../components';
// import { gls } from '../../utils/gls.js';
import { Navbar } from '../../components';
import GlsHeading from '../../components/gls/GlsHeading';
import Glsmap from '../../components/gls/Glsmap';
import Glshead from '../../components/gls/Glshead';
import Globe from './globe';
const Gls = () => (
  <div>

    {/* //   <div className="font-bold text-white">
  //     hello
  //   </div> */}
    <Navbar />
    <Glshead />
    <Glsmap />
  </div>
);

export default Gls;
