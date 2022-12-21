// 'use client';

// import { motion } from 'framer-motion';
// import { TypingText } from '../components';

// import styles from '../styles';
// import { fadeIn, staggerContainer } from '../utils/motion';

// const About = () => (
//   <section className={`${styles.paddings} relative z-10`}>
//     <div className="gradient-02 z-0" />
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
//     >
//       <TypingText title="| About Technovanza" textStyles="text-center text-teal-400 font-extrabold" />

//       <motion.p
//         variants={fadeIn('up', 'tween', 0.2, 1)}
//         className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
//       >
//         <span className="font-extrabold text-white">Technovanza</span> , the premiere technical group initiative of the VJTI Social Group, is one of Asia's Largest Techno-Manegerial Festival. Our prime time motto {' '}
//         <span className="font-extrabold text-white">
//           Taking Technology to Society
//         </span>{' '} one that was bestowed upon us by Late Dr. A P J Abdul Kalam. With the theme of the year{' '}
//         <span className="font-extrabold text-white">Revamping The Technical Cosmos</span> Technovanza aims to shrink the world around and showcase the high impact role of technology in shaping the generation of today.{' '}
//       </motion.p>

//       <motion.img
//         variants={fadeIn('up', 'tween', 0.3, 1)}
//         src="/arrow-down.svg"
//         alt="arrow down"
//         className="w-[18px] h-[28px] object-contain mt-[28px]"
//       />
//     </motion.div>
//   </section>
// );

// export default About;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import SupportIconImage from '../public/images/support-icon.svg';
import ShieldIconImage from '../public/images/shield-icon.svg';
import SimpleIconImage from '../public/images/simple-icon.svg';
// import styles from '../styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A232E',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = 'Guest Lecture Series featuring the worlds greatest speakers!';
const messageA = 'GLS';

const message1 = 'Explore a plethora of events focused on various technological domains.';
const messageB = 'Events';

const message2 = 'A footfall of around 80k+ was recorded in the previous year.';
const messageC = 'Footfall';

const AutoGridNoWrap = () => (
  <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} className="BOX">
    <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 2,
      }}
    >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={{ width: 50, height: 50, bgcolor: 'white' }}><Image alt="GLS Section" src={SupportIconImage} /> </Avatar>
        </Grid>
        <Grid item xs>
          <Typography style={{ paddingTop: '5px', color: '#ffffff', fontSize: '22px' }}>{messageA}</Typography>
          <Typography style={{ color: '#26A699', fontSize: '17px' }}>{message}</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
    <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 2,
      }}
    >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={{ width: 50, height: 50, bgcolor: 'white' }}><Image alt="Events Section" src={ShieldIconImage} /> </Avatar>
        </Grid>
        <Grid item xs>
          <Typography style={{ paddingTop: '5px', color: '#ffffff', fontSize: '22px' }}>{messageB}</Typography>
          <Typography style={{ color: '#26A699', fontSize: '17px' }}>{message1}</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
    <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 2,
      }}
    >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item style={{ color: 'white' }}>
          <Avatar sx={{ width: 50, height: 50, bgcolor: 'white' }}><Image alt="Footfall Section" src={SimpleIconImage} /> </Avatar>
        </Grid>
        <Grid item xs>
          <Typography style={{ paddingTop: '5px', color: '#ffffff', fontSize: '22px' }}>{messageC}</Typography>
          <Typography style={{ color: '#26A699', fontSize: '17px' }}>{message2}</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
  </Box>
);

export default AutoGridNoWrap;

// export default function About() {
//   return (
//     <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} className="BOX">
//       <StyledPaper
//         sx={{
//           my: 1,
//           mx: 'auto',
//           p: 2,
//         }}
//       >
//         <Grid container wrap="nowrap" spacing={2}>
//           <Grid item>
//             <Avatar>A</Avatar>
//           </Grid>
//           <Grid item xs>
//             <Typography style={{ color: "white" }}>{message}</Typography>
//           </Grid>
//         </Grid>
//       </StyledPaper>
//       <StyledPaper
//         sx={{
//           my: 1,
//           mx: 'auto',
//           p: 2,
//         }}
//       >
//         <Grid container wrap="nowrap" spacing={2}>
//           <Grid item>
//             <Avatar>E</Avatar>
//           </Grid>
//           <Grid item xs>
//             <Typography style={{ color: "white" }}>{message}</Typography>
//           </Grid>
//         </Grid>
//       </StyledPaper>
//       <StyledPaper
//         sx={{
//           my: 1,
//           mx: 'auto',
//           p: 2,
//         }}
//       >
//         <Grid container wrap="nowrap" spacing={2}>
//           <Grid item>
//             <Avatar>G</Avatar>
//           </Grid>
//           <Grid item xs>
//             <Typography style={{ color: "white" }}>{message}</Typography>
//           </Grid>
//         </Grid>
//       </StyledPaper>
//       <StyledPaper
//         sx={{
//           my: 1,
//           mx: 'auto',
//           p: 2,
//         }}
//       >
//         <Grid container wrap="nowrap" spacing={2}>
//           <Grid item>
//             <Avatar>F</Avatar>
//           </Grid>
//           <Grid item xs>
//             <Typography style={{ color: "white" }}>{message}</Typography>
//           </Grid>
//         </Grid>
//       </StyledPaper>
//     </Box>
//   );
// }
// @media screen and (min-width:900px){
//   .BOX{
//     display:flex;
//     flex-direction:row;
//   }
//   }