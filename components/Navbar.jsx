
// import styles from '../styles';

import { motion } from 'framer-motion';


// import { navVariants } from '../utils/motion';
// import navcss from '../public/Navbar/navbar.css'
// import Navcss from '../styles'
export default function Navbar  () {
   return(
    <div>
  <body style={{backgroundColor:"#1A2238"}}>
   <header style={{backgroundColor:"#1A2238"}}className="header" id="header" >
       <nav  className="nav container"  >
            <div>
            <motion.a
                initial={{x:"-100vh"}} 
                animate={{x:0}}
                transition={{type:"spring" ,stiffness:"50",duration:5}}
                className="nav__logo" style={{color:"white",marginRight:"15px"}}>Technovanza</motion.a>
            </div>
         
            <motion.div
            initial={{x:"+100vh"}} 
            animate={{x:0}}
            transition={{type:"spring" ,stiffness:"50",duration:5}}
            className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                <li class="nav__item">
                <a href="#home" class="nav__link active-link">
                    <i class='bx bx-home-alt nav__icon'></i>
                    <span class="nav__name">Home</span>
                </a>
            </li>
                    <li className="nav__item">
                    <a href="/about" class="nav__link">
                    <i class='bx bx-user nav__icon'></i>
                    <span class="nav__name" >About</span>
                </a>
                    </li>


                    <li className="nav__item">
                        <a href="/skills" className="nav__link">
                            <i className='bx bx-book-alt nav__icon'></i>
                            <span className="nav__name">Skills</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/portfolio" className="nav__link">
                            <i className='bx bx-briefcase-alt nav__icon'></i>
                            <span className="nav__name">Portfolio</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/contactme" className="nav__link">
                            <i className='bx bx-message-square-detail nav__icon'></i>
                            <span className="nav__name">Contactme</span>
                        </a>
                    </li>
                </ul>
            </motion.div>
        </nav>
    </header>
</body>
  </div>
   )
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
 
  
}
// export default Navbar;

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
