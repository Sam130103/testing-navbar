'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const Navbar = () => (

  <div>
    <Head />
    <header
      // style={{ backgroundColor: '#1A2238' }}
      className="header_copy"
      id="header"
    >

      <nav className="nav container ">

        <div style={{ fontSize: '40px', fontWeight: '50px', display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginTop: '5px' }}>
            <img
              src="/LOGO_40PX.png"
              alt="Cosmos Stars"
            // className="w-full sm:h-[720px] h-[720px] object-cover  z-10 relative"
            />
          </div>
          <a href="/">
            <h1 className="navbarFont" style={{ color: 'white', opacity: 1 }}>Techno<span style={{ color: '#26A699' }}>Vanza</span></h1>
          </a>
        </div>

        <motion.div
          initial={{ x: '+100vh' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: '50', duration: 5 }}
          className="nav__menu"
          id="nav-menu"
        >
          <ul className="nav__list ">
            <li className="nav__item " style={{ marginLeft: '15px' }}>
              <a href="/" className="nav__link  ">
                <i className="bx bx-home-alt nav__icon" />
                <span className=" nav__name">Home</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="/events" className="nav__link">
                <i className="bx bx-user nav__icon" />
                <span className="nav__name">Events</span>
              </a>
            </li>

            <li className="nav__item">
              <Link href="/gls" className="nav__link">
                <i className="bx bx-book-alt nav__icon" />
                <span className="nav__name">GLS</span>
              </Link>
            </li>

            <li className="nav__item">
              <a href="/gallery" className="nav__link">
                <i className="bx bx-briefcase-alt nav__icon" />
                <span className="nav__name">Gallery</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="/about" className="nav__link">
                <i className="bx bx-message-square-detail nav__icon" />
                <span className="nav__name">About</span>
              </a>
            </li>
            <li className="nav__item" style={{ marginRight: '15px' }}>
              <a href="/login" className="nav__link">
                <i className="bx bx-message-square-detail nav__icon" />
                <span className="nav__name">Login</span>
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </header>
  </div>
);
// <motion.nav
//   variants={navVariants}
//   initial="hidden"
//   whileInView="show"
//   classNameName={`${styles.xPaddings} py-8 fixed`}
// >
//   <div classNameName="absolute w-[50%] inset-0 gradient-01" />
//   <div
//     classNameName={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
//   >
//     <img
//       src="/search.svg"
//       alt="search"
//       classNameName="w-[24px] h-[24px] object-contain"
//     />
//     <h2 classNameName="font-extrabold text-[24px] leading-[30.24px] text-white">
//       METAVERSUS
//     </h2>
//     <img
//       src="/menu.svg"
//       alt="menu"
//       classNameName="w-[24px] h-[24px] object-contain"
//     />
//   </div>
// </motion.nav>

export default Navbar;

// import React from "react";
// import { navLinks } from "../utils/data";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header style={{position:"fixed",backgroundColor:"black"}}>
//       <nav style={{display:"flex",justifyContent:"space-between",marginLeft:"800px",color:"white",marginRight:"25px"}}>
//         {navLinks.map((link, index) => {
//           return (
//             <ul style={{margin:"10px"}}>
//               <Link href={link.path}>
//                 <li key={index}>{link.name}</li>
//               </Link>
//             </ul>
//           );
//         })}
//       </nav>
//     </header>
//   );
// }

// import { useState, useEffect } from 'react'
// import { navLinks } from "../utils/data";
// import react from 'react';
// import Link from 'next/link';
// function Navbar() {
//   const [isSticky, setSticky] = useState(false)

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY > 0) {
//         setSticky(true)
//       } else {
//         setSticky(false)
//       }
//     })
//   }, [])

//   return (
//     <div style={{backgroundColor:"black"}}>
//     <nav style={{position:"fixed",top:"0px",left:"0px",right:"0px",overflow:"hidden",display:"flex",justifyContent:"space-between",marginLeft:"800px",marginRight:"10px"}}>
//     {navLinks.map((link, index) => {
//                 return (
//                   <ul style={{margin:"10px"}}>
//                     <Link href={link.path}>
//                       <li key={index} style={{color:"white"}}>{link.name}</li>
//                     </Link>
//                   </ul>
//                 );
//               })}
//     </nav>
//     </div>

//   )
// }
// export default Navbar;

// import React, { useState } from "react";
// import Image from 'next/image';
// // import logo from "../../static/images/logo.png";
// // import { useUserContext } from "../../services/userContext";
// import { useRouter } from "next/router";
// import { MotionConfig } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "../styles/globals.css";

// export default function NavBar() {
//     const [active, setActive] = useState(false);

//     // const { user, logOutUser } = useUserContext();
//     const router = useRouter();

//     const redirectToLogin = () => {
//         window.localStorage.clear();
//         logOutUser(router);
//     }

//     const handleClick = () => {
//         setActive(!active);
//     };
//     // classNameName='flex items-center flex-wrap bg-black p-3 sm:px-10 '
//     return (
//         <>
//           <div>
//           <script src="https://bootstrapcreative.com/wp-bc/wp-content/themes/wp-bootstrap/codepen/bootstrapcreative.js?v=4"></script>
//           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

//   <a className="navbar-brand d-lg-none" href="#" style={{color:"white"}}>Navbar</a>

//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">

//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link active" href="#" style={{color:"white"}}>Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#" style={{color:"white"}}>Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#" style={{color:"white"}}>Link</a>
//       </li>
//     </ul>
//     <a className="navbar-brand d-none d-lg-block" href="#" style={{color:"white"}}>Navbar</a>

//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//     </ul>
//   </div>
// </nav>

//           </div>
//         </>
//     );
// };
