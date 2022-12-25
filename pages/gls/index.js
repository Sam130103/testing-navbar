'use client';

// import { rgbToHex } from "@mui/material";

// import { NavbarCopy } from '../../components';
// import { gls } from '../../utils/gls.js';
import { Navbar } from '../../components';
import GlsHeading from '../../components/gls/GlsHeading';
import Glsmap from '../../components/gls/Glsmap';

const Gls = () => (
  <div>
    <Navbar />
    {/* //   <div className="font-bold text-white">
  //     hello
  //   </div> */}
    <Glsmap />
    <GlsHeading />
  </div>
);

export default Gls;
