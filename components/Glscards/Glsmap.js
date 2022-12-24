'use client';

// import { rgbToHex } from "@mui/material";

// import { NavbarCopy } from '../../components';
import { gls } from '../../utils/gls.js'
import { Glscard } from '../Glscards/Glscard'
const Glsmap = () => (
    <div>
        <section class="cards-wrapper">
            {gls.map((e) => (
                <Glscard imgSrc={e.imageSrc} nam={e.name} />
            ))}
        </section>
    </div>
);

export default Glsmap;
